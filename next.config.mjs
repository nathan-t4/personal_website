import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function syncUnpublishedNoteSlugs() {
  const notesDir = path.join(process.cwd(), 'src/content/notes');
  const outDir = path.join(process.cwd(), 'src/generated');
  const outFile = path.join(outDir, 'unpublished-note-slugs.json');

  /** @type {string[]} */
  let unpublished = [];
  try {
    const fileNames = fs.readdirSync(notesDir).filter((f) => f.endsWith('.md'));
    for (const fileName of fileNames) {
      const raw = fs.readFileSync(path.join(notesDir, fileName), 'utf8');
      const { data } = matter(raw);
      if (data.active !== true) {
        unpublished.push(fileName.replace(/\.md$/, ''));
      }
    }
    unpublished.sort();
  } catch {
    unpublished = [];
  }

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, `${JSON.stringify(unpublished, null, 2)}\n`);
}

syncUnpublishedNoteSlugs();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/array/:path*",
        destination: "https://us-assets.i.posthog.com/array/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
