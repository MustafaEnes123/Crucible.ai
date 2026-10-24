import React from 'react';
import { CodeBlock } from './ui';

interface MarkdownViewProps {
  content: string;
}

function renderInline(text: string): React.ReactNode[] {
  return text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((token, idx) => {
    if (token.length > 2 && token.startsWith('`') && token.endsWith('`')) {
      return (
        <code
          key={idx}
          className="px-1.5 py-0.5 rounded border border-ink bg-soft font-mono text-[0.88em] text-ink"
        >
          {token.slice(1, -1)}
        </code>
      );
    }
    if (token.length > 4 && token.startsWith('**') && token.endsWith('**')) {
      return (
        <strong key={idx} className="font-extrabold text-ink">
          {token.slice(2, -2)}
        </strong>
      );
    }
    return token;
  });
}

const splitRow = (line: string): string[] =>
  line
    .trim()
    .replace(/^\||\|$/g, '')
    .split('|')
    .map((c) => c.trim());

function renderTextBlock(segment: string, keyPrefix: string): React.ReactNode {
  const lines = segment.split('\n');
  const nodes: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trim();
    const key = `${keyPrefix}-${i}`;

    if (!line) {
      i++;
      continue;
    }

    if (line.startsWith('|') && i + 1 < lines.length && /^\s*\|?\s*:?-{2,}/.test(lines[i + 1])) {
      const header = splitRow(line);
      const rows: string[][] = [];
      i += 2;
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(splitRow(lines[i]));
        i++;
      }
      nodes.push(
        <div key={key} className="overflow-x-auto rounded-md border-2 border-ink">
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="bg-soft border-b-2 border-ink">
                {header.map((h, c) => (
                  <th key={c} className="px-3 py-2 font-mono font-bold uppercase text-[11px]">
                    {renderInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className="border-b border-ink/30 last:border-b-0">
                  {r.map((cell, c) => (
                    <td key={c} className="px-3 py-2 align-top">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    if (/^---+$/.test(line)) {
      nodes.push(<hr key={key} className="border-t-2 border-ink my-2" />);
    } else if (line.startsWith('### ')) {
      nodes.push(
        <h4 key={key} className="text-[15px] font-black text-ink pt-2">
          {renderInline(line.slice(4))}
        </h4>
      );
    } else if (line.startsWith('## ')) {
      nodes.push(
        <h3 key={key} className="text-[17px] font-black text-ink pt-3">
          {renderInline(line.slice(3))}
        </h3>
      );
    } else if (line.startsWith('# ')) {
      nodes.push(
        <h2 key={key} className="text-[21px] font-black text-ink pt-3">
          {renderInline(line.slice(2))}
        </h2>
      );
    } else if (line.startsWith('> ')) {
      nodes.push(
        <blockquote key={key} className="border-l-4 border-secondary pl-3 text-muted">
          {renderInline(line.slice(2))}
        </blockquote>
      );
    } else if (/^[-*]\s+/.test(line)) {
      nodes.push(
        <div key={key} className="flex items-start gap-2.5 pl-1">
          <span className="mt-2 w-2 h-2 border-2 border-ink bg-primary shrink-0" aria-hidden="true" />
          <span className="flex-1">{renderInline(line.replace(/^[-*]\s+/, ''))}</span>
        </div>
      );
    } else {
      const numbered = line.match(/^(\d+)\.\s+(.*)$/);
      if (numbered) {
        nodes.push(
          <div key={key} className="flex items-start gap-2.5 pl-1">
            <span className="font-mono font-bold text-[13px] mt-0.5 min-w-[1.5rem] text-accent">
              {numbered[1]}.
            </span>
            <span className="flex-1">{renderInline(numbered[2])}</span>
          </div>
        );
      } else {
        nodes.push(<p key={key}>{renderInline(raw)}</p>);
      }
    }
    i++;
  }

  return <div key={keyPrefix} className="space-y-2">{nodes}</div>;
}

export const MarkdownView: React.FC<MarkdownViewProps> = ({ content }) => {
  if (!content) return null;
  const segments = content.split(/(```[\s\S]*?```)/g);

  return (
    <div className="space-y-2 text-[15px] leading-relaxed text-ink">
      {segments.map((segment, idx) => {
        if (segment.startsWith('```') && segment.endsWith('```') && segment.length >= 6) {
          const body = segment.slice(3, -3);
          const newline = body.indexOf('\n');
          const language = newline === -1 ? '' : body.slice(0, newline).trim();
          const code = newline === -1 ? body : body.slice(newline + 1).replace(/\n$/, '');
          return <CodeBlock key={idx} language={language} code={code} />;
        }
        return renderTextBlock(segment, `seg-${idx}`);
      })}
    </div>
  );
};
