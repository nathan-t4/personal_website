<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of your personal website with PostHog analytics. PostHog is now initialized via `instrumentation-client.js` (the recommended approach for Next.js 15.3+) and routes all tracking through a reverse proxy configured in `next.config.mjs`. Six client-side events are now tracked across the site, covering the key engagement actions a visitor can take: clicking social links, reading notes, browsing projects, and making contact.

New files created:
- `instrumentation-client.js` — PostHog client-side init (posthog-js)
- `src/components/ProjectLinkButtons.js` — client component wrapping project demo/source buttons with tracking
- `src/components/NoteReadLink.js` — client component wrapping note title/read-more links with tracking

Existing files modified:
- `next.config.mjs` — added PostHog reverse proxy rewrites and `skipTrailingSlashRedirect`
- `src/components/SocialLinks.js` — added `social_link_clicked` capture on all link clicks
- `src/components/ui/ProjectCard.js` — added `project_card_clicked` capture on project card clicks
- `src/app/projects/[slug]/page.js` — replaced inline buttons with `ProjectLinkButtons` component
- `src/app/notes/page.js` — replaced `<a>` note links with `NoteReadLink` component
- `src/app/contact/page.js` — added `contact_email_clicked` capture on email link click

| Event | Description | File |
|---|---|---|
| `social_link_clicked` | User clicked a social/external link (GitHub, LinkedIn, Scholar, CV, Email) | `src/components/SocialLinks.js` |
| `project_card_clicked` | User clicked a project card from the projects listing | `src/components/ui/ProjectCard.js` |
| `project_demo_clicked` | User clicked "View Live Demo" or "Paper" on a project detail page | `src/components/ProjectLinkButtons.js` |
| `project_source_clicked` | User clicked "View Source Code" on a project detail page | `src/components/ProjectLinkButtons.js` |
| `contact_email_clicked` | User clicked the email link to initiate contact | `src/app/contact/page.js` |
| `note_read_clicked` | User clicked "Read more" or a note title from the notes listing | `src/components/NoteReadLink.js` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1619912)
- [Social link clicks by platform](/insights/xqHUaJrK) — which social platforms get the most clicks
- [Most-read notes](/insights/DtZUix1F) — which notes attract the most readers
- [Project interest funnel](/insights/hVFHa6Jj) — conversion from viewing a project to clicking the demo/paper
- [Project engagement over time](/insights/kPxRYIUB) — project card, demo, and source clicks over time
- [Overall engagement trend](/insights/p1Jr2mq2) — all key engagement events combined

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
