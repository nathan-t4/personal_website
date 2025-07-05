import { getProjectDescription } from '@/lib/markdown';
import { siteConfig } from '@/lib/config';
import Link from 'next/link';

export default function FeaturedProjects() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.featuredProjects.map((project) => {
            const projectId = project.link.split('/').pop();
            const description = getProjectDescription(projectId);
            
            return (
              <div
                key={project.id}
                className="bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">
                    Project Image
                  </span>
                </div>
                <div className="p-6">
                  <Link href={project.link}>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 