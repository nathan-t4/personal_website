import { siteConfig } from '@/lib/config';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedProjectsServer from '@/components/FeaturedProjectsServer';
import SocialLinks from '@/components/SocialLinks';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header showTitle={false} />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            {siteConfig.name}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            {siteConfig.heroBlurb}
          </p>
        </section>
        
        {/* Social Media Row */}
        <div className="mb-12">
          <SocialLinks />
        </div>

        {/* About Section */}
        <section id="about" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
            About Me
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              {siteConfig.about}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {siteConfig.skills.slice(0, siteConfig.showNSkills).map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 mb-6 bg-slate-50 dark:bg-slate-800/50">
            <p 
              className="text-lg text-slate-600 dark:text-slate-300"
              dangerouslySetInnerHTML={{ __html: siteConfig.currentlyWorking }}
            />
          </div>
        </section>

        {/* Featured Projects */}
        <FeaturedProjectsServer />
      </main>

      <Footer />
    </div>
  );
}