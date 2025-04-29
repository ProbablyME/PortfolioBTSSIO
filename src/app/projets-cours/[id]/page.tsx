import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import { projects } from '@/lib/projects';

interface Props {
  params: {
    id: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
}

export function generateStaticParams() {
  const coursProjects = projects.filter(project => project.type === 'cours');
  return coursProjects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjetCoursPage({ params }: Props) {
  const project = projects.find(
    (p) => p.id === params.id && p.type === 'cours'
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <Link 
            href="/projets-cours" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
          >
            ← Retour aux projets de cours
          </Link>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 md:h-96 bg-gray-100 flex items-center justify-center">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            
            <div className="p-6 md:p-8">
              <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg mb-6">{project.description}</p>
                <p className="mb-6">{project.longDescription}</p>
                
                <h2 className="text-xl font-semibold mb-4">Fonctionnalités</h2>
                <ul className="list-disc pl-5 mb-6">
                  {project.features.map((feature) => (
                    <li key={feature} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Galerie de captures d'écran */}
              <ScreenshotGallery screenshots={project.screenshots} title={project.title} />
              
              <div className="flex flex-wrap gap-4 mt-8">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Voir sur GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Voir la démo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 