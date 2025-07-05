import { getProjectBySlug, getProjectSlugs } from '@/lib/markdown';
import { siteConfig } from '@/lib/config';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
            Project Not Found
          </h1>
          <a
            href="/projects"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            ← Back to Projects
          </a>
        </div>
      </div>
    );
  }

  const { frontmatter, content } = project;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header currentPage="projects" />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Header */}
        <section className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <a href="/projects" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
              ← Back to Projects
            </a>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            {frontmatter.title}
          </h1>
          <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-300 mb-6">
            <span>{frontmatter.year}</span>
            <span>•</span>
            <span>{frontmatter.type}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {frontmatter.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-8 border-slate-200 dark:border-slate-700">
            <div className="flex gap-4">
              <a
                href={frontmatter.demo}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                {frontmatter.technologies.includes('Research') ? 'Paper' : 'View Live Demo'}
              </a>
              <a
                href={frontmatter.source}
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                View Source Code
              </a>
            </div>
          </div>
        </section>

        {/* Project Content */}
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 mt-8">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 mt-6">{children}</h3>,
              p: ({ children }) => <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{children}</p>,
              ul: ({ children }) => <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 mb-4 space-y-2">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside text-slate-600 dark:text-slate-300 mb-4 space-y-2">{children}</ol>,
              li: ({ children }) => <li className="text-slate-600 dark:text-slate-300">{children}</li>,
              strong: ({ children }) => <strong className="font-semibold text-slate-800 dark:text-white">{children}</strong>,
              a: ({ href, children }) => (
                <a 
                  href={href} 
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
                >
                  {children}
                </a>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </main>

      <Footer />
    </div>
  );
} 