import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

export default function ProjetsStage() {
  // Filtrer les projets de stage
  const stageProjects = projects.filter(project => project.type === 'stage');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Projets de Stage</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Découvrez les projets sur lesquels j'ai travaillé pendant mes périodes de stage en entreprise.
              Ces projets m'ont permis de mettre en pratique mes connaissances et d'acquérir de l'expérience professionnelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {stageProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                type={project.type}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 