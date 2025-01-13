


// // import React, { useRef, useState } from 'react';
// // import {
// //   ExternalLink,
// //   Mail,
// //   Map,
// //   MessageSquare,
// //   Link,
// //   Menu,
// //   X
// // } from 'lucide-react';

// // const Portfolio = () => {
// //   const accueilRef = useRef(null);
// //   const projetsRef = useRef(null);
// //   const competencesRef = useRef(null);
// //   const experienceRef = useRef(null);
// //   const contactRef = useRef(null);

// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   const scrollToSection = (ref) => {
// //     ref.current?.scrollIntoView({ behavior: 'smooth' });
// //   };

// //   const projects = [
// //     {
// //       name: 'Palabresak2',
// //       url: 'https://palabresak2.com/',
// //       description: 'Application web complète avec fonctionnalités avancées',
// //       tech: ['WordPress', 'SEO', 'Multilingue'],
// //       github: ''
// //     },
// //     {
// //       name: 'AD Frontière',
// //       url: 'https://adfrontiere.com',
// //       description: 'Site WordPress personnalisé',
// //       tech: ['WordPress', 'PHP', 'MySQL'],
// //       github: ''
// //     },
// //     {
// //       name: 'Étudier en Russie',
// //       url: 'https://etuderussie.ru',
// //       description: "Plateforme d'information pour les étudiants",
// //       tech: ['WordPress', 'SEO', 'Multilingue'],
// //       github: ''
// //     },
// //     {
// //       name: 'AP Consult',
// //       url: 'https://apconsult-ekb.ru',
// //       description: 'Site web professionnel de consultation',
// //       tech: ['Web Development', 'UI/UX'],
// //       github: ''
// //     },
// //     {
// //       name: 'Gestionnaire de Laboratoire Médical',
// //       description: 'Application de gestion complète pour laboratoires médicaux',
// //       url: 'https://bioramapp.onrender.com/',
// //       tech: ['MERN Stack', 'REST API', 'Security'],
// //       github: 'https://github.com/misterbb38/LimsFrontend'
// //     },
// //     {
// //       name: 'Booking Mini-Stade',
// //       description: 'Système de réservation pour terrains de foot',
// //       url: 'https://bookingfrontend-luoi.onrender.com',
// //       tech: ['MERN Stack', 'Payment Integration'],
// //       github: 'https://github.com/misterbb38/BookingFrontend'
// //     },
// //     {
// //       name: 'Système de Facturation',
// //       description: 'Application de gestion de stock et facturation',
// //       url: 'https://apps.palabresak2.com',
// //       tech: [
// //         'MERN Stack',
// //         'Data Analytics',
// //         'MERN Stack',
// //         'REST API',
// //         'Authentication',
// //         'AI Integration'
// //       ],
// //       github: 'https://github.com/misterbb38/InvoiceFrontend--palabre--'
// //     },
// //     {
// //       name: 'Traduction Multi-Langue GenAI',
// //       description: "Service de traduction utilisant l'IA générative",
// //       url: 'https://translate.palabresak2.com/',
// //       tech: ['MERN Stack', 'AI Integration', 'NLP'],
// //       github: 'https://github.com/misterbb38/translateFrontend'
// //     }
// //   ];

// //   const experiences = [
// //     {
// //       company: 'Grouper Semos',
// //       role: 'Administrateur web et formateur',
// //       description: 'Gestion des systèmes web et formation technique'
// //     },
// //     {
// //       company: 'Ракета (Yandex)',
// //       role: 'Technicien',
// //       description: 'Support technique et maintenance systèmes'
// //     },
// //     {
// //       company: 'Ап-консалт (AP-Consult)',
// //       role: 'Webmaster',
// //       description: 'Développement et maintenance de sites web'
// //     },
// //     {
// //       company: 'Alliant',
// //       role: 'Web programmeur (backend)',
// //       description: 'Développement backend et API'
// //     }
// //   ];

// //   const skills = [
// //     'JavaScript',
// //     'Node.js',
// //     'Express.js',
// //     'MongoDB',
// //     'APIs RESTful',
// //     'Authentication',
// //     'Performance',
// //     'Tests',
// //     'WordPress',
// //     'React.js'
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
// //       {/* Header/Navigation */}
// //       <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
// //           <div className="flex justify-between items-center">
// //             <h1 className="text-2xl font-bold">Amady Bar</h1>
// //             {/* Desktop Menu */}
// //             <div className="hidden md:flex space-x-6">
// //               <button
// //                 onClick={() => scrollToSection(accueilRef)}
// //                 className="hover:text-blue-300 transition-colors duration-300"
// //               >
// //                 Accueil
// //               </button>
// //               <button
// //                 onClick={() => scrollToSection(projetsRef)}
// //                 className="hover:text-blue-300 transition-colors duration-300"
// //               >
// //                 Projets
// //               </button>
// //               <button
// //                 onClick={() => scrollToSection(competencesRef)}
// //                 className="hover:text-blue-300 transition-colors duration-300"
// //               >
// //                 Compétences
// //               </button>
// //               <button
// //                 onClick={() => scrollToSection(experienceRef)}
// //                 className="hover:text-blue-300 transition-colors duration-300"
// //               >
// //                 Expérience
// //               </button>
// //               <button
// //                 onClick={() => scrollToSection(contactRef)}
// //                 className="hover:text-blue-300 transition-colors duration-300"
// //               >
// //                 Contact
// //               </button>
// //             </div>

