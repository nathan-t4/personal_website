'use client';

import { siteConfig } from '@/lib/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SocialLinks from '@/components/SocialLinks';

function EmailLink() {
  const displayEmail = siteConfig.emailAddress.replace('@', '{at}');
  
  return (
    <a 
      href="javascript:void(0)"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = 'mailto:' + siteConfig.emailAddress;
      }}
      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
    >
      {displayEmail}
    </a>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header currentPage="contact" />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Contact
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            I&apos;m always interested in new opportunities and exciting projects. 
            Feel free to reach out if you&apos;d like to work together or just say hello!
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-slate-600 dark:text-slate-300">Email</p>
                    <EmailLink />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-slate-600 dark:text-slate-300">Location</p>
                    <p className="text-slate-800 dark:text-white">San Francisco, CA</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <p className="text-slate-600 dark:text-slate-300">Availability</p>
                    <p className="text-slate-800 dark:text-white">Open to new opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">
                Follow Me
              </h3>
              <SocialLinks variant="contact" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 