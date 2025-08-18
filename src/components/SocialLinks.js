'use client';

import { siteConfig } from '@/lib/config';
import Image from 'next/image';

export default function SocialLinks({ variant = 'default', excludeCV = false }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'github':
        return <Image src="/github.svg" alt="GitHub" width={variant === 'contact' ? 24 : 20} height={variant === 'contact' ? 24 : 20} />;
      case 'linkedin':
        return <Image src="/linkedin.svg" alt="LinkedIn" width={variant === 'contact' ? 24 : 20} height={variant === 'contact' ? 24 : 20} />;
      default:
        return <span className={variant === 'contact' ? 'text-2xl' : 'text-lg'}>{iconName}</span>;
    }
  };

  const containerClasses = variant === 'contact' 
    ? 'space-y-4' 
    : 'flex flex-wrap gap-4';

  const linkClasses = variant === 'contact'
    ? 'flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
    : 'flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors';

  const textClasses = variant === 'contact'
    ? 'text-slate-800 dark:text-white font-medium'
    : 'text-slate-700 dark:text-slate-300 font-medium';

  const linksToShow = excludeCV
    ? siteConfig.socialLinks.filter((link) => link.name !== 'CV')
    : siteConfig.socialLinks.map(link => 
        link.name === 'CV' 
          ? { ...link, url: siteConfig.resume }  // Use PDF URL instead of /cv
          : link
      );

  return (
    <div className={containerClasses}>
      {linksToShow.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.name === 'CV' ? '_blank' : undefined}
          rel={link.name === 'CV' ? 'noopener noreferrer' : undefined}
          onClick={link.isEmail ? (e) => {
            e.preventDefault();
            window.location.href = 'mailto:' + siteConfig.emailAddress;
          } : undefined}
          className={linkClasses}
        >
          {getIcon(link.icon)}
          <span className={textClasses}>
            {link.name}
          </span>
        </a>
      ))}
    </div>
  );
} 