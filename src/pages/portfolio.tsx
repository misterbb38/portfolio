// // // import React, { useRef } from 'react';
// // // import { ExternalLink, Mail, Map, MessageSquare, Link } from 'lucide-react';

// // // const Portfolio = () => {
// // //   const accueilRef = useRef(null);
// // //   const projetsRef = useRef(null);
// // //   const competencesRef = useRef(null);
// // //   const experienceRef = useRef(null);
// // //   const contactRef = useRef(null);

// // //   const scrollToSection = (ref) => {
// // //     ref.current?.scrollIntoView({ behavior: 'smooth' });
// // //   };

// // //   const projects = [
// // //     {
// // //       name: "Palabresak2",
// // //       url: "https://palabresak2.com/",
// // //       description: "Application web complète avec fonctionnalités avancées",
// // //       tech: ["WordPress", "SEO", "Multilingue"],
// // //       github: ""
// // //     },
// // //     {
// // //       name: "AD Frontière",
// // //       url: "https://adfrontiere.com",
// // //       description: "Site WordPress personnalisé",
// // //       tech: ["WordPress", "PHP", "MySQL"],
// // //       github: ""
// // //     },
// // //     {
// // //       name: "Étudier en Russie",
// // //       url: "https://etuderussie.ru",
// // //       description: "Plateforme d'information pour les étudiants",
// // //       tech: ["WordPress", "SEO", "Multilingue"],
// // //       github: ""
// // //     },
// // //     {
// // //       name: "AP Consult",
// // //       url: "https://apconsult-ekb.ru",
// // //       description: "Site web professionnel de consultation",
// // //       tech: ["Web Development", "UI/UX"],
// // //       github: ""
// // //     },
// // //     {
// // //       name: "Gestionnaire de Laboratoire Médical",
// // //       description: "Application de gestion complète pour laboratoires médicaux",
// // //       url:"https://bioramapp.onrender.com/",
// // //       tech: ["MERN Stack", "REST API", "Security"],
// // //       github: "https://github.com/misterbb38/LimsFrontend"
// // //     },
// // //     {
// // //       name: "Booking Mini-Stade",
// // //       description: "Système de réservation pour terrains de foot",
// // //       url:"https://bookingfrontend-luoi.onrender.com",
// // //       tech: ["MERN Stack", "Payment Integration"],
// // //       github: ""
// // //     },
// // //     {
// // //       name: "Système de Facturation",
// // //       description: "Application de gestion de stock et facturation",
// // //       url:"https://apps.palabresak2.com",
// // //       tech: ["MERN Stack", "Data Analytics" ,"MERN Stack", "REST API", "Authentication", "AI Integration"],
// // //       github: ""
// // //     },
// // //     {
// // //       name: "Traduction Multi-Langue GenAI",
// // //       description: "Service de traduction utilisant l'IA générative",
// // //       url:"https://translate.palabresak2.com/",
// // //       tech: ["MERN Stack", "AI Integration", "NLP"],
// // //       github: ""
// // //     }
// // //   ];

// // //   const experiences = [
// // //     {
// // //       company: "Grouper Semos",
// // //       role: "Administrateur web et formateur",
// // //       description: "Gestion des systèmes web et formation technique"
// // //     },
// // //     {
// // //       company: "Ракета (Yandex)",
// // //       role: "Technicien",
// // //       description: "Support technique et maintenance systèmes"
// // //     },
// // //     {
// // //       company: "Ап-консалт (AP-Consult)",
// // //       role: "Webmaster",
// // //       description: "Développement et maintenance de sites web"
// // //     },
// // //     {
// // //       company: "Alliant",
// // //       role: "Web programmeur (backend)",
// // //       description: "Développement backend et API"
// // //     }
// // //   ];