// //             {/* Mobile Menu Button */}
// //             <button
// //               className="md:hidden text-white hover:text-blue-300 transition-colors duration-300"
// //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //             >
// //               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// //             </button>

// //             {/* Mobile Menu Overlay */}
// //             <div
// //               className={`fixed inset-0 bg-gray-800 z-50 md:hidden transition-all duration-300 ease-in-out ${
// //                 isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
// //               }`}
// //             >
// //               <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900/20 backdrop-blur-sm px-6">
// //                 <div className="bg-gray-800/95 rounded-2xl p-8 w-full max-w-sm shadow-lg">
// //                   {[
// //                     { label: 'Accueil', ref: accueilRef },
// //                     { label: 'Projets', ref: projetsRef },
// //                     { label: 'Compétences', ref: competencesRef },
// //                     { label: 'Expérience', ref: experienceRef },
// //                     { label: 'Contact', ref: contactRef }
// //                   ].map((item) => (
// //                     <button
// //                       key={item.label}
// //                       onClick={() => {
// //                         scrollToSection(item.ref);
// //                         setIsMobileMenuOpen(false);
// //                       }}
// //                       className="w-full text-xl font-medium text-white py-3 px-4 rounded-lg mb-3
// //                                  hover:bg-blue-600/20 transition-colors duration-300 text-center
// //                                  last:mb-0"
// //                     >
// //                       {item.label}
// //                     </button>
// //                   ))}
// //                 </div>

// //                 <button
// //                   className="absolute top-6 right-6 text-white hover:text-blue-300 transition-colors duration-300 bg-gray-800/80 p-2 rounded-full"
// //                   onClick={() => setIsMobileMenuOpen(false)}
// //                 >
// //                   <X size={24} />
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Hero Section */}
// //       <section ref={accueilRef} className="pt-24 pb-12 px-4 sm:px-6">
// //         <div className="max-w-7xl mx-auto text-center">
// //           <h1 className="text-4xl sm:text-5xl font-bold mb-6">
// //             Développeur Web Full Stack
// //           </h1>
// //           <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
// //             Spécialisé en MERN Stack avec une expertise en développement
// //             d'applications web modernes et WordPress
// //           </p>

// //           <div className="flex flex-col sm:flex-row sm:justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
// //             <a
// //               href="mailto:amady305@gmail.com"
// //               className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
// //             >
// //               <Mail size={20} />
// //               <span>amady305@gmail.com</span>
// //             </a>
// //             <a
// //               href="https://wa.me/79501219546"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
// //             >
// //               <MessageSquare size={20} />
// //               <span>+7 950 121 9546</span>
// //             </a>
// //             <div className="flex items-center space-x-2 text-blue-400">
// //               <Map size={20} />
// //               <span>Sénégal/Russie</span>
// //             </div>
// //           </div>

// //           <div className="mt-6">
// //             <a
// //               href="https://github.com/misterbb38"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300"
// //             >
// //               <ExternalLink size={20} />
// //               <span>GitHub</span>
// //             </a>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Projects Section */}
// //       <section ref={projetsRef} className="py-12 px-4 sm:px-6 bg-gray-800">
// //         <div className="max-w-7xl mx-auto">
// //           <h2 className="text-3xl font-bold mb-8 text-center">Mes Projets</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {projects.map((project, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300"
// //               >
// //                 <h3 className="text-xl font-bold mb-3">{project.name}</h3>
// //                 <p className="text-gray-300 mb-4">{project.description}</p>
// //                 <div className="flex flex-wrap gap-2 mb-4">
// //                   {project.tech.map((tech, techIndex) => (
// //                     <span
// //                       key={techIndex}
// //                       className="bg-blue-900 px-2 py-1 rounded-full text-sm"
// //                     >
// //                       {tech}
// //                     </span>
// //                   ))}
// //                 </div>
// //                 <div className="flex space-x-4">
// //                   {project.url && (
// //                     <a
// //                       href={project.url}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       className="flex items-center space-x-1 text-blue-400 hover:text-blue-300"
// //                     >
// //                       <Link size={16} />
// //                       <span>Site</span>
// //                     </a>
// //                   )}
// //                   {project.github && (
// //                     <a
// //                       href={project.github}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       className="flex items-center space-x-1 text-blue-400 hover:text-blue-300"
// //                     >
// //                       <ExternalLink size={16} />
// //                       <span>GitHub</span>
// //                     </a>
// //                   )}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Skills Section */}
// //       <section ref={competencesRef} className="py-12 px-4 sm:px-6">
// //         <div className="max-w-7xl mx-auto">
// //           <h2 className="text-3xl font-bold mb-8 text-center">Compétences</h2>
// //           <div className="flex flex-wrap justify-center gap-4">
// //             {skills.map((skill, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-blue-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors duration-300"
// //               >
// //                 {skill}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Experience Section */}
// //       <section ref={experienceRef} className="py-12 px-4 sm:px-6 bg-gray-800">
// //         <div className="max-w-7xl mx-auto">
// //           <h2 className="text-3xl font-bold mb-8 text-center">
// //             Expérience Professionnelle
// //           </h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {experiences.map((exp, index) => (
// //               <div key={index} className="bg-gray-900 rounded-lg p-6">
// //                 <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
// //                 <h4 className="text-blue-400 mb-3">{exp.role}</h4>
// //                 <p className="text-gray-300">{exp.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact Section */}
// //       <section ref={contactRef} className="py-12 px-4 sm:px-6">
// //         <div className="max-w-7xl mx-auto text-center">
// //           <h2 className="text-3xl font-bold mb-8">Contact</h2>
// //           <div className="flex flex-col items-center space-y-4">
// //             <a
// //               href="mailto:amady305@gmail.com"
// //               className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
// //             >
// //               <Mail size={24} />
// //               <span>amady305@gmail.com</span>
// //             </a>
// //             <a
// //               href="https://wa.me/79501219546"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
// //             >
// //               <MessageSquare size={24} />
// //               <span>+7 950 121 9546 (WhatsApp)</span>
// //             </a>
// //             <div className="flex items-center space-x-2 text-blue-400">
// //               <Map size={24} />
// //               <span>Sénégal/Russie</span>
// //             </div>
// //             <a
// //               href="https://github.com/misterbb38"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
// //             >
// //               <ExternalLink size={24} />
// //               <span>GitHub</span>
// //             </a>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Portfolio;


