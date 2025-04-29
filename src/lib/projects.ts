export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string; // Icône principale du projet
  screenshots: string[]; // Liste des captures d'écran
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  type: 'stage' | 'cours';
}

export const projects: Project[] = [
  // Projets de stage
  {
    id: 'projet-stage-1',
    title: 'Script Mapillary',
    description: 'récupération et traitement de données géographiques par l\'API Mapillary',
    longDescription: 
      'Ce script récupère les données géographiques des routes départementales du Gard.' +
      'Il les tries ensuite sur les routes départementales uniquement et enregistre les données concernant' +
      'les signalisations routières (panneaux, poubelles, feux, etc...).' +
      'J\'ai travaillé sur ce projet pendant mon premier stage, en collaboration avec l\'équipe informatique du département du Gard.',
    imageUrl: '/images/icons/image.png', // Utilisation de notre icône d'exemple
    screenshots: [
      '/images/projects/ScreenAirflow1.png',
      '/images/projects/ScreenData.png',
      '/images/projects/ScreenSquares.png'
    ],
    technologies: ['Python', 'PostgreSQL', 'PostGIS', 'Mapillary API'],
    features: [
      'Requêtage API Mapillary',
      'Tri géographique (PostGIS)',
      'Base de données (PostgreSQL)'
    ],
    type: 'stage'
  },
  {
    id: 'projet-stage-2',
    title: 'Script Panoramax',
    description: 'Script de pré traitement géographique et d\'envoi des données sur Panoramax',
    longDescription: 
      'Ce script a pour but de pré traiter les données géographiques sortant de photos 360 prises sur des routes départementales du Gard.' +
      'Il vérifie la date et la position pour éviter les doublons et les erreurs de positionnement, et ensuite les envoie sur Panoramax.' +
      'Le projet a pour but de nourrir la base de données de Panoramax avec des données de qualité pour alimenter les algorithmes d\'IA de panoramax.',
    imageUrl: '/images/icons/image.png', // Remplacez par votre icône
    screenshots: [
      '/images/projects/PanoramaxScreen1.png',
      '/images/projects/DonneesScreen.png',
      '/images/projects/Airflow.png'
    ],
    technologies: ['Python', 'PostgreSQL', 'PostGIS', 'Panoramax API'],
    features: [
      'Requêtage API Panoramax',
      'Envoie de données sur Panoramax',
      'Tri géographique (PostGIS)',
      'Base de données (PostgreSQL)'
    ],
    type: 'stage'
  },
  

  {
    id: 'projet-cours-1',
    title: 'Site Vitrine Karmine Corp',
    description: 'Site présentant le club de Karmine Corp',
    longDescription: 
      'Site vitrine visant à présenter le club de Karmine Corp. ' +
      'Il permet de présenter le club. ' +
      'Développé en HTML CSS Bootstrap, à partir d\'un template.',
    imageUrl: '/images/icons/KC.png', // Remplacez par votre icône
    screenshots: [
      '/images/projects/ScreenAP1.png',
      '/images/projects/tasks-screenshot-2.png'
    ],
    technologies: ['HTML', 'CSS', 'BOOTSTRAP'],
    features: [
      'Présentation du club'
    ],
    type: 'cours'
  },
  {
    id: 'projet-cours-2',
    title: 'Site Vitrine Karmine Corp',
    description: 'Site présentant le club de Karmine Corp avec un système de connexion',
    longDescription: 
      'Site vitrine visant à présenter le club de Karmine Corp. ' +
      'Il permet de présenter le club. Cette version permet à l\'utilisateur de se connecter et de gérer son compte.	 ' +
      'Développé en HTML CSS Bootstrap, à partir d\'un template.',
      imageUrl: '/images/icons/KC.png', // Remplacez par votre icône
      screenshots: [
        '/images/projects/ScreenAP1.png',      
        '/images/projects/ecommerce-screenshot-2.png',
      '/images/projects/ecommerce-screenshot-3.png'
    ],
    technologies: ['HTML', 'CSS', 'BOOTSTRAP', 'MySQL', 'PHP', 'Laragon'],
    features: [
      'Présentation du club',
      'Connexion et gestion de compte'
    ],
    type: 'cours'
  },
  {
    id: 'projet-cours-3',
    title: 'Site Vitrine Karmine Corp',
    description: 'Site présentant le club de Karmine Corp avec un système de connexion',
    longDescription: 
      'Site vitrine visant à présenter le club de Karmine Corp. ' +
      'Il permet de présenter le club. Cette version permet à l\'utilisateur de se connecter et de gérer son compte. Il prends en compte le rôle de l\'utilisateur pour y ajouter un CRUD si c\'est un administrateur.  ' +
      'Développé à partir de l\'AP2, avec CodeIgniter.',
      imageUrl: '/images/icons/KC.png', // Remplacez par votre icône
      screenshots: [
        '/images/projects/ScreenAP1.png',
        '/images/projects/fitness-screenshot-2.png'
    ],
    technologies: ['HTML', 'CSS', 'BOOTSTRAP', 'SSMS', 'PHP', 'Laragon', 'CodeIgniter'],
    features: [
      'Présentation du club',
      'Connexion et gestion de compte',
      'CRUD des utilisateurs'
    ],
    type: 'cours'
  },
  {
    id: 'projet-cours-4',
    title: 'AP4 application mobile',
    description: 'Application mobile vitrine pour la karmine corp',
    longDescription: 
      'Application mobile vitrine pour la karmine corp. ' +
      'Développé avec Android Studio.' +
      'L\'application permet de présenter le club.',
      imageUrl: '/images/icons/KC.png', // Remplacez par votre icône
      screenshots: [
      '/images/projects/AP4.png'
    ],
    technologies: ['Java', 'Android Studio', 'SSMS'],
    features: [
      'Présentation du club',
    ],
    type: 'cours'
  }
]; 