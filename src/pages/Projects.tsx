import React, { useState } from 'react';
import { Link, ArrowRight, Github, Monitor, Calendar, Users, Clock, ExternalLink, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
    description: 'A modern e-commerce platform built with React and Node.js, featuring secure payments and inventory management.',
    overview: 'Modern e-commerce platform with React, Node.js, and Stripe integration. Features include real-time inventory management, advanced search filters, and seamless checkout experience.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'AWS'],
    keyFeatures: [
      'Real-time inventory management',
      'Secure payment processing',
      'Mobile-responsive design',
      'Advanced search and filtering',
      'Admin dashboard',
      'SEO optimization'
    ],
    challenges: 'Implementing real-time inventory updates across multiple warehouses while maintaining data consistency.',
    results: '40% increase in conversion rate and 60% reduction in cart abandonment.',
    duration: '3 months',
    teamSize: '4 developers',
    completed: 'March 2024',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Restaurant Website',
    category: 'web',
    image: './projects/hotel-web.png',
    description: 'Beautiful restaurant website with online ordering system and table reservations.',
    overview: 'Responsive restaurant website with digital menu, online ordering system, and table booking feature built with HTML, CSS, JS, and PHP.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    keyFeatures: [
      'Table reservation system',
      'Responsive mobile-first UI',
      'Online food ordering',
      'Menu CMS for owners',
      'Customer reviews'
    ],
    challenges: 'Creating a smooth UX across devices while integrating real-time reservations.',
    results: '25% increase in table bookings and 3x user engagement.',
    duration: '1.5 months',
    teamSize: '2 developers',
    completed: 'January 2024',
    liveUrl: 'https://hotel-cyan-psi.vercel.app/',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'web',
    image: './projects/portfolio-web.png',
    description: 'A personal portfolio for a freelance web developer showcasing work, skills, and contact details.',
    overview: 'Sleek portfolio site with modern dark/light toggle, project filtering, contact form, and smooth animations.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    keyFeatures: [
      'Project showcase with filters',
      'Contact form with email integration',
      'Responsive design',
      'Light/dark mode',
      'Smooth transitions'
    ],
    challenges: 'Designing unique but minimal UI that loads fast and works well across browsers.',
    results: 'Received 3 freelance leads within a week of launch.',
    duration: '2 weeks',
    teamSize: '1 developer',
    completed: 'February 2024',
    liveUrl: 'https://fast-acknowledgment-673683.framer.app/',
  },
  {
    id: 4,
    title: 'Automated Email Sender',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1587614203976-365c74645e83?w=600',
    description: 'A web tool to schedule and send bulk personalized emails automatically.',
    overview: 'Built with Node.js and SendGrid API to allow scheduled and batch email campaigns with analytics dashboard.',
    technologies: ['Node.js', 'Express', 'SendGrid', 'MongoDB'],
    keyFeatures: [
      'Bulk and scheduled email sending',
      'Email templates',
      'Delivery status tracking',
      'Analytics dashboard',
      'CSV import/export'
    ],
    challenges: 'Avoiding spam filters and ensuring high deliverability.',
    results: 'Used to send over 10,000 emails/month with 99% delivery rate.',
    duration: '1 month',
    teamSize: '2 developers',
    completed: 'May 2024',
    liveUrl: '#',
  },
  {
    id: 5,
    title: 'AI-Powered Content Generator',
    category: 'web',
    image: './projects/ai-content.png',
    description: 'Generate blog posts, product descriptions, and social media captions using AI.',
    overview: 'Frontend built with React, backed by OpenAI API for generating marketing and SEO content in real time.',
    technologies: ['React', 'OpenAI API', 'Node.js', 'Tailwind'],
    keyFeatures: [
      'Topic-based content generation',
      'Tone and length control',
      'Content editing interface',
      'Export options (PDF/Copy)',
      'API-based integration'
    ],
    challenges: 'Balancing speed and creativity of the AI output for marketing-grade quality.',
    results: 'Reduced content writing time by 80% for beta testers.',
    duration: '1.5 months',
    teamSize: '3 developers',
    completed: 'June 2024',
    liveUrl: 'https://auto-content-silk.vercel.app/',
  },
  {
    id: 6,
    title: 'Quick Commerce App',
    category: 'mobile',
    image: './projects/quick-commerce-app.png',
    description: 'Fast delivery mobile app for groceries and essentials with live tracking.',
    overview: 'React Native app offering sub-30 minute delivery for groceries with real-time order tracking and driver assignment.',
    technologies: ['React Native', 'Firebase', 'Google Maps API'],
    keyFeatures: [
      'Real-time tracking',
      'Live chat with delivery agent',
      'Multi-store support',
      'Coupon & loyalty system',
      'Wallet and payment gateway integration'
    ],
    challenges: 'Implementing real-time delivery flow with minimal delay.',
    results: 'Avg delivery time 28 minutes; increased user retention by 45%.',
    duration: '3 months',
    teamSize: '4 developers',
    completed: 'March 2024',
    liveUrl: '#',
  },
  {
    id: 7,
    title: 'Personal Finance Manager',
    category: 'mobile',
    image: './projects/finance-app.jpg',
    description: 'Track expenses, manage budgets, and visualize savings via mobile app.',
    overview: 'Cross-platform Flutter app that tracks income, expenses, generates charts, and offers budgeting advice.',
    technologies: ['Flutter', 'Firebase', 'SQLite'],
    keyFeatures: [
      'Expense categorization',
      'Spending alerts',
      'Monthly budget planner',
      'Financial goal tracking',
      'Dark mode and local storage'
    ],
    challenges: 'Ensuring data security while storing offline and syncing online.',
    results: 'Helped users reduce monthly expenses by 15% on average.',
    duration: '2 months',
    teamSize: '2 developers',
    completed: 'May 2024',
    liveUrl: '#',
  },
  {
    id: 8,
    title: 'Instagram Post UI Kit',
    category: 'design',
    image: './projects/insta-uiux.jpg',
    description: 'Modern, minimal UI kit for creating branded Instagram posts for restaurants.',
    overview: 'Figma-based editable post templates with color variants, text overlays, and food highlight zones.',
    technologies: ['Figma', 'Illustrator'],
    keyFeatures: [
      '30+ editable post templates',
      'Typography hierarchy',
      'Layered PSD/FIG files',
      'Mobile-first design',
      'Includes Stories & Highlights covers'
    ],
    challenges: 'Creating visual templates that align with brand identity yet remain flexible.',
    results: 'Used by 50+ small restaurants to boost social media engagement.',
    duration: '3 weeks',
    teamSize: '1 designer',
    completed: 'April 2024',
    liveUrl: '#',
  },
  {
    id: 9,
    title: 'Healthcare Dashboard',
    category: 'analytics',
    image: './projects/health-dashboard.jpg',
    description: 'A comprehensive healthcare management system with patient tracking and appointment scheduling.',
    overview: 'Comprehensive healthcare management system with patient tracking, appointment scheduling, and real-time analytics for medical professionals.',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Chart.js', 'Docker'],
    keyFeatures: [
      'Patient record management',
      'Appointment scheduling',
      'Real-time analytics',
      'HIPAA compliant',
      'Multi-role access control',
      'Mobile app integration'
    ],
    challenges: 'Ensuring HIPAA compliance while maintaining seamless user experience and real-time data synchronization.',
    results: '35% improvement in patient scheduling efficiency and 50% reduction in administrative overhead.',
    duration: '4 months',
    teamSize: '3 developers',
    completed: 'April 2024',
    liveUrl: '#',
  },
];


  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'design', label: 'UI/UX Design' },
    { key: 'analytics', label: 'Data Analytics' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(project => project.category === selectedFilter);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
   <div className="min-h-screen">
  <Navbar />

  {/* Hero Section */}
  <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
        My <span className="text-gradient">Projects</span>
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
        Discover my latest work and see how I've helped businesses transform their digital presence.
      </p>
    </div>
  </section>

  {/* Filter Section */}
  <section className="pb-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setSelectedFilter(filter.key)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedFilter === filter.key
                ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg'
                : 'glass-card glass-card-hover text-gray-300'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="glass-card glass-card-hover group cursor-pointer animate-scale-up"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => openModal(project)}
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white font-medium">View Details</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Enhanced Project Modal */}
  {selectedProject && (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-scale-up">
      <div className="glass-card max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-dark-bg/80 text-white hover:bg-dark-bg transition-colors duration-300 text-xl"
          >
            <X />
          </button>

          {/* Header with image and basic info */}
          <div className="relative">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 md:h-80 object-cover rounded-t-lg"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-neon-cyan text-dark-bg rounded-full text-sm font-medium">
                {selectedProject.category}
              </span>
              <span className="ml-2 px-3 py-1 bg-dark-bg/80 text-white rounded-full text-sm">
                {selectedProject.completed}
              </span>
            </div>
          </div>

          <div className="p-8 grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Project Overview</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{selectedProject.overview}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProject.keyFeatures?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Challenges & Solutions</h3>
                <p className="text-gray-300 leading-relaxed">{selectedProject.challenges}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Results</h3>
                <p className="text-neon-cyan font-medium text-lg">{selectedProject.results}</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Project Details</h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-neon-cyan" />
                    <div>
                      <p className="text-gray-400 text-sm">Duration</p>
                      <p className="text-white font-medium">{selectedProject.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-neon-cyan" />
                    <div>
                      <p className="text-gray-400 text-sm">Team Size</p>
                      <p className="text-white font-medium">{selectedProject.teamSize}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-neon-cyan" />
                    <div>
                      <p className="text-gray-400 text-sm">Completed</p>
                      <p className="text-white font-medium">{selectedProject.completed}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 text-neon-cyan border border-neon-cyan/30 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Conditionally render live project link for web projects */}
              {selectedProject.category === 'web' && selectedProject.liveUrl && (
                <div className="space-y-3">
                  <a
                    href={selectedProject.liveUrl}
                    className="w-full btn-glow flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Live Project
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )}

  {/* CTA Section */}
  <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <div className="glass-card glass-card-hover p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Have a Project <span className="text-gradient">in Mind?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Let's discuss how I can bring your vision to life
        </p>
        <button className="btn-glow inline-flex items-center">
          <a href="/contact">Start Your Project</a>
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  </section>

  <Footer />
</div>

  );
};

export default Projects;
