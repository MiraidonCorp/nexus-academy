import { Fragment } from 'react';
import type { Block } from '@/lib/content/courses/types';
import Inline from './Inline';
import styles from './lesson.module.css';

const calloutIcon: Record<string, string> = {
  info: 'ℹ️',
  spark: '✨',
  danger: '⚡',
};

const calloutClass: Record<string, string> = {
  info: styles.calloutInfo,
  spark: styles.calloutSpark,
  danger: styles.calloutDanger,
};

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <BlockRenderer key={i} block={block} />
      ))}
    </>
  );
}

function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className={styles.paragraph}>
          <Inline text={block.text} />
        </p>
      );

    case 'heading':
      return <h3 className={styles.heading}>{block.text}</h3>;

    case 'list':
      return (
        <ul className={styles.list} style={{ listStyleType: block.ordered ? 'decimal' : 'disc' }}>
          {block.items.map((item, i) => (
            <li key={i}>
              <Inline text={item} />
            </li>
          ))}
        </ul>
      );

    case 'card':
      return (
        <div className={styles.card}>
          <p className={styles.cardTitle}>
            {block.icon && <span aria-hidden="true">{block.icon}</span>}
            {block.title}
          </p>
          <p className={styles.cardBody}>
            <Inline text={block.body} />
          </p>
        </div>
      );

    case 'steps':
      return (
        <div className={styles.steps} role="list">
          {block.items.map((item, i, arr) => (
            <Fragment key={item.title}>
              <div
                className={[styles.step, item.highlight ? styles.stepHighlight : ''].join(' ')}
                role="listitem"
              >
                {item.eyebrow && <span className={styles.stepEyebrow}>{item.eyebrow}</span>}
                <span className={styles.stepTitle}>
                  {item.icon && <span aria-hidden="true">{item.icon} </span>}
                  {item.title}
                </span>
                <span className={styles.stepBody}>
                  <Inline text={item.body} />
                </span>
              </div>
              {i < arr.length - 1 && (
                <span className={styles.stepArrow} aria-hidden="true">
                  →
                </span>
              )}
            </Fragment>
          ))}
        </div>
      );

    case 'stats':
      return (
        <div className={styles.stats}>
          {block.items.map((item) => (
            <div
              key={item.label}
              className={[styles.stat, item.highlight ? styles.statHighlight : ''].join(' ')}
            >
              <div className={styles.statValue}>{item.value}</div>
              <div className={styles.statLabel}>
                <Inline text={item.label} />
              </div>
            </div>
          ))}
        </div>
      );

    case 'callout':
      return (
        <div className={[styles.callout, calloutClass[block.variant]].join(' ')}>
          <span className={styles.calloutIcon} aria-hidden="true">
            {block.icon ?? calloutIcon[block.variant]}
          </span>
          <div>
            <p className={styles.calloutTitle}>{block.title}</p>
            <p className={styles.calloutBody}>
              <Inline text={block.body} />
            </p>
          </div>
        </div>
      );

    case 'checklist':
      return (
        <div className={styles.checklist}>
          {block.title && <p className={styles.checklistTitle}>{block.title}</p>}
          <div className={styles.checklistItems}>
            {block.items.map((item, i) => (
              <div key={i} className={styles.checklistItem}>
                <svg className={styles.checklistIcon} aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="1" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                <span>
                  <Inline text={item} />
                </span>
              </div>
            ))}
          </div>
        </div>
      );

    case 'table':
      return (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            {block.caption && <caption>{block.caption}</caption>}
            <thead>
              <tr>
                {block.columns.map((col) => (
                  <th key={col} scope="col">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>
                      <Inline text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'code':
      return (
        <div className={styles.codeWrap}>
          {block.caption && <p className={styles.codeCap}>{block.caption}</p>}
          <pre className={styles.code}>
            <code>{block.code}</code>
          </pre>
        </div>
      );

    case 'tags':
      return (
        <div className={styles.tags}>
          {block.items.map((item, i, arr) => (
            <Fragment key={item.text}>
              <span className={styles.tag}>
                {item.text}
                {item.sub && <span className={styles.tagSub}>{item.sub}</span>}
              </span>
              {i < arr.length - 1 && (
                <span className={styles.tagConnector} aria-hidden="true">
                  +
                </span>
              )}
            </Fragment>
          ))}
        </div>
      );

    default:
      return null;
  }
}
