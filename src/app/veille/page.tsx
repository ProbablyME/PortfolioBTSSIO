'use client';

import { motion } from 'framer-motion';

export default function Veille() {
  const updates = [
    // {
    //   date: 'Septembre 2023',
    //   title: 'Nouvelle génération de charnières Flex Hinge',
    //   content: 'Introduction d\'une nouvelle technologie de charnière qui réduit significativement l\'espace entre les deux moitiés de l\'écran pliable. Cette innovation permet une meilleure durabilité et une réduction des plis visibles sur l\'écran.',
    //   source: 'https://www.samsung.com/fr/smartphones/galaxy-z-fold5/'
    // },

    {
      date: 'Novembre 2023',
      title: 'Système de refroidissement liquide pour smartphones pliables',
      content: 'Introduction d\'un système de refroidissement liquide innovant spécialement conçu pour les smartphones pliables. Cette technologie permet une meilleure dissipation de la chaleur tout en maintenant un design mince.',
      source: 'https://gagadget.fr/326970-comme-le-mate-60-pro-huawei-a-devoile-un-boitier-avec-systeme-de-refroidissement-liquide-pour-le-smartphone-pliable-mate-/'
    },
    {
      date: 'Décembre 2023',
      title: 'Nouvelle technologie de batterie flexible',
      content: 'Développement d\'une batterie flexible qui peut se plier jusqu\'à 200 000 fois sans perte de capacité. Cette innovation permet une meilleure utilisation de l\'espace dans les smartphones pliables.',
      source: 'https://www.sammobile.com/news/samsung-flexible-battery-technology/'
    },
    {
      date: 'Janvier 2024',
      title: 'Technologie Ironflex pour écrans pliables',
      content: 'Samsung dépose la marque "Ironflex" pour une nouvelle technologie d\'écrans OLED pliables, visant à améliorer la résistance et la durabilité des futurs smartphones pliables.',
      source: 'https://www.phonandroid.com/samsung-ses-prochains-smartphones-pliables-auront-des-ecrans-encore-plus-resistants.html'
    },
    {
      date: 'Juillet 2024',
      title: 'Samsung Z Flip6 et Z Fold6 avec IA',
      content: 'Samsung présente ses nouveaux smartphones pliables Z Flip6 et Z Fold6, intégrant des améliorations en intelligence artificielle pour enrichir l\'expérience utilisateur.',
      source: 'https://www.lemonde.fr/economie/article/2024/07/10/samsung-agrandit-son-ecosysteme-de-produits-et-se-rue-vers-l-ia_6248425_3234.html'
    },
    {
      date: 'Septembre 2024',
      title: 'Huawei Mate XT - Smartphone pliable en trois',
      content: 'Huawei dévoile le Mate XT, un smartphone capable de se plier en trois parties, offrant un écran de 10 pouces une fois déplié, surpassant les modèles pliables traditionnels.',
      source: 'https://www.lemonde.fr/pixels/article/2024/09/10/avec-le-mate-xt-huawei-presente-un-smartphone-innovant-pliable-en-trois_6311320_4408996.html'
    },
    {
      date: 'Septembre 2024',
      title: 'Samsung Rollable Flex',
      content: 'Samsung prévoit de commercialiser un smartphone à écran enroulable en 2025, basé sur le prototype Rollable Flex, capable de passer d\'une longueur de 5 à 25 centimètres.',
      source: 'https://www.clubic.com/actualite-537863-pour-2025-samsung-envisage-un-smartphone-futuriste-avec-ecran-enroulable.html'
    },
    {
      date: 'Novembre 2024',
      title: 'Batterie pliable avec charnières',
      content: 'Samsung travaille sur une batterie pliable dotée de charnières, conçue pour optimiser l\'espace interne des futurs smartphones pliables et améliorer leur autonomie.',
      source: 'https://www.phonandroid.com/samsung-va-revolutionner-les-smartphones-pliables-avec-cette-batterie-dun-nouveau-type.html'
    },
    {
      date: 'Janvier 2025',
      title: 'CES 2025 : Écrans pliables et QD-OLED 4000 nits',
      content: 'Samsung Display présente des écrans pliables et étirables, ainsi qu\'un affichage QD-OLED atteignant une luminosité de 4000 nits, marquant une avancée significative dans la technologie des écrans.',
      source: 'https://www.generation-nt.com/actualites/samsung-ecran-pliable-etirable-qd-oled-4000-nits-ces-2053966'
    },
    {
      date: 'Janvier 2025',
      title: 'Slidable Flex Solo - Écran extensible',
      content: 'Samsung Display dévoile le Slidable Flex Solo, capable d\'étendre sa surface d\'affichage de 13,3 à 17,3 pouces, offrant de nouvelles possibilités pour les appareils mobiles.',
      source: 'https://www.frandroid.com/events/2457720_pliable-deroulable-modulable-voici-les-avancees-des-ecrans-oled-de-samsung-au-ces-2025'
    },
    {
      date: 'Janvier 2025',
      title: 'Écrans tactiles micro-LED extensibles',
      content: 'Samsung présente des écrans tactiles innovants, dont un écran extensible basé sur la technologie micro-LED, capable d\'augmenter sa taille de 25%, et un écran Rollable Flex pouvant se déployer pour atteindre plus de 25 cm.',
      source: 'https://www.warketingdigital.net/nouveaux-ecrans-tactiles-samsung/'
    },
    {
      date: 'Février 2025',
      title: 'MWC 2025 : Écrans extensibles et pliables',
      content: 'Samsung présente des écrans extensibles et pliables, incluant des modèles de tailles variables allant de 5,1 à 18,1 pouces, illustrant les avancées en matière d\'écrans OLED flexibles.',
      source: 'https://www.touslestops.fr/les-ecrans-extensibles-enroulables-et-pliables-de-samsung-presentes-au-mwc-2025/'
    },
    {
      date: 'Mars 2025',
      title: 'Huawei : Smartphone à écran enroulable',
      content: 'Huawei pourrait commercialiser un smartphone à écran enroulable en 2025, basé sur un brevet de 2020, offrant un format compact lorsqu\'il est rétracté et un écran agrandi sur demande.',
      source: 'https://www.blog-nouvelles-technologies.fr/322717/huawei-smartphone-ecran-enroulable-brevet/'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Veille Technologique - Innovations des Smartphones Pliables
        </motion.h1>
        
        <div className="space-y-8">
          {updates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  {update.date}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{update.title}</h2>
              <p className="text-gray-600 mb-4">{update.content}</p>
              <a 
                href={update.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300 inline-flex items-center"
              >
                Source
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 