// // //   const skills = [
// // //     "JavaScript", "Node.js", "Express.js", "MongoDB", 
// // //     "APIs RESTful", "Authentication", "Performance", 
// // //     "Tests", "WordPress", "React.js"
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
// // //       {/* Header/Navigation */}
// // //       <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
// // //         <div className="container mx-auto px-6 py-4">
// // //           <div className="flex justify-between items-center">
// // //             <h1 className="text-2xl font-bold">Amady Bar</h1>
// // //             <div className="space-x-6">
// // //               <button onClick={() => scrollToSection(accueilRef)} className="hover:text-blue-300">
// // //                 Accueil
// // //               </button>
// // //               <button onClick={() => scrollToSection(projetsRef)} className="hover:text-blue-300">
// // //                 Projets
// // //               </button>
// // //               <button onClick={() => scrollToSection(competencesRef)} className="hover:text-blue-300">
// // //                 Compétences
// // //               </button>
// // //               <button onClick={() => scrollToSection(experienceRef)} className="hover:text-blue-300">
// // //                 Expérience
// // //               </button>
// // //               <button onClick={() => scrollToSection(contactRef)} className="hover:text-blue-300">
// // //                 Contact
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </nav>

// // //       {/* Hero Section */}
// // //       <section ref={accueilRef} className="pt-24 pb-12 px-6">
// // //         <div className="container mx-auto text-center">
// // //           <h1 className="text-5xl font-bold mb-6">
// // //             Développeur Web Full Stack
// // //           </h1>
// // //           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
// // //             Spécialisé en MERN Stack avec une expertise en développement d'applications web modernes et WordPress
// // //           </p>
          
// // //           <div className="flex justify-center space-x-6 mt-8">
// // //             <a 
// // //               href="mailto:amady305@gmail.com"
// // //               className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
// // //             >
// // //               <Mail size={20} />
// // //               <span>amady305@gmail.com</span>
// // //             </a>
// // //             <a 
// // //               href="https://wa.me/79501219546"
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
// // //             >
// // //               <MessageSquare size={20} />
// // //               <span>+7 950 121 9546</span>
// // //             </a>
// // //             <div className="flex items-center space-x-2 text-blue-400">
// // //               <Map size={20} />
// // //               <span>Sénégal/Russie</span>
// // //             </div>
// // //           </div>