// import React, { useRef, useState } from 'react';
// import {
//   ExternalLink,
//   Mail,
//   Map,
//   MessageSquare,
//   Link as LinkIcon,
//   Menu,
//   X
// } from 'lucide-react';

// /**
//  * 1. Objet de traductions
//  *    Vous pouvez personnaliser davantage ces textes.
//  */
// const translations = {
//   fr: {
//     nav: {
//       accueil: 'Accueil',
//       projets: 'Projets',
//       competences: 'Compétences',
//       experience: 'Expérience',
//       contact: 'Contact',
//     },
//     hero: {
//       title: 'Développeur Web Full Stack',
//       subtitle:
//         "Spécialisé en MERN Stack avec une expertise en développement d'applications web modernes et WordPress",
//       location: 'Sénégal/Russie',
//     },
//     sections: {
//       projets: 'Mes Projets',
//       competences: 'Compétences',
//       experience: 'Expérience Professionnelle',
//       contact: 'Contact',
//     },
//     contact: {
//       email: 'Envoyer un e-mail',
//       whatsapp: 'Envoyer un message WhatsApp',
//     },
//     menu: {
//       chooseLanguage: 'Langue :',
//     },
//   },
//   en: {
//     nav: {
//       accueil: 'Home',
//       projets: 'Projects',
//       competences: 'Skills',
//       experience: 'Experience',
//       contact: 'Contact',
//     },
//     hero: {
//       title: 'Full Stack Web Developer',
//       subtitle:
//         'Specialized in MERN Stack with expertise in modern web applications and WordPress',
//       location: 'Senegal/Russia',
//     },
//     sections: {
//       projets: 'My Projects',
//       competences: 'Skills',
//       experience: 'Professional Experience',
//       contact: 'Contact',
//     },
//     contact: {
//       email: 'Send an Email',
//       whatsapp: 'Send a WhatsApp Message',
//     },
//     menu: {
//       chooseLanguage: 'Language:',
//     },
//   },
//   ru: {
//     nav: {
//       accueil: 'Главная',
//       projets: 'Проекты',
//       competences: 'Навыки',
//       experience: 'Опыт',
//       contact: 'Контакты',
//     },
//     hero: {
//       title: 'Full Stack веб-разработчик',
//       subtitle:
//         'Cпециализация на MERN Stack и разработке современных веб-приложений, включая WordPress',
//       location: 'Сенегал / Россия',
//     },
//     sections: {
//       projets: 'Мои проекты',
//       competences: 'Навыки',
//       experience: 'Профессиональный опыт',
//       contact: 'Контакты',
//     },
//     contact: {
//       email: 'Отправить Email',
//       whatsapp: 'Написать в WhatsApp',
//     },
//     menu: {
//       chooseLanguage: 'Выберите язык:',
//     },
//   },
// };

