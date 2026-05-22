'use client';

import posthog from 'posthog-js';

export default function ProjectLinkButtons({ title, demo, source, technologies }) {
  return (
    <div className="flex gap-4">
      {demo && demo !== '#' && (
        <a
          href={demo}
          onClick={() => posthog.capture('project_demo_clicked', { project_title: title, demo_url: demo })}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
        >
          {technologies && technologies.includes('Research') ? 'Paper' : 'View Live Demo'}
        </a>
      )}
      {source && source !== '#' && (
        <a
          href={source}
          onClick={() => posthog.capture('project_source_clicked', { project_title: title, source_url: source })}
          className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
        >
          View Source Code
        </a>
      )}
    </div>
  );
}
