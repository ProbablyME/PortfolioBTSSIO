'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/#about' },
    { name: 'Projets', href: '/#projects' },
    { name: 'Veille', href: '/veille' },
    { name: 'Contact', href: '/#contact' }
  ];

  return (
    <header 
      className={`bg-gray-800 text-white shadow-md sticky top-0 z-50 
                transition-all duration-500 ease-in-out
                ${scrolled ? 'py-2' : 'py-4'}
                ${loaded ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className={`transition-all duration-700 delay-200 transform 
                         ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <Link href="/" className="text-xl font-bold hover:text-gray-200 transition-colors duration-300">
              Portfolio BTS SIO
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {menuItems.map((item, index) => (
                <li 
                  key={item.name}
                  className={`transform transition-all duration-500 hover:scale-110
                            ${loaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${300 + (index * 100)}ms` }}
                >
                  <Link 
                    href={item.href}
                    className="hover:text-gray-200 transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
              <li className={`transform transition-all duration-500 hover:scale-110
                            ${loaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${300 + (menuItems.length * 100)}ms` }}
              >
                <Link 
                  href="/CV.pdf" 
                  target="_blank"
                  className="ml-4 bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-300"
                >
                  Télécharger CV
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="mt-4 pb-4 md:hidden">
            <ul className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="block hover:text-gray-200 transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/CV.pdf" 
                  target="_blank"
                  className="inline-block mt-2 bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-300"
                >
                  Télécharger CV
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
} 