// /**
//  * 2. Liste de projets (on garde une seule version, le titre/description
//  *    peuvent être adaptés dans translations si vous le souhaitez).
//  */
// const projects = [
//   {
//     name: 'Palabresak2',
//     url: 'https://palabresak2.com/',
//     description: 'Application web complète avec fonctionnalités avancées',
//     tech: ['WordPress', 'SEO', 'Multilingue'],
//     github: '',
//   },
//   {
//     name: 'AD Frontière',
//     url: 'https://adfrontiere.com',
//     description: 'Site WordPress personnalisé',
//     tech: ['WordPress', 'PHP', 'MySQL'],
//     github: '',
//   },
//   {
//     name: 'Étudier en Russie',
//     url: 'https://etuderussie.ru',
//     description: "Plateforme d'information pour les étudiants",
//     tech: ['WordPress', 'SEO', 'Multilingue'],
//     github: '',
//   },
//   {
//     name: 'AP Consult',
//     url: 'https://apconsult-ekb.ru',
//     description: 'Site web professionnel de consultation',
//     tech: ['Web Development', 'UI/UX'],
//     github: '',
//   },
//   {
//     name: 'Gestionnaire de Laboratoire Médical',
//     description: 'Application de gestion complète pour laboratoires médicaux',
//     url: 'https://bioramapp.onrender.com/',
//     tech: ['MERN Stack', 'REST API', 'Security'],
//     github: 'https://github.com/misterbb38/LimsFrontend',
//   },
//   {
//     name: 'Booking Mini-Stade',
//     description: 'Système de réservation pour terrains de foot',
//     url: 'https://bookingfrontend-luoi.onrender.com',
//     tech: ['MERN Stack', 'Payment Integration'],
//     github: 'https://github.com/misterbb38/BookingFrontend',
//   },
//   {
//     name: 'Système de Facturation',
//     description: 'Application de gestion de stock et facturation',
//     url: 'https://apps.palabresak2.com',
//     tech: [
//       'MERN Stack',
//       'Data Analytics',
//       'MERN Stack',
//       'REST API',
//       'Authentication',
//       'AI Integration',
//     ],
//     github: 'https://github.com/misterbb38/InvoiceFrontend--palabre--',
//   },
//   {
//     name: 'Traduction Multi-Langue GenAI',
//     description: "Service de traduction utilisant l'IA générative",
//     url: 'https://translate.palabresak2.com/',
//     tech: ['MERN Stack', 'AI Integration', 'NLP'],
//     github: 'https://github.com/misterbb38/translateFrontend',
//   },
// ];

// /**
//  * 3. Liste d'expériences (idem que projects).
//  */
// const experiences = [
//   {
//     company: 'Grouper Semos',
//     role: 'Administrateur web et formateur',
//     description: 'Gestion des systèmes web et formation technique',
//   },
//   {
//     company: 'Ракета (Yandex)',
//     role: 'Technicien',
//     description: 'Support technique et maintenance systèmes',
//   },
//   {
//     company: 'Ап-консалт (AP-Consult)',
//     role: 'Webmaster',
//     description: 'Développement et maintenance de sites web',
//   },
//   {
//     company: 'Alliant',
//     role: 'Web programmeur (backend)',
//     description: 'Développement backend et API',
//   },
// ];

// /**
//  * 4. Liste de compétences (idem).
//  */
// const skills = [
//   'JavaScript',
//   'Node.js',
//   'Express.js',
//   'MongoDB',
//   'APIs RESTful',
//   'Authentication',
//   'Performance',
//   'Tests',
//   'WordPress',
//   'React.js',
// ];

// const PortfolioMultiLang = () => {
//   // Références pour le scroll
//   const accueilRef = useRef(null);
//   const projetsRef = useRef(null);
//   const competencesRef = useRef(null);
//   const experienceRef = useRef(null);
//   const contactRef = useRef(null);

//   // Gestion du menu mobile
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Langue sélectionnée
//   const [language, setLanguage] = useState('fr'); // fr, en, ru

//   // Fonction pour scroller en douceur vers une section
//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   // Texte selon la langue sélectionnée
//   const t = translations[language];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
//       {/* Header/Navigation */}
//       <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
//           <div className="flex justify-between items-center">
//             <h1 className="text-2xl font-bold">Amady Bar</h1>

//             {/* Sélecteur de langue (Desktop) */}
//             <div className="hidden md:flex items-center space-x-4">
//               <span className="text-gray-300">{t.menu.chooseLanguage}</span>
//               <select
//                 className="bg-gray-900 border border-gray-700 rounded-md p-1"
//                 value={language}
//                 onChange={(e) => setLanguage(e.target.value)}
//               >
//                 <option value="fr">Français</option>
//                 <option value="en">English</option>
//                 <option value="ru">Русский</option>
//               </select>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-6">
//               <button
//                 onClick={() => scrollToSection(accueilRef)}
//                 className="hover:text-blue-300 transition-colors duration-300"
//               >
//                 {t.nav.accueil}
//               </button>
//               <button
//                 onClick={() => scrollToSection(projetsRef)}
//                 className="hover:text-blue-300 transition-colors duration-300"
//               >
//                 {t.nav.projets}
//               </button>
//               <button
//                 onClick={() => scrollToSection(competencesRef)}
//                 className="hover:text-blue-300 transition-colors duration-300"
//               >
//                 {t.nav.competences}
//               </button>
//               <button
//                 onClick={() => scrollToSection(experienceRef)}
//                 className="hover:text-blue-300 transition-colors duration-300"
//               >
//                 {t.nav.experience}
//               </button>
//               <button
//                 onClick={() => scrollToSection(contactRef)}
//                 className="hover:text-blue-300 transition-colors duration-300"
//               >
//                 {t.nav.contact}
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden text-white hover:text-blue-300 transition-colors duration-300"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Overlay */}
//         <div
//           className={`fixed inset-0 bg-gray-800 z-50 md:hidden transition-all duration-300 ease-in-out ${
//             isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
//           }`}
//         >
//           <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900/20 backdrop-blur-sm px-6">
//             <div className="bg-gray-800/95 rounded-2xl p-8 w-full max-w-sm shadow-lg">
//               {[
//                 { label: t.nav.accueil, ref: accueilRef },
//                 { label: t.nav.projets, ref: projetsRef },
//                 { label: t.nav.competences, ref: competencesRef },
//                 { label: t.nav.experience, ref: experienceRef },
//                 { label: t.nav.contact, ref: contactRef },
//               ].map((item) => (
//                 <button
//                   key={item.label}
//                   onClick={() => {
//                     scrollToSection(item.ref);
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className="w-full text-xl font-medium text-white py-3 px-4 rounded-lg mb-3
//                              hover:bg-blue-600/20 transition-colors duration-300 text-center
//                              last:mb-0"
//                 >
//                   {item.label}
//                 </button>
//               ))}