// // //           <div className="mt-6">
// // //             <a
// // //               href="https://github.com/misterbb38"
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300"
// // //             >
// // //               <ExternalLink size={20} />
// // //               <span>GitHub</span>
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Projects Section */}
// // //       <section ref={projetsRef} className="py-12 px-6 bg-gray-800">
// // //         <div className="container mx-auto">
// // //           <h2 className="text-3xl font-bold mb-8 text-center">Mes Projets</h2>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {projects.map((project, index) => (
// // //               <div key={index} className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300">
// // //                 <h3 className="text-xl font-bold mb-3">{project.name}</h3>
// // //                 <p className="text-gray-300 mb-4">{project.description}</p>
// // //                 <div className="flex flex-wrap gap-2 mb-4">
// // //                   {project.tech.map((tech, techIndex) => (
// // //                     <span key={techIndex} className="bg-blue-900 px-2 py-1 rounded-full text-sm">
// // //                       {tech}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //                 <div className="flex space-x-4">
// // //                   {project.url && (
// // //                     <a
// // //                       href={project.url}
// // //                       target="_blank"
// // //                       rel="noopener noreferrer"
// // //                       className="flex items-center space-x-1 text-blue-400 hover:text-blue-300"
// // //                     >
// // //                       <Link size={16} />
// // //                       <span>Site</span>
// // //                     </a>
// // //                   )}
// // //                   {project.github && (
// // //                     <a
// // //                       href={project.github}
// // //                       target="_blank"
// // //                       rel="noopener noreferrer"
// // //                       className="flex items-center space-x-1 text-blue-400 hover:text-blue-300"
// // //                     >
// // //                       <ExternalLink size={16} />
// // //                       <span>GitHub</span>
// // //                     </a>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Skills Section */}
// // //       <section ref={competencesRef} className="py-12 px-6">
// // //         <div className="container mx-auto">
// // //           <h2 className="text-3xl font-bold mb-8 text-center">Compétences</h2>
// // //           <div className="flex flex-wrap justify-center gap-4">
// // //             {skills.map((skill, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="bg-blue-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors duration-300"
// // //               >
// // //                 {skill}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Experience Section */}
// // //       <section ref={experienceRef} className="py-12 px-6 bg-gray-800">
// // //         <div className="container mx-auto">
// // //           <h2 className="text-3xl font-bold mb-8 text-center">Expérience Professionnelle</h2>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //             {experiences.map((exp, index) => (
// // //               <div key={index} className="bg-gray-900 rounded-lg p-6">
// // //                 <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
// // //                 <h4 className="text-blue-400 mb-3">{exp.role}</h4>
// // //                 <p className="text-gray-300">{exp.description}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Contact Section */}
// // //       <section ref={contactRef} className="py-12 px-6">
// // //         <div className="container mx-auto text-center">
// // //           <h2 className="text-3xl font-bold mb-8">Contact</h2>
// // //           <div className="flex flex-col items-center space-y-4">
// // //             <a
// // //               href="mailto:amady305@gmail.com"
// // //               className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
// // //             >
// // //               <Mail size={24} />
// // //               <span>amady305@gmail.com</span>
// // //             </a>
// // //             <a
// // //               href="https://wa.me/79501219546"
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
// // //             >
// // //               <MessageSquare size={24} />
// // //               <span>+7 950 121 9546 (WhatsApp)</span>
// // //             </a>
// // //             <div className="flex items-center space-x-2 text-blue-400">
// // //               <Map size={24} />
// // //               <span>Sénégal/Russie</span>
// // //             </div>
// // //             <a
// // //               href="https://github.com/misterbb38"
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
// // //             >
// // //               <ExternalLink size={24} />
// // //               <span>GitHub</span>
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default Portfolio;


// // import React, { useRef, useState } from 'react';
// // import { ExternalLink, Mail, Map, MessageSquare, Link, Menu, X } from 'lucide-react';

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
// //       name: "Palabresak2",
// //       url: "https://palabresak2.com/",
// //       description: "Application web complète avec fonctionnalités avancées",
// //       tech: ["WordPress", "SEO", "Multilingue"],
// //       github: ""
// //     },
// //     {
// //       name: "AD Frontière",
// //       url: "https://adfrontiere.com",
// //       description: "Site WordPress personnalisé",
// //       tech: ["WordPress", "PHP", "MySQL"],
// //       github: ""
// //     },
// //     {
// //       name: "Étudier en Russie",
// //       url: "https://etuderussie.ru",
// //       description: "Plateforme d'information pour les étudiants",
// //       tech: ["WordPress", "SEO", "Multilingue"],
// //       github: ""
// //     },
// //     {
// //       name: "AP Consult",
// //       url: "https://apconsult-ekb.ru",
// //       description: "Site web professionnel de consultation",
// //       tech: ["Web Development", "UI/UX"],
// //       github: ""
// //     },
// //     {
// //       name: "Gestionnaire de Laboratoire Médical",
// //       description: "Application de gestion complète pour laboratoires médicaux",
// //       url:"https://bioramapp.onrender.com/",
// //       tech: ["MERN Stack", "REST API", "Security"],
// //       github: "https://github.com/misterbb38/LimsFrontend"
// //     },
// //     {
// //       name: "Booking Mini-Stade",
// //       description: "Système de réservation pour terrains de foot",
// //       url:"https://bookingfrontend-luoi.onrender.com",
// //       tech: ["MERN Stack", "Payment Integration"],
// //       github: ""
// //     },
// //     {
// //       name: "Système de Facturation",
// //       description: "Application de gestion de stock et facturation",
// //       url:"https://apps.palabresak2.com",
// //       tech: ["MERN Stack", "Data Analytics" ,"MERN Stack", "REST API", "Authentication", "AI Integration"],
// //       github: ""
// //     },
// //     {
// //       name: "Traduction Multi-Langue GenAI",
// //       description: "Service de traduction utilisant l'IA générative",
// //       url:"https://translate.palabresak2.com/",
// //       tech: ["MERN Stack", "AI Integration", "NLP"],
// //       github: ""
// //     }
// //   ];
// //   const experiences = [
// //     {
// //       company: "Grouper Semos",
// //       role: "Administrateur web et formateur",
// //       description: "Gestion des systèmes web et formation technique"
// //     },
// //     {
// //       company: "Ракета (Yandex)",
// //       role: "Technicien",
// //       description: "Support technique et maintenance systèmes"
// //     },
// //     {
// //       company: "Ап-консалт (AP-Consult)",
// //       role: "Webmaster",
// //       description: "Développement et maintenance de sites web"
// //     },
// //     {
// //       company: "Alliant",
// //       role: "Web programmeur (backend)",
// //       description: "Développement backend et API"
// //     }
// //   ];

