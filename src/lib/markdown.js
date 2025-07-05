import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');
const notesDirectory = path.join(process.cwd(), 'src/content/notes');

// Project functions
export function getProjectSlugs() {
  try {
    const fileNames = fs.readdirSync(projectsDirectory);
    const slugs = [];
    
    for (const fileName of fileNames) {
      const fullPath = path.join(projectsDirectory, fileName);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Check if directory contains a page.md file
        const pagePath = path.join(fullPath, 'page.md');
        if (fs.existsSync(pagePath)) {
          slugs.push(fileName);
        }
      } else if (fileName.endsWith('.md')) {
        // Direct .md file
        slugs.push(fileName.replace(/\.md$/, ''));
      }
    }
    
    return slugs;
  } catch (error) {
    return [];
  }
}

export function getProjectBySlug(slug) {
  try {
    let fullPath;
    
    // Check if it's a subdirectory with page.md
    const subdirPath = path.join(projectsDirectory, slug, 'page.md');
    if (fs.existsSync(subdirPath)) {
      fullPath = subdirPath;
    } else {
      // Check if it's a direct .md file
      fullPath = path.join(projectsDirectory, `${slug}.md`);
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data,
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getAllProjects() {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter(Boolean)
    .filter((project) => project.frontmatter.active === true)
    .sort((a, b) => (a.frontmatter.year > b.frontmatter.year ? -1 : 1));

  return projects;
}

// Note functions
export function getNoteSlugs() {
  try {
    const fileNames = fs.readdirSync(notesDirectory);
    return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
  } catch (error) {
    return [];
  }
}

export function getNoteBySlug(slug) {
  try {
    const fullPath = path.join(notesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data,
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getAllNotes() {
  const slugs = getNoteSlugs();
  const notes = slugs
    .map((slug) => getNoteBySlug(slug))
    .filter(Boolean)
    .filter((note) => note.frontmatter.active === true)
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  return notes;
}

export function getProjectDescription(projectId) {
  try {
    // Check if it's a directory with page.md
    const dirPath = path.join(process.cwd(), 'src/content/projects', projectId);
    const pagePath = path.join(dirPath, 'page.md');
    
    if (fs.existsSync(pagePath)) {
      const content = fs.readFileSync(pagePath, 'utf8');
      const { data } = matter(content);
      return data.description || 'No description available';
    }
    
    // Check if it's a direct .md file
    const filePath = path.join(process.cwd(), 'src/content/projects', `${projectId}.md`);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(content);
      return data.description || 'No description available';
    }
    
    return 'No description available';
  } catch (error) {
    return 'No description available';
  }
} 