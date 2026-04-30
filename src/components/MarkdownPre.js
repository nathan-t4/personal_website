import React from 'react';
import MermaidBlock from './MermaidBlock';

function flattenText(node) {
  if (node == null) return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(flattenText).join('');
  if (React.isValidElement(node)) return flattenText(node.props.children);
  return '';
}

export function MarkdownPre({ children }) {
  const kids = React.Children.toArray(children);
  const first = kids[0];
  const isMermaid =
    kids.length === 1 &&
    React.isValidElement(first) &&
    typeof first.props.className === 'string' &&
    first.props.className.split(/\s+/).includes('language-mermaid');

  if (isMermaid) {
    const chart = flattenText(first.props.children).replace(/\n$/, '');
    return (
      <div className="my-6 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-4">
        <MermaidBlock chart={chart} />
      </div>
    );
  }

  return (
    <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto mb-4">
      {children}
    </pre>
  );
}
