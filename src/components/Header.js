import { siteConfig } from '@/lib/config';
import Link from 'next/link';

export default function Header({ currentPage = '', showTitle = true }) {
  const navItems = [
    { href: '/#about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/notes', label: 'Notes' },
    { href: '/contact', label: 'Contact' },
    { href: '/cv', label: 'CV' }
  ];

  return (
    <header className="border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {showTitle ? (
            <div className="text-xl font-bold text-slate-800 dark:text-white">
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {siteConfig.title || siteConfig.name}
              </Link>
            </div>
          ) : (
            <div></div>
          )}
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.label.toLowerCase()
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
} 