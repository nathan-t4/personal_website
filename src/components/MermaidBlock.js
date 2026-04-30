'use client';

import { useEffect, useId, useState } from 'react';

let mermaidModulePromise;
let mermaidInitialized = false;

function loadMermaid() {
  if (!mermaidModulePromise) {
    mermaidModulePromise = import('mermaid').then((m) => m.default);
  }
  return mermaidModulePromise;
}

async function getMermaid() {
  const mermaid = await loadMermaid();
  if (!mermaidInitialized && typeof window !== 'undefined') {
    mermaid.initialize({
      startOnLoad: false,
      theme: window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'default',
    });
    mermaidInitialized = true;
  }
  return mermaid;
}

export default function MermaidBlock({ chart }) {
  const id = useId().replace(/:/g, '');
  const [svg, setSvg] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const mermaid = await getMermaid();
        if (cancelled) return;
        const { svg: out } = await mermaid.render(`mermaid-${id}`, chart);
        if (!cancelled) setSvg(out);
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : String(e));
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  if (error) {
    return (
      <pre className="text-sm text-red-600 dark:text-red-400 whitespace-pre-wrap p-4 bg-red-50 dark:bg-red-950/30 rounded-lg">
        {error}
      </pre>
    );
  }
  if (!svg) {
    return (
      <div
        className="animate-pulse rounded-lg bg-slate-200 dark:bg-slate-700 h-32"
        aria-hidden
      />
    );
  }
  return (
    <div
      className="mermaid-svg flex justify-center [&_svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
