import { getAllProjects } from '@/lib/markdown';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ui/ProjectCard';

const CATEGORY_SECTION_ORDER = ['research', 'robotics'];

function formatCategoryHeading(category) {
  if (!category) return 'Uncategorized';
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function groupProjectsByCategory(projects) {
  const groups = projects.reduce((acc, project) => {
    const category = project.frontmatter.category || 'Uncategorized';
    if (!acc[category]) acc[category] = [];
    acc[category].push(project);
    return acc;
  }, {});

  const keys = Object.keys(groups);
  keys.sort((a, b) => {
    const ia = CATEGORY_SECTION_ORDER.indexOf(a.toLowerCase());
    const ib = CATEGORY_SECTION_ORDER.indexOf(b.toLowerCase());
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    return a.localeCompare(b, undefined, { sensitivity: 'base' });
  });

  return keys.map((category) => ({
    category,
    heading: formatCategoryHeading(category),
    projects: groups[category],
  }));
}

export default function Projects() {
  const projects = getAllProjects();

  const sections = groupProjectsByCategory(projects);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header currentPage="projects" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Projects
          </h1>
        </section>

        <div className="space-y-16">
          {sections.map(({ category, heading, projects: sectionProjects }) => (
            <section key={category}>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 pb-2 border-b border-slate-200 dark:border-slate-700">
                {heading}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {sectionProjects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    title={project.frontmatter.title}
                    image={project.frontmatter.image}
                    description={project.frontmatter.description}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
