import { getAllProjects } from '@/lib/markdown';
import { siteConfig } from '@/lib/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Projects() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header currentPage="projects" />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Projects
          </h1>
          {/* <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            A collection of projects I've worked on, from web applications to mobile apps and everything in between.
          </p> */}
        </section>

        {/* Projects Grid */}
        <section className="mb-16">
          <div className="space-y-12">
            {projects.map((project) => (
              <div key={project.slug} className="border-b border-slate-200 dark:border-slate-700 pb-4 last:border-b-0">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">
                    <a 
                      href={`/projects/${project.slug}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {project.frontmatter.title}
                    </a>
                  </h2>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {project.frontmatter.year}
                  </span>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {project.frontmatter.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.frontmatter.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 