//               {/* Sélecteur de langue (Mobile) */}
//               <div className="mt-4">
//                 <span className="text-gray-300 block mb-2">
//                   {t.menu.chooseLanguage}
//                 </span>
//                 <select
//                   className="w-full bg-gray-900 border border-gray-700 rounded-md p-2"
//                   value={language}
//                   onChange={(e) => setLanguage(e.target.value)}
//                 >
//                   <option value="fr">Français</option>
//                   <option value="en">English</option>
//                   <option value="ru">Русский</option>
//                 </select>
//               </div>
//             </div>

//             <button
//               className="absolute top-6 right-6 text-white hover:text-blue-300 transition-colors duration-300 bg-gray-800/80 p-2 rounded-full"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <X size={24} />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section ref={accueilRef} className="pt-24 pb-12 px-4 sm:px-6">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t.hero.title}</h1>
//           <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
//             {t.hero.subtitle}
//           </p>

//           <div className="flex flex-col sm:flex-row sm:justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
//             <a
//               href="mailto:amady305@gmail.com"
//               className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
//             >
//               <Mail size={20} />
//               <span>amady305@gmail.com</span>
//             </a>
//             <a
//               href="https://wa.me/79501219546"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
//             >
//               <MessageSquare size={20} />
//               <span>+7 950 121 9546</span>
//             </a>
//             <div className="flex items-center space-x-2 text-blue-400">
//               <Map size={20} />
//               <span>{t.hero.location}</span>
//             </div>
//           </div>

//           <div className="mt-6">
//             <a
//               href="https://github.com/misterbb38"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300"
//             >
//               <ExternalLink size={20} />
//               <span>GitHub</span>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section ref={projetsRef} className="py-12 px-4 sm:px-6 bg-gray-800">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-8 text-center">
//             {t.sections.projets}
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300"
//               >
//                 <h3 className="text-xl font-bold mb-3">{project.name}</h3>
//                 <p className="text-gray-300 mb-4">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="bg-blue-900 px-2 py-1 rounded-full text-sm"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex space-x-4">
//                   {project.url && (
//                     <a
//                       href={project.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center space-x-1 text-blue-400 hover:text-blue-300"
//                     >
//                       <LinkIcon size={16} />
//                       <span>Site</span>
//                     </a>
//                   )}
//                   {project.github && (
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center space-x-1 text-blue-400 hover:text-blue-300"
//                     >
//                       <ExternalLink size={16} />
//                       <span>GitHub</span>
//                     </a>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section ref={competencesRef} className="py-12 px-4 sm:px-6">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-8 text-center">
//             {t.sections.competences}
//           </h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {skills.map((skill, index) => (
//               <div
//                 key={index}
//                 className="bg-blue-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors duration-300"
//               >
//                 {skill}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section ref={experienceRef} className="py-12 px-4 sm:px-6 bg-gray-800">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-8 text-center">
//             {t.sections.experience}
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {experiences.map((exp, index) => (
//               <div key={index} className="bg-gray-900 rounded-lg p-6">
//                 <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
//                 <h4 className="text-blue-400 mb-3">{exp.role}</h4>
//                 <p className="text-gray-300">{exp.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section ref={contactRef} className="py-12 px-4 sm:px-6">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-8">{t.sections.contact}</h2>
//           <div className="flex flex-col items-center space-y-4">
//             <a
//               href="mailto:amady305@gmail.com"
//               className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
//             >
//               <Mail size={24} />
//               <span>amady305@gmail.com</span>
//             </a>
//             <a
//               href="https://wa.me/79501219546"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
//             >
//               <MessageSquare size={24} />
//               <span>+7 950 121 9546 (WhatsApp)</span>
//             </a>
//             <div className="flex items-center space-x-2 text-blue-400">
//               <Map size={24} />
//               <span>{t.hero.location}</span>
//             </div>
//             <a
//               href="https://github.com/misterbb38"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
//             >
//               <ExternalLink size={24} />
//               <span>GitHub</span>
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PortfolioMultiLang;


import React, { useRef, useState } from 'react';
import {
  ExternalLink,
  Mail,
  Map,
  MessageSquare,
  Link as LinkIcon,
  Menu,
  X
} from 'lucide-react';

/**
 * GROS OBJET DE TRADUCTIONS
 * -------------------------
 * On regroupe toutes les traductions (menu, sections, projets, etc.)
 * dans un même objet, structuré par langue.
 */
const translations = {
  fr: {
    nav: {
      accueil: 'Accueil',
      projets: 'Projets',
      competences: 'Compétences',
      experience: 'Expérience',
      contact: 'Contact',
    },
    hero: {
      title: 'Développeur Web Full Stack',
      subtitle:
        "Spécialisé en MERN Stack avec une expertise en développement d'applications web modernes et WordPress",
      location: 'Sénégal/Russie',
    },
    sections: {
      projets: 'Mes Projets',
      competences: 'Compétences',
      experience: 'Expérience Professionnelle',
      contact: 'Contact',
    },
    contact: {
      email: 'Envoyer un email',
      whatsapp: 'Envoyer un message WhatsApp',
    },
    menu: {
      chooseLanguage: 'Langue :',
    },

    // Liste de projets en FR
    projects: [
      {
        name: 'Palabresak2',
        url: 'https://palabresak2.com/',
        description: 'Application web complète avec fonctionnalités avancées',
        tech: ['WordPress', 'SEO', 'Multilingue'],
        github: '',
      },
      {
        name: 'AD Frontière',
        url: 'https://adfrontiere.com',
        description: 'Site WordPress personnalisé',
        tech: ['WordPress', 'PHP', 'MySQL'],
        github: '',
      },
      {
        name: 'Étudier en Russie',
        url: 'https://etuderussie.ru',
        description: "Plateforme d'information pour les étudiants",
        tech: ['WordPress', 'SEO', 'Multilingue'],
        github: '',
      },
      {
        name: 'AP Consult',
        url: 'https://apconsult-ekb.ru',
        description: 'Site web professionnel de consultation',
        tech: ['Web Development', 'UI/UX'],
        github: '',
      },
      {
        name: 'Gestionnaire de Laboratoire Médical',
        description: 'Application de gestion complète pour laboratoires médicaux',
        url: 'https://bioramapp.onrender.com/',
        tech: ['MERN Stack', 'REST API', 'Security'],
        github: 'https://github.com/misterbb38/LimsFrontend',
      },
      {
        name: 'Booking Mini-Stade',
        description: 'Système de réservation pour terrains de foot',
        url: 'https://bookingfrontend-luoi.onrender.com',
        tech: ['MERN Stack', 'Payment Integration'],
        github: 'https://github.com/misterbb38/BookingFrontend',
      },
      {
        name: 'Système de Facturation',
        description: 'Application de gestion de stock et facturation',
        url: 'https://apps.palabresak2.com',
        tech: [
          'MERN Stack',
          'Data Analytics',
          'MERN Stack',
          'REST API',
          'Authentication',
          'AI Integration',
        ],
        github: 'https://github.com/misterbb38/InvoiceFrontend--palabre--',
      },
      {
        name: 'Traduction Multi-Langue GenAI',
        description: "Service de traduction utilisant l'IA générative",
        url: 'https://translate.palabresak2.com/',
        tech: ['MERN Stack', 'AI Integration', 'NLP'],
        github: 'https://github.com/misterbb38/translateFrontend',
      },
    ],

    // Expériences en FR
    experiences: [
      {
        company: 'Grouper Semos',
        role: 'Administrateur web et formateur',
        description: 'Gestion des systèmes web et formation technique',
      },
      {
        company: 'Ракета (Yandex)',
        role: 'Technicien',
        description: 'Support technique et maintenance systèmes',
      },
      {
        company: 'Ап-консалт (AP-Consult)',
        role: 'Webmaster',
        description: 'Développement et maintenance de sites web',
      },
      {
        company: 'Alliant',
        role: 'Web programmeur (backend)',
        description: 'Développement backend et API',
      },
    ],

    // Compétences en FR
    skills: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'APIs RESTful',
      'Authentification',
      'Performance',
      'Tests',
      'WordPress',
      'React.js',
    ],
  },

  en: {
    nav: {
      accueil: 'Home',
      projets: 'Projects',
      competences: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      title: 'Full Stack Web Developer',
      subtitle:
        'Specialized in MERN Stack with expertise in modern web applications and WordPress',
      location: 'Senegal/Russia',
    },
    sections: {
      projets: 'My Projects',
      competences: 'Skills',
      experience: 'Professional Experience',
      contact: 'Contact',
    },
    contact: {
      email: 'Send Email',
      whatsapp: 'Send WhatsApp',
    },
    menu: {
      chooseLanguage: 'Language:',
    },

    // Projects in EN
    projects: [
      {
        name: 'Palabresak2',
        url: 'https://palabresak2.com/',
        description: 'Complete web application with advanced features',
        tech: ['WordPress', 'SEO', 'Multilingual'],
        github: '',
      },
      {
        name: 'AD Frontière',
        url: 'https://adfrontiere.com',
        description: 'Custom WordPress website',
        tech: ['WordPress', 'PHP', 'MySQL'],
        github: '',
      },
      {
        name: 'Étudier en Russie',
        url: 'https://etuderussie.ru',
        description: 'Information platform for students',
        tech: ['WordPress', 'SEO', 'Multilingual'],
        github: '',
      },
      {
        name: 'AP Consult',
        url: 'https://apconsult-ekb.ru',
        description: 'Professional consulting website',
        tech: ['Web Development', 'UI/UX'],
        github: '',
      },
      {
        name: 'Medical Lab Manager',
        description: 'Complete management system for medical laboratories',
        url: 'https://bioramapp.onrender.com/',
        tech: ['MERN Stack', 'REST API', 'Security'],
        github: 'https://github.com/misterbb38/LimsFrontend',
      },
      {
        name: 'Booking Mini-Stadium',
        description: 'Reservation system for football fields',
        url: 'https://bookingfrontend-luoi.onrender.com',
        tech: ['MERN Stack', 'Payment Integration'],
        github: 'https://github.com/misterbb38/BookingFrontend',
      },
      {
        name: 'Invoicing System',
        description: 'Application for stock management and invoicing',
        url: 'https://apps.palabresak2.com',
        tech: [
          'MERN Stack',
          'Data Analytics',
          'MERN Stack',
          'REST API',
          'Authentication',
          'AI Integration',
        ],
        github: 'https://github.com/misterbb38/InvoiceFrontend--palabre--',
      },
      {
        name: 'GenAI Multi-Language Translation',
        description: 'Translation service using generative AI',
        url: 'https://translate.palabresak2.com/',
        tech: ['MERN Stack', 'AI Integration', 'NLP'],
        github: 'https://github.com/misterbb38/translateFrontend',
      },
    ],

    // Experiences in EN
    experiences: [
      {
        company: 'Grouper Semos',
        role: 'Web Administrator & Trainer',
        description: 'Web system management and technical training',
      },
      {
        company: 'Ракета (Yandex)',
        role: 'Technician',
        description: 'Technical support and system maintenance',
      },
      {
        company: 'Ап-консалт (AP-Consult)',
        role: 'Webmaster',
        description: 'Website development and maintenance',
      },
      {
        company: 'Alliant',
        role: 'Web Programmer (Backend)',
        description: 'Backend and API development',
      },
    ],

    // Skills in EN
    skills: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'Authentication',
      'Performance',
      'Testing',
      'WordPress',
      'React.js',
    ],
  },

  ru: {
    nav: {
      accueil: 'Главная',
      projets: 'Проекты',
      competences: 'Навыки',
      experience: 'Опыт',
      contact: 'Контакты',
    },
    hero: {
      title: 'Full Stack веб-разработчик',
      subtitle:
        'Специализируюсь на MERN Stack, разработке современных веб-приложений и WordPress',
      location: 'Сенегал / Россия',
    },
    sections: {
      projets: 'Мои проекты',
      competences: 'Навыки',
      experience: 'Профессиональный опыт',
      contact: 'Контакты',
    },
    contact: {
      email: 'Отправить Email',
      whatsapp: 'Написать в WhatsApp',
    },
    menu: {
      chooseLanguage: 'Выберите язык:',
    },

    // Projects in RU
    projects: [
      {
        name: 'Palabresak2',
        url: 'https://palabresak2.com/',
        description: 'Полноценное веб-приложение с расширенными функциями',
        tech: ['WordPress', 'SEO', 'Мультиязычность'],
        github: '',
      },
      {
        name: 'AD Frontière',
        url: 'https://adfrontiere.com',
        description: 'Персонализированный сайт на WordPress',
        tech: ['WordPress', 'PHP', 'MySQL'],
        github: '',
      },
      {
        name: 'Étudier en Russie',
        url: 'https://etuderussie.ru',
        description: 'Информационная платформа для студентов',
        tech: ['WordPress', 'SEO', 'Мультиязычность'],
        github: '',
      },
      {
        name: 'AP Consult',
        url: 'https://apconsult-ekb.ru',
        description: 'Профессиональный сайт по консультациям',
        tech: ['Веб-разработка', 'UI/UX'],
        github: '',
      },
      {
        name: 'Управление Медицинской Лабораторией',
        description: 'Полная система управления для медлабораторий',
        url: 'https://bioramapp.onrender.com/',
        tech: ['MERN Stack', 'REST API', 'Безопасность'],
        github: 'https://github.com/misterbb38/LimsFrontend',
      },
      {
        name: 'Бронирование мини-стадиона',
        description: 'Система бронирования футбольных полей',
        url: 'https://bookingfrontend-luoi.onrender.com',
        tech: ['MERN Stack', 'Оплата (Payment Integration)'],
        github: 'https://github.com/misterbb38/BookingFrontend',
      },
      {
        name: 'Система выставления счетов',
        description: 'Приложение для управления запасами и выписки счетов',
        url: 'https://apps.palabresak2.com',
        tech: [
          'MERN Stack',
          'Аналитика данных',
          'MERN Stack',
          'REST API',
          'Аутентификация',
          'Интеграция ИИ',
        ],
        github: 'https://github.com/misterbb38/InvoiceFrontend--palabre--',
      },
      {
        name: 'Генеративный ИИ для перевода',
        description: 'Сервис перевода с использованием генеративного ИИ',
        url: 'https://translate.palabresak2.com/',
        tech: ['MERN Stack', 'ИИ интеграция', 'NLP'],
        github: 'https://github.com/misterbb38/translateFrontend',
      },
    ],

    // Experiences in RU
    experiences: [
      {
        company: 'Grouper Semos',
        role: 'Веб-администратор и преподаватель',
        description: 'Управление веб-системами и техническое обучение',
      },
      {
        company: 'Ракета (Yandex)',
        role: 'Техник',
        description: 'Техническая поддержка и обслуживание систем',
      },
      {
        company: 'Ап-консалт (AP-Consult)',
        role: 'Вебмастер',
        description: 'Разработка и поддержка веб-сайтов',
      },
      {
        company: 'Alliant',
        role: 'Веб-программист (backend)',
        description: 'Разработка бэкенда и API',
      },
    ],

    // Skills in RU
    skills: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API',
      'Аутентификация',
      'Производительность',
      'Тесты',
      'WordPress',
      'React.js',
    ],
  },
};