// //   const skills = [
// //     "JavaScript", "Node.js", "Express.js", "MongoDB", 
// //     "APIs RESTful", "Authentication", "Performance", 
// //     "Tests", "WordPress", "React.js"
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
// //       {/* Header/Navigation */}
// //       <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
// //         <div className="container mx-auto px-6 py-4">
// //           <div className="flex justify-between items-center">
// //             <h1 className="text-2xl font-bold">Amady Bar</h1>
            
// //             {/* Desktop Menu */}
// //             <div className="hidden md:flex space-x-6">
// //               <button onClick={() => scrollToSection(accueilRef)} className="hover:text-blue-300 transition-colors duration-300">
// //                 Accueil
// //               </button>
// //               <button onClick={() => scrollToSection(projetsRef)} className="hover:text-blue-300 transition-colors duration-300">
// //                 Projets
// //               </button>
// //               <button onClick={() => scrollToSection(competencesRef)} className="hover:text-blue-300 transition-colors duration-300">
// //                 Compétences
// //               </button>
// //               <button onClick={() => scrollToSection(experienceRef)} className="hover:text-blue-300 transition-colors duration-300">
// //                 Expérience
// //               </button>
// //               <button onClick={() => scrollToSection(contactRef)} className="hover:text-blue-300 transition-colors duration-300">
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
// //             <div className={`
// //               fixed inset-0 bg-slate-900 z-50 md:hidden
// //               transition-all duration-300 ease-in-out
// //               ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
// //             `}>
// //               <div className="flex flex-col items-center justify-center h-full space-y-8 bg-gradient-to-b from-gray-900 to-gray-800">
// //                 <button 
// //                   onClick={() => {
// //                     scrollToSection(accueilRef);
// //                     setIsMobileMenuOpen(false);
// //                   }} 
// //                   className="text-2xl font-semibold text-white hover:text-blue-300 transition-colors duration-300"
// //                 >
// //                   Accueil
// //                 </button>
// //                 <button 
// //                   onClick={() => {
// //                     scrollToSection(projetsRef);
// //                     setIsMobileMenuOpen(false);
// //                   }} 
// //                   className="text-2xl font-semibold text-white hover:text-blue-300 transition-colors duration-300"
// //                 >
// //                   Projets
// //                 </button>
// //                 <button 
// //                   onClick={() => {
// //                     scrollToSection(competencesRef);
// //                     setIsMobileMenuOpen(false);
// //                   }} 
// //                   className="text-2xl font-semibold text-white hover:text-blue-300 transition-colors duration-300"
// //                 >
// //                   Compétences
// //                 </button>
// //                 <button 
// //                   onClick={() => {
// //                     scrollToSection(experienceRef);
// //                     setIsMobileMenuOpen(false);
// //                   }} 
// //                   className="text-2xl font-semibold text-white hover:text-blue-300 transition-colors duration-300"
// //                 >
// //                   Expérience
// //                 </button>
// //                 <button 
// //                   onClick={() => {
// //                     scrollToSection(contactRef);
// //                     setIsMobileMenuOpen(false);
// //                   }} 
// //                   className="text-2xl font-semibold text-white hover:text-blue-300 transition-colors duration-300"
// //                 >
// //                   Contact
// //                 </button>
                
// //                 <button 
// //                   className="absolute top-6 right-6 text-white hover:text-blue-300 transition-colors duration-300"
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
// //       <section ref={accueilRef} className="pt-24 pb-12 px-6">
// //         <div className="container mx-auto text-center">
// //           <h1 className="text-5xl font-bold mb-6">
// //             Développeur Web Full Stack
// //           </h1>
// //           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
// //             Spécialisé en MERN Stack avec une expertise en développement d'applications web modernes et WordPress
// //           </p>
          
// //           <div className="flex justify-center space-x-6 mt-8">
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
// //       <section ref={projetsRef} className="py-12 px-6 bg-gray-800">
// //         <div className="container mx-auto">
// //           <h2 className="text-3xl font-bold mb-8 text-center">Mes Projets</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {projects.map((project, index) => (
// //               <div key={index} className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300">
// //                 <h3 className="text-xl font-bold mb-3">{project.name}</h3>
// //                 <p className="text-gray-300 mb-4">{project.description}</p>
// //                 <div className="flex flex-wrap gap-2 mb-4">
// //                   {project.tech.map((tech, techIndex) => (
// //                     <span key={techIndex} className="bg-blue-900 px-2 py-1 rounded-full text-sm">
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
// //       <section ref={competencesRef} className="py-12 px-6">
// //         <div className="container mx-auto">
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
// //       <section ref={experienceRef} className="py-12 px-6 bg-gray-800">
// //         <div className="container mx-auto">
// //           <h2 className="text-3xl font-bold mb-8 text-center">Expérience Professionnelle</h2>
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
// //       <section ref={contactRef} className="py-12 px-6">
// //         <div className="container mx-auto text-center">
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
// import { ExternalLink, Mail, Map, MessageSquare, Link, Menu, X } from 'lucide-react';

