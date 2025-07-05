'use client';
import { siteConfig } from '@/lib/config';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Header({ currentPage = '', showTitle = true }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navItems = [
    { href: '/', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/notes', label: 'Notes' },
    { href: '/contact', label: 'Contact' },
    { href: '/cv', label: 'CV' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <header className="border-b border-slate-200 dark:border-slate-700 relative">
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
          {/* Hamburger menu for mobile */}
          <button
            className="sm:hidden flex items-center px-2 py-1 text-slate-700 dark:text-slate-200 focus:outline-none"
            onClick={() => setDropdownOpen((open) => !open)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Desktop nav */}
          <nav className="hidden sm:flex space-x-8">
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
      {/* Full-width dropdown for mobile */}
      {dropdownOpen && (
        <div
          ref={dropdownRef}
          className="sm:hidden absolute left-0 top-full w-full z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-md animate-fadeIn"
        >
          <nav className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-6 py-4 text-base font-medium transition-colors ${
                  currentPage === item.label.toLowerCase()
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
                onClick={() => setDropdownOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
} 