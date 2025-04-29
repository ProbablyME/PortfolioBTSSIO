'use client';

import Image from "next/image";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState('light');
  
  // Filtrer les projets par type
  const stageProjects = projects.filter(project => project.type === 'stage');
  const coursProjects = projects.filter(project => project.type === 'cours');
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className={`${theme === 'dark' ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-gray-700 to-gray-800'} text-white py-24 md:py-32 relative overflow-hidden`}>
          <div 
            className={`absolute inset-0 transition-opacity duration-2000 
                       ${loaded ? 'opacity-20' : 'opacity-0'}`} 
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 ease-out
                        ${loaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
            >
              PIRONTI Leo
            </h1>
            <p 
              className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto transition-all duration-700 delay-200 ease-out
                        ${loaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
            >
              Découvrez mes projets réalisés pendant ma formation en BTS Services Informatiques aux Organisations
            </p>
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-400 ease-out
                        ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="transform transition-transform duration-300 hover:scale-105">
                <Link 
                  href="/projets-stage" 
                  className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium inline-block"
                >
                  Voir les Projets
                </Link>
              </div>
              <div className="transform transition-transform duration-300 hover:scale-105">
                <Link 
                  href="#contact" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-medium transition-colors inline-block"
                >
                  Me Contacter
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center relative">
              <span 
                className={`relative inline-block after:content-[''] after:absolute after:w-0 after:h-1 ${theme === 'dark' ? 'after:bg-gray-400' : 'after:bg-gray-600'} after:bottom-0 after:left-1/2 
                         after:transition-all after:duration-700 after:hover:w-full after:hover:left-0`}
              >
                À Propos
              </span>
            </h2>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">Parcours</h3>
                <p className="mb-6 text-lg">
                  Étudiant en BTS SIO SLAM, je suis passionné par l'informatique et le développement web. 
                  J'ai acquis des compétences solides dans le développement d'applications web et mobiles modernes 
                  grâce à mon parcours et ma motivation.
                </p>
                <p className="mb-6 text-lg">
                  Aimant explorer ce domaine à la recherche des dernières évolutions, j'ai pour souhait de faciliter 
                  la vie des utilisateurs en proposant des logiciels fonctionnels et performants.
                </p>
                <p className="text-lg">
                  Mon objectif est de continuer à apprendre et à m'améliorer dans ce domaine en constante évolution.
                </p>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-6">Compétences</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300`}>
                    <h4 className="font-medium mb-2">Développement Web</h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>HTML, CSS, JavaScript, React, PHP</p>
                  </div>
                  <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300`}>
                    <h4 className="font-medium mb-2">Bases de données</h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>MySQL, PostgreSQL, MongoDB, SSMS, Python scripts</p>
                  </div>
                  <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300`}>
                    <h4 className="font-medium mb-2">Outils et méthodologies</h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Azure, Git, Laragon, Visual Studio, Visual studio code</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Preview Section */}
        <section id="projects" className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center relative">
              <span 
                className={`relative inline-block after:content-[''] after:absolute after:w-0 after:h-1 ${theme === 'dark' ? 'after:bg-gray-400' : 'after:bg-gray-600'} after:bottom-0 after:left-1/2 
                         after:transition-all after:duration-700 after:hover:w-full after:hover:left-0`}
              >
                Projets
              </span>
            </h2>
            
            {/* Stage Projects */}
            <div className="mb-16">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-semibold">Projets de Stage</h3>
                <Link 
                  href="/projets-stage" 
                  className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:underline group flex items-center`}
                >
                  <span>Voir tous</span>
                  <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {stageProjects.slice(0, 2).map((project) => (
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
            
            {/* Course Projects */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-semibold">Projets de Cours</h3>
                <Link 
                  href="/projets-cours" 
                  className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:underline group flex items-center`}
                >
                  <span>Voir tous</span>
                  <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {coursProjects.slice(0, 3).map((project) => (
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
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center relative">
              <span 
                className={`relative inline-block after:content-[''] after:absolute after:w-0 after:h-1 ${theme === 'dark' ? 'after:bg-gray-400' : 'after:bg-gray-600'} after:bottom-0 after:left-1/2 
                         after:transition-all after:duration-700 after:hover:w-full after:hover:left-0`}
              >
                Contact
              </span>
            </h2>
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-6">Me Contacter</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} mr-4`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>pironti2122@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} mr-4`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Localisation</h4>
                      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>France</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-6">Envoyer un Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block mb-2">Nom</label>
                    <input 
                      type="text" 
                      className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`} 
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Email</label>
                    <input 
                      type="email" 
                      className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`} 
                      placeholder="Votre email"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Message</label>
                    <textarea 
                      className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                      rows={4}
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className={`${theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-700 hover:bg-gray-800'} text-white px-6 py-3 rounded-lg font-medium transition-colors`}
                  >
                    Envoyer le Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
