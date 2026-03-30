import Image from 'next/image';

const PLACEHOLDER_IMAGE = '/api/placeholder/400/250';

export default function ProjectCard({ href, title, image, description }) {
  const hasImage = image && image !== PLACEHOLDER_IMAGE;

  return (
    <a
      href={href}
      className="group block bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
    >
      <div className="aspect-video bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
        {hasImage ? (
          <Image
            src={image}
            alt={title}
            width={400}
            height={250}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-slate-400 dark:text-slate-500 text-sm">
            [Project Screenshot]
          </div>
        )}
      </div>
      <div className="p-6">
        <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h4>
        <p className="text-slate-600 dark:text-slate-300 text-sm">
          {description || 'No description available'}
        </p>
      </div>
    </a>
  );
}