/**
 * NOTRE COMPOSANT PRINCIPAL
 * -------------------------
 * 1) Gère la langue sélectionnée (fr/en/ru)
 * 2) Affiche le menu, le contenu, les projets et expériences
 *    selon la langue choisie.
 */
const PortfolioMultiLang = () => {
  // Références pour scroller vers chaque section
  const accueilRef = useRef(null);
  const projetsRef = useRef(null);
  const competencesRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  // État pour le menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // État pour la langue en cours
  const [language, setLanguage] = useState('fr'); // "fr", "en", ou "ru"

  // Raccourci pour accéder aux traductions de la langue actuelle
  const t = translations[language];

  // Fonction de scroll
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* HEADER / NAVIGATION */}
      <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Amady Bar</h1>

            {/* Sélecteur de langue (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-gray-300">{t.menu.chooseLanguage}</span>
              <select
                className="bg-gray-900 border border-gray-700 rounded-md p-1"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="ru">Русский</option>
              </select>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection(accueilRef)}
                className="hover:text-blue-300 transition-colors duration-300"
              >
                {t.nav.accueil}
              </button>
              <button
                onClick={() => scrollToSection(projetsRef)}
                className="hover:text-blue-300 transition-colors duration-300"
              >
                {t.nav.projets}
              </button>
              <button
                onClick={() => scrollToSection(competencesRef)}
                className="hover:text-blue-300 transition-colors duration-300"
              >
                {t.nav.competences}
              </button>
              <button
                onClick={() => scrollToSection(experienceRef)}
                className="hover:text-blue-300 transition-colors duration-300"
              >
                {t.nav.experience}
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="hover:text-blue-300 transition-colors duration-300"
              >
                {t.nav.contact}
              </button>
            </div>

            {/* Bouton du menu mobile */}
            <button
              className="md:hidden text-white hover:text-blue-300 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Overlay Menu Mobile */}
        <div
          className={`fixed inset-0 bg-gray-800 z-50 md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900/20 backdrop-blur-sm px-6">
            <div className="bg-gray-800/95 rounded-2xl p-8 w-full max-w-sm shadow-lg">
              {[
                { label: t.nav.accueil, ref: accueilRef },
                { label: t.nav.projets, ref: projetsRef },
                { label: t.nav.competences, ref: competencesRef },
                { label: t.nav.experience, ref: experienceRef },
                { label: t.nav.contact, ref: contactRef },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    scrollToSection(item.ref);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-xl font-medium text-white py-3 px-4 rounded-lg mb-3
                             hover:bg-blue-600/20 transition-colors duration-300 text-center
                             last:mb-0"
                >
                  {item.label}
                </button>
              ))}

              {/* Sélecteur de langue (Mobile) */}
              <div className="mt-4">
                <span className="text-gray-300 block mb-2">
                  {t.menu.chooseLanguage}
                </span>
                <select
                  className="w-full bg-gray-900 border border-gray-700 rounded-md p-2"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                  <option value="ru">Русский</option>
                </select>
              </div>
            </div>

            <button
              className="absolute top-6 right-6 text-white hover:text-blue-300 transition-colors duration-300 bg-gray-800/80 p-2 rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* SECTION HERO / ACCUEIL */}
      <section ref={accueilRef} className="pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
            <a
              href="mailto:amady305@gmail.com"
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
            >
              <Mail size={20} />
              <span>amady305@gmail.com</span>
            </a>
            <a
              href="https://wa.me/79501219546"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
            >
              <MessageSquare size={20} />
              <span>+7 950 121 9546</span>
            </a>
            <div className="flex items-center space-x-2 text-blue-400">
              <Map size={20} />
              <span>{t.hero.location}</span>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="https://github.com/misterbb38"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300"
            >
              <ExternalLink size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION PROJETS */}
      <section ref={projetsRef} className="py-12 px-4 sm:px-6 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t.sections.projets}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-900 px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-blue-400 hover:text-blue-300"
                    >
                      <LinkIcon size={16} />
                      <span>Site</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-blue-400 hover:text-blue-300"
                    >
                      <ExternalLink size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION COMPÉTENCES */}
      <section ref={competencesRef} className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t.sections.competences}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {t.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-blue-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION EXPÉRIENCE */}
      <section ref={experienceRef} className="py-12 px-4 sm:px-6 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t.sections.experience}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.experiences.map((exp, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
                <h4 className="text-blue-400 mb-3">{exp.role}</h4>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section ref={contactRef} className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">{t.sections.contact}</h2>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="mailto:amady305@gmail.com"
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
            >
              <Mail size={24} />
              <span>amady305@gmail.com</span>
            </a>
            <a
              href="https://wa.me/79501219546"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
            >
              <MessageSquare size={24} />
              <span>+7 950 121 9546 (WhatsApp)</span>
            </a>
            <div className="flex items-center space-x-2 text-blue-400">
              <Map size={24} />
              <span>{t.hero.location}</span>
            </div>
            <a
              href="https://github.com/misterbb38"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
            >
              <ExternalLink size={24} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioMultiLang;