// const Portfolio = () => {
//   const accueilRef = useRef(null);
//   const projetsRef = useRef(null);
//   const competencesRef = useRef(null);
//   const experienceRef = useRef(null);
//   const contactRef = useRef(null);

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const projects = [
//     {
//       name: "Palabresak2",
//       url: "https://palabresak2.com/",
//       description: "Application web complète avec fonctionnalités avancées",
//       tech: ["WordPress", "SEO", "Multilingue"],
//       github: ""
//     },
//     {
//       name: "AD Frontière",
//       url: "https://adfrontiere.com",
//       description: "Site WordPress personnalisé",
//       tech: ["WordPress", "PHP", "MySQL"],
//       github: ""
//     },
//     {
//       name: "Étudier en Russie",
//       url: "https://etuderussie.ru",
//       description: "Plateforme d'information pour les étudiants",
//       tech: ["WordPress", "SEO", "Multilingue"],
//       github: ""
//     },
//     {
//       name: "AP Consult",
//       url: "https://apconsult-ekb.ru",
//       description: "Site web professionnel de consultation",
//       tech: ["Web Development", "UI/UX"],
//       github: ""
//     },
//     {
//       name: "Gestionnaire de Laboratoire Médical",
//       description: "Application de gestion complète pour laboratoires médicaux",
//       url:"https://bioramapp.onrender.com/",
//       tech: ["MERN Stack", "REST API", "Security"],
//       github: "https://github.com/misterbb38/LimsFrontend"
//     },
//     {
//       name: "Booking Mini-Stade",
//       description: "Système de réservation pour terrains de foot",
//       url:"https://bookingfrontend-luoi.onrender.com",
//       tech: ["MERN Stack", "Payment Integration"],
//       github: "https://github.com/misterbb38/BookingFrontend"
//     },
//     {
//       name: "Système de Facturation",
//       description: "Application de gestion de stock et facturation",
//       url:"https://apps.palabresak2.com",
//       tech: ["MERN Stack", "Data Analytics" ,"MERN Stack", "REST API", "Authentication", "AI Integration"],
//       github: "https://github.com/misterbb38/InvoiceFrontend--palabre--"
//     },
//     {
//       name: "Traduction Multi-Langue GenAI",
//       description: "Service de traduction utilisant l'IA générative",
//       url:"https://translate.palabresak2.com/",
//       tech: ["MERN Stack", "AI Integration", "NLP"],
//       github: "https://github.com/misterbb38/translateFrontend"
//     }
//   ];
//   const experiences = [
//     {
//       company: "Grouper Semos",
//       role: "Administrateur web et formateur",
//       description: "Gestion des systèmes web et formation technique"
//     },
//     {
//       company: "Ракета (Yandex)",
//       role: "Technicien",
//       description: "Support technique et maintenance systèmes"
//     },
//     {
//       company: "Ап-консалт (AP-Consult)",
//       role: "Webmaster",
//       description: "Développement et maintenance de sites web"
//     },
//     {
//       company: "Alliant",
//       role: "Web programmeur (backend)",
//       description: "Développement backend et API"
//     }
//   ];

//   const skills = [
//     "JavaScript", "Node.js", "Express.js", "MongoDB", 
//     "APIs RESTful", "Authentication", "Performance", 
//     "Tests", "WordPress", "React.js"
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
//       {/* Header/Navigation */}
//       <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             <h1 className="text-2xl font-bold">Amady Bar</h1>
            
//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-6">
//               <button onClick={() => scrollToSection(accueilRef)} className="hover:text-blue-300 transition-colors duration-300">
//                 Accueil
//               </button>
//               <button onClick={() => scrollToSection(projetsRef)} className="hover:text-blue-300 transition-colors duration-300">
//                 Projets
//               </button>
//               <button onClick={() => scrollToSection(competencesRef)} className="hover:text-blue-300 transition-colors duration-300">
//                 Compétences
//               </button>
//               <button onClick={() => scrollToSection(experienceRef)} className="hover:text-blue-300 transition-colors duration-300">
//                 Expérience
//               </button>
//               <button onClick={() => scrollToSection(contactRef)} className="hover:text-blue-300 transition-colors duration-300">
//                 Contact
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button 
//               className="md:hidden text-white hover:text-blue-300 transition-colors duration-300"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>

//             {/* Mobile Menu Overlay */}
//             <div className={`
//               fixed inset-0 bg-gray-800 z-50 md:hidden
//               transition-all duration-300 ease-in-out
//               ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
//             `}>
//               <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900/20 backdrop-blur-sm px-6">
//                 <div className="bg-gray-800/95 rounded-2xl p-8 w-full max-w-sm shadow-lg">
//                   <button 
//                     onClick={() => {
//                       scrollToSection(accueilRef);
//                       setIsMobileMenuOpen(false);
//                     }} 
//                     className="w-full text-xl font-medium text-white py-3 px-4 rounded-lg mb-3 hover:bg-blue-600/20 transition-colors duration-300 text-center"
//                   >
//                     Accueil
//                   </button>
//                   <button 
//                     onClick={() => {
//                       scrollToSection(projetsRef);
//                       setIsMobileMenuOpen(false);
//                     }} 
//                     className="w-full text-xl font-medium text-white py-3 px-4 rounded-lg mb-3 hover:bg-blue-600/20 transition-colors duration-300 text-center"
//                   >
//                     Projets
//                   </button>
//                   <button 
//                     onClick={() => {
//                       scrollToSection(competencesRef);
//                       setIsMobileMenuOpen(false);
//                     }} 
//                     className="w-full text-xl font-medium text-white py-3 px-4 rounded-lg mb-3 hover:bg-blue-600/20 transition-colors duration-300 text-center"
//                   >
//                     Compétences
//                   </button>
//                   <button 
//                     onClick={() => {
//                       scrollToSection(experienceRef);
//                       setIsMobileMenuOpen(false);
//                     }} 
//                     className="w-full text-xl font-medium text-white py-3 px-4 rounded-lg mb-3 hover:bg-blue-600/20 transition-colors duration-300 text-center"
//                   >
//                     Expérience
//                   </button>
//                   <button 
//                     onClick={() => {
//                       scrollToSection(contactRef);
//                       setIsMobileMenuOpen(false);
//                     }} 
//                     className="w-full text-xl font-medium text-white py-3 px-4 rounded-lg hover:bg-blue-600/20 transition-colors duration-300 text-center"
//                   >
//                     Contact
//                   </button>
//                 </div>
                
//                 <button 
//                   className="absolute top-6 right-6 text-white hover:text-blue-300 transition-colors duration-300 bg-gray-800/80 p-2 rounded-full"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   <X size={24} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section ref={accueilRef} className="pt-24 pb-12 px-6">
//         <div className="container mx-auto text-center">
//           <h1 className="text-5xl font-bold mb-6">
//             Développeur Web Full Stack
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Spécialisé en MERN Stack avec une expertise en développement d'applications web modernes et WordPress
//           </p>
          
//           <div className="flex justify-center space-x-6 mt-8">
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
//               <span>Sénégal/Russie</span>
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
//       <section ref={projetsRef} className="py-12 px-6 bg-gray-800">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold mb-8 text-center">Mes Projets</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project, index) => (
//               <div key={index} className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300">
//                 <h3 className="text-xl font-bold mb-3">{project.name}</h3>
//                 <p className="text-gray-300 mb-4">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, techIndex) => (
//                     <span key={techIndex} className="bg-blue-900 px-2 py-1 rounded-full text-sm">
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
//                       <Link size={16} />
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
//       <section ref={competencesRef} className="py-12 px-6">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold mb-8 text-center">Compétences</h2>
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
//       <section ref={experienceRef} className="py-12 px-6 bg-gray-800">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold mb-8 text-center">Expérience Professionnelle</h2>
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
//       <section ref={contactRef} className="py-12 px-6">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-8">Contact</h2>
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
//               <span>Sénégal/Russie</span>
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

// export default Portfolio;


import React, { useRef, useState } from 'react';
import {
  ExternalLink,
  Mail,
  Map,
  MessageSquare,
  Link,
  Menu,
  X
} from 'lucide-react';

const Portfolio = () => {
  const accueilRef = useRef(null);
  const projetsRef = useRef(null);
  const competencesRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      name: 'Palabresak2',
      url: 'https://palabresak2.com/',
      description: 'Application web complète avec fonctionnalités avancées',
      tech: ['WordPress', 'SEO', 'Multilingue'],
      github: ''
    },
    {
      name: 'AD Frontière',
      url: 'https://adfrontiere.com',
      description: 'Site WordPress personnalisé',
      tech: ['WordPress', 'PHP', 'MySQL'],
      github: ''
    },
    {
      name: 'Étudier en Russie',
      url: 'https://etuderussie.ru',
      description: "Plateforme d'information pour les étudiants",
      tech: ['WordPress', 'SEO', 'Multilingue'],
      github: ''
    },
    {
      name: 'AP Consult',
      url: 'https://apconsult-ekb.ru',
      description: 'Site web professionnel de consultation',
      tech: ['Web Development', 'UI/UX'],
      github: ''
    },
    {
      name: 'Gestionnaire de Laboratoire Médical',
      description: 'Application de gestion complète pour laboratoires médicaux',
      url: 'https://bioramapp.onrender.com/',
      tech: ['MERN Stack', 'REST API', 'Security'],
      github: 'https://github.com/misterbb38/LimsFrontend'
    },
    {
      name: 'Booking Mini-Stade',
      description: 'Système de réservation pour terrains de foot',
      url: 'https://bookingfrontend-luoi.onrender.com',
      tech: ['MERN Stack', 'Payment Integration'],
      github: 'https://github.com/misterbb38/BookingFrontend'
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
        'AI Integration'
      ],
      github: 'https://github.com/misterbb38/InvoiceFrontend--palabre--'
    },
    {
      name: 'Traduction Multi-Langue GenAI',
      description: "Service de traduction utilisant l'IA générative",
      url: 'https://translate.palabresak2.com/',
      tech: ['MERN Stack', 'AI Integration', 'NLP'],
      github: 'https://github.com/misterbb38/translateFrontend'
    }
  ];

  const experiences = [
    {
      company: 'Grouper Semos',
      role: 'Administrateur web et formateur',
      description: 'Gestion des systèmes web et formation technique'
    },
    {
      company: 'Ракета (Yandex)',
      role: 'Technicien',
      description: 'Support technique et maintenance systèmes'
    },
    {
      company: 'Ап-консалт (AP-Consult)',
      role: 'Webmaster',
      description: 'Développement et maintenance de sites web'
    },
    {
      company: 'Alliant',
      role: 'Web programmeur (backend)',
      description: 'Développement backend et API'
    }
  ];

  const skills = [
    'JavaScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'APIs RESTful',
    'Authentication',
    'Performance',
    'Tests',
    'WordPress',
    'React.js'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Amady Bar</h1>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection(accueilRef)}
                className="hover:text-blue-300 transition-colors duration-300"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection(projetsRef)}
                className="hover:text-blue-300 transition-colors duration-300"
              >
                Projets
              </button>
              <button
                onClick={() => scrollToSection(competencesRef)}
                className="hover:text-blue-300 transition-colors duration-300"
              >
                Compétences
              </button>
              <button
                onClick={() => scrollToSection(experienceRef)}
                className="hover:text-blue-300 transition-colors duration-300"
              >
                Expérience
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="hover:text-blue-300 transition-colors duration-300"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-blue-300 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            <div
              className={`fixed inset-0 bg-gray-800 z-50 md:hidden transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900/20 backdrop-blur-sm px-6">
                <div className="bg-gray-800/95 rounded-2xl p-8 w-full max-w-sm shadow-lg">
                  {[
                    { label: 'Accueil', ref: accueilRef },
                    { label: 'Projets', ref: projetsRef },
                    { label: 'Compétences', ref: competencesRef },
                    { label: 'Expérience', ref: experienceRef },
                    { label: 'Contact', ref: contactRef }
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
                </div>

                <button
                  className="absolute top-6 right-6 text-white hover:text-blue-300 transition-colors duration-300 bg-gray-800/80 p-2 rounded-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={accueilRef} className="pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Développeur Web Full Stack
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Spécialisé en MERN Stack avec une expertise en développement
            d'applications web modernes et WordPress
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
              <span>Sénégal/Russie</span>
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

      {/* Projects Section */}
      <section ref={projetsRef} className="py-12 px-4 sm:px-6 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Mes Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
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
                      <Link size={16} />
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

      {/* Skills Section */}
      <section ref={competencesRef} className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Compétences</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
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

      {/* Experience Section */}
      <section ref={experienceRef} className="py-12 px-4 sm:px-6 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Expérience Professionnelle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
                <h4 className="text-blue-400 mb-3">{exp.role}</h4>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
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
              <span>Sénégal/Russie</span>
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

export default Portfolio;
