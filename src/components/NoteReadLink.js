'use client';

import posthog from 'posthog-js';

export default function NoteReadLink({ href, slug, title, children, className }) {
  return (
    <a
      href={href}
      onClick={() => posthog.capture('note_read_clicked', { note_slug: slug, note_title: title })}
      className={className}
    >
      {children}
    </a>
  );
}
