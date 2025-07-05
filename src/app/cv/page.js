'use client';

import { siteConfig } from '@/lib/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SocialLinks from '@/components/SocialLinks';

export default function CV() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header showTitle={false}/>

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
        {/* Contact Info */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-4 mb-6">
            <SocialLinks excludeCV />
            <button
              onClick={() => window.open(siteConfig.resume, '_blank')}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <span className="text-lg">📥</span>
              <span className="text-slate-700 dark:text-slate-300 font-medium">Download PDF</span>
            </button>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {siteConfig.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Relevant Coursework
            </h2>
            <div className="flex flex-wrap gap-2">
              {siteConfig.relevantCoursework.map((course) => (
                <span
                  key={course}
                  className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12 cv-section">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
            Education
          </h2>
          <div className="space-y-8">
            {siteConfig.education.map((edu, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {edu.period}
                  </span>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300 font-medium mb-1">
                  {edu.school}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                  {edu.location}
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-12 cv-section">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
            Work Experience
          </h2>
          <div className="space-y-8">
            {siteConfig.experience.map((job, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                    {job.title}
                  </h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {job.period}
                  </span>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300 font-medium mb-1">
                  {job.company}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                  {job.location}
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Experience */}
        <section className="mb-12 cv-section">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
            Research Experience
          </h2>
          <div className="space-y-8">
            {siteConfig.researchExperience.map((research, index) => (
              <div key={index} className="border-l-4 border-purple-500 pl-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                    {research.title}
                  </h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {research.period}
                  </span>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300 font-medium mb-1">
                  {research.institution}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                  {research.location}
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {research.description}
                </p>
                {research.publications && research.publications.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Publications:
                    </h4>
                    <ul className="space-y-1">
                      {research.publications.map((pub, pubIndex) => (
                        <li key={pubIndex} className="text-sm text-slate-600 dark:text-slate-400 italic">
                          {pub}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="mb-12 cv-section">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
            Honors and Awards
          </h2>
          <div className="space-y-8">
            {siteConfig.awards.map((award, index) => (
              <div key={index} className="border-l-4 border-yellow-500 pl-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                    {award.title}
                  </h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {award.year}
                  </span>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300 font-medium mb-1">
                  {award.institution}
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching Experience */}
        <section className="cv-section">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
            Teaching Experience
          </h2>
          <div className="space-y-8">
            {siteConfig.teaching.map((teaching, index) => (
              <div key={index} className="border-l-4 border-indigo-500 pl-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                    {teaching.course}
                  </h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {teaching.period}
                  </span>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300 font-medium mb-1">
                  {teaching.institution}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                  {teaching.location}
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {teaching.role}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 