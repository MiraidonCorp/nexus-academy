import { Fragment } from 'react';

/**
 * Tiny inline markup renderer for lesson prose: **bold**, `code`, *italic*.
 * Source content is our own curriculum text, not user input, so no sanitization needed.
 */
export default function Inline({ text }: { text: string }) {
  const pattern = /(\*\*.+?\*\*|`.+?`|\*.+?\*)/g;
  const parts = text.split(pattern).filter((part) => part.length > 0);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code key={i} style={{ fontFamily: 'var(--font-mono, monospace)' }}>
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
