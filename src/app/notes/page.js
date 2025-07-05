import { getAllNotes } from '@/lib/markdown';
import { siteConfig } from '@/lib/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Notes() {
  const allNotes = getAllNotes();
  
  // Extract unique categories from notes
  const categories = ["All", ...new Set(allNotes.map(note => note.frontmatter.category))];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header currentPage="notes" />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Notes
          </h1>
          {/* <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Life, learning, projects, and everything else.
          </p> */}
        </section>

        {/* Category Filter */}
        {/* <section className="mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                data-category={category}
                className="category-filter px-4 py-2 rounded-full text-sm font-medium transition-colors bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 data-[active=true]:bg-blue-600 data-[active=true]:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </section> */}

        {/* Notes List */}
        <section className="mb-16">
          <div className="space-y-12">
            {allNotes.map((note) => (
              <article 
                key={note.slug} 
                className="note-item border-b border-slate-200 dark:border-slate-700 pb-4 last:border-b-0"
                data-category={note.frontmatter.category}
              >
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">
                    <a 
                      href={`/notes/${note.slug}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {note.frontmatter.title}
                    </a>
                  </h2>
                  <div className="flex items-center space-x-3 text-sm text-slate-500 dark:text-slate-400">
                    <span>{new Date(note.frontmatter.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span>•</span>
                    <span>{note.frontmatter.readTime}</span>
                  </div>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {note.frontmatter.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm font-medium">
                      {note.frontmatter.category}
                    </span>
                  </div>
                  <a
                    href={`/notes/${note.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    Read more →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const categoryButtons = document.querySelectorAll('.category-filter');
            const noteItems = document.querySelectorAll('.note-item');
            
            categoryButtons.forEach(button => {
              button.addEventListener('click', function() {
                const selectedCategory = this.getAttribute('data-category');
                
                // Update button states
                categoryButtons.forEach(btn => {
                  btn.setAttribute('data-active', btn === this ? 'true' : 'false');
                });
                
                // Filter notes
                noteItems.forEach(note => {
                  const noteCategory = note.getAttribute('data-category');
                  if (selectedCategory === 'All' || noteCategory === selectedCategory) {
                    note.style.display = 'block';
                  } else {
                    note.style.display = 'none';
                  }
                });
              });
            });
            
            // Set "All" as active by default
            const allButton = document.querySelector('[data-category="All"]');
            if (allButton) {
              allButton.setAttribute('data-active', 'true');
            }
          });
        `
      }} />
    </div>
  );
} 