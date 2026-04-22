import { getNoteSlugs, getNoteBySlug } from '@/lib/markdown';
import { siteConfig } from '@/lib/config';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = getNoteSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function NotePage({ params }) {
  const note = getNoteBySlug(params.slug);

  if (!note) {
    return <div>Note not found</div>;
  }

  const { frontmatter, content } = note;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header currentPage="notes" />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Note Header */}
        <article className="mb-16">
          <header className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
              <span>{new Date(frontmatter.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <span>•</span>
              <span>{frontmatter.readTime}</span>
              <span>•</span>
              <span className="inline-block bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-medium">
                {frontmatter.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              {frontmatter.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              {frontmatter.description}
            </p>
          </header>

          {/* Note Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[rehypeKatex]}
              components={{
                h1: ({ children }) => <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 mt-8">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 mt-8">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 mt-6">{children}</h3>,
                p: ({ children }) => <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-outside pl-6 text-slate-600 dark:text-slate-300 mb-4 space-y-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-outside pl-6 text-slate-600 dark:text-slate-300 mb-4 space-y-2">{children}</ol>,
                li: ({ children }) => <li className="text-slate-600 dark:text-slate-300">{children}</li>,
                strong: ({ children }) => <strong className="font-semibold text-slate-800 dark:text-white">{children}</strong>,
                em: ({ children }) => <em className="italic text-slate-600 dark:text-slate-300">{children}</em>,
                code: ({ children, className }) => {
                  const isInline = !className;
                  if (isInline) {
                    return <code className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-1 py-0.5 rounded text-sm">{children}</code>;
                  }
                  return (
                    <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto mb-4">
                      <code className="text-slate-800 dark:text-slate-200 text-sm">{children}</code>
                    </pre>
                  );
                },
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-600 dark:text-slate-300 mb-4">
                    {children}
                  </blockquote>
                ),
                a: ({ children, href }) => (
                  <a href={href} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline">
                    {children}
                  </a>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Back to Notes */}
        <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
          <Link
            href="/notes"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
          >
            ← Back to Notes
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
} 