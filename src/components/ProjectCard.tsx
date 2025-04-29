'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  type: 'stage' | 'cours';
}

export default function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  technologies,
  type,
}: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
      <div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <Image
            src={imageUrl}
            alt={title}
            width={150}
            height={150}
            className="object-contain transition-transform duration-500 group-hover:scale-110 z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{type === 'stage' ? '2024 - Stage' : '2024 - Projet de Cours'}</p>
        <h3 className="text-xl font-bold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-gray-700">{title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 text-xs text-gray-800 rounded-full transition-all duration-300 hover:bg-gray-200"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.5s ease-out forwards',
                  opacity: 0,
                  transform: 'translateY(5px)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex space-x-4">
          <Link
            href={`/projets-${type}/${id}`}
            className="inline-block bg-gray-700 text-white px-4 py-2 rounded font-medium transition-all duration-300 hover:bg-gray-800"
          >
            Voir le projet
          </Link>
          {/* Uncomment and update as needed for project links
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border border-gray-700 text-gray-700 px-4 py-2 rounded font-medium transition-all duration-300 hover:bg-gray-50"
          >
            GitHub
          </a>
          */}
        </div>
      </div>
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
} 