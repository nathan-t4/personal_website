import { getProjectDescription, getAllProjects } from '@/lib/markdown';
import { siteConfig } from '@/lib/config';
import Image from 'next/image';

export default function FeaturedProjectsServer() {
  // Get all active projects from markdown files
  const allProjects = getAllProjects();

  const activeFeaturedProjects = Object.keys(siteConfig.featuredProjects)
    .map(Number)
    .sort((a, b) => a - b)
    .map((id) => siteConfig.featuredProjects[id])
    .filter((project) => {
      const projectId = project.link.split('/').pop();
      const markdownProject = allProjects.find(p => p.slug === projectId);
      return markdownProject && markdownProject.frontmatter.active === true;
    });

  // Fetch project descriptions server-side
  const projectsWithDescriptions = activeFeaturedProjects.map((project, idx) => {
    const projectId = project.link.split('/').pop();
    try {
      const description = getProjectDescription(projectId);
      return { ...project, description };
    } catch (error) {
      return { ...project, description: 'Error loading description' };
    }
  });

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
        Featured Projects
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projectsWithDescriptions.map((project, idx) => (
          <a
            key={project.link}
            href={project.link}
            className="group block bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <div className="aspect-video bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
              {project.image && project.image !== '/api/placeholder/400/250' ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-slate-400 dark:text-slate-500 text-sm">
                  [Project Screenshot]
                </div>
              )}
            </div>
            <div className="p-6">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {project.description || 'No description available'}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
} 