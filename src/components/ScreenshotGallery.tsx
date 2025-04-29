'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ScreenshotGalleryProps {
  screenshots: string[];
  title: string;
}

export default function ScreenshotGallery({ screenshots, title }: ScreenshotGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length);
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  if (screenshots.length === 0) {
    return null;
  }

  return (
    <div className="my-8">
      <h2 className="text-xl font-semibold mb-4">Captures d'écran</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {screenshots.map((screenshot, index) => (
          <div 
            key={screenshot}
            className="relative h-40 md:h-48 bg-gray-100 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300"
            onClick={() => openModal(index)}
          >
            <Image
              src={screenshot}
              alt={`${title} - Capture d'écran ${index + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                Agrandir
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal pour afficher l'image en grand */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
          <div className="relative w-full max-w-4xl mx-auto" onClick={(e) => e.stopPropagation()}>
            {/* Bouton de fermeture */}
            <button 
              className="absolute top-4 right-4 z-10 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Flèche précédente */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Image courante */}
            <div className="relative h-[70vh]">
              <Image
                src={screenshots[currentIndex]}
                alt={`${title} - Capture d'écran ${currentIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
            
            {/* Flèche suivante */}
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Indicateur de position */}
            <div className="text-center text-white mt-4">
              {currentIndex + 1} / {screenshots.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 