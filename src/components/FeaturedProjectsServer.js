import { getProjectDescription, getAllProjects } from '@/lib/markdown';
import { siteConfig } from '@/lib/config';
import ProjectCard from '@/components/ui/ProjectCard';

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
  const projectsWithDescriptions = activeFeaturedProjects.map((project) => {
    const projectId = project.link.split('/').pop();
    const markdownProject = allProjects.find((p) => p.slug === projectId);
    try {
      const description = getProjectDescription(projectId);
      return {
        ...project,
        description,
        image: markdownProject?.frontmatter?.image,
      };
    } catch (error) {
      return {
        ...project,
        description: 'Error loading description',
        image: markdownProject?.frontmatter?.image,
      };
    }
  });

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
        Featured Projects
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projectsWithDescriptions.map((project) => (
          <ProjectCard
            key={project.link}
            href={project.link}
            title={project.title}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
} 