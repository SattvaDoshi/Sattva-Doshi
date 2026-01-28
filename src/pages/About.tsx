import React, { useState, useEffect, useRef } from 'react';
import { CheckIcon, Star, Users, Code, Monitor, Briefcase, Award, Coffee, Heart, Zap, ExternalLink, Database, Cloud, Server, Cpu, Box, Globe, Palette, Layers, GitBranch, Terminal, Flame, Brain, Sparkles, BarChart3, Settings, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Custom hook for scroll-triggered animations
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
    technologies: 0
  });

  // Scroll animation refs
  const techSection = useScrollAnimation(0.2);
  const statsSection = useScrollAnimation(0.2);
  const projectsSection = useScrollAnimation(0.1);
  const ctaSection = useScrollAnimation(0.2);

  useEffect(() => {
    setIsVisible(true);

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animated counters
    const animateCounters = () => {
      const targets = { projects: 15, experience: 2.5, clients: 12, technologies: 20 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounters({
          projects: Math.floor(targets.projects * progress),
          experience: Math.floor(targets.experience * progress * 10) / 10,
          clients: Math.floor(targets.clients * progress),
          technologies: Math.floor(targets.technologies * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(targets);
        }
      }, stepTime);
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      id: 10,
      title: 'Ride Booking & Management System',
      category: 'web',
      image: './projects/riding-web.png',
      description: 'A complete ride booking and event management platform built for the Brotherhood of Mumbai (BOM) riding club.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Razorpay'],
      liveUrl: 'https://brotherhoodofmumbai.com/'
    },
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: './projects/e-commerce-web.png',
      description: 'A modern e-commerce platform built with React and Node.js, featuring secure payments.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://style-hub-gilt.vercel.app/',
    },
    {
      id: 5,
      title: 'AI-Powered Content Generator',
      category: 'ai',
      image: './projects/ai-content.png',
      description: 'Generate blog posts, product descriptions, and social media captions using AI.',
      technologies: ['React', 'OpenAI API', 'Node.js', 'Tailwind'],
      liveUrl: 'https://auto-content-silk.vercel.app/',
    },
    {
      id: 6,
      title: 'Quick Commerce App',
      category: 'mobile',
      image: './projects/quick-commerce-app.png',
      description: 'Fast delivery mobile app for groceries and essentials with live tracking.',
      technologies: ['React Native', 'Firebase', 'Google Maps API'],
      liveUrl: '#',
    },
  ];

  const techStack = {
    frontend: [
      { name: 'React / Next.js', Icon: Globe, color: 'text-neon-cyan' },
      { name: 'TypeScript', Icon: Code, color: 'text-blue-400' },
      { name: 'Tailwind CSS', Icon: Palette, color: 'text-cyan-400' },
      { name: 'Framer Motion', Icon: Layers, color: 'text-orange-400' },
      { name: 'Vue.js', Icon: Zap, color: 'text-green-500' },
      { name: 'Redux / Zustand', Icon: Workflow, color: 'text-purple-400' },
    ],
    backend: [
      { name: 'Node.js', Icon: Server, color: 'text-green-500' },
      { name: 'Python', Icon: Terminal, color: 'text-yellow-400' },
      { name: 'PostgreSQL', Icon: Database, color: 'text-blue-500' },
      { name: 'MongoDB', Icon: Database, color: 'text-green-400' },
      { name: 'Express.js', Icon: Zap, color: 'text-gray-300' },
      { name: 'GraphQL', Icon: GitBranch, color: 'text-pink-400' },
    ],
    cloud: [
      { name: 'AWS', Icon: Cloud, color: 'text-orange-500' },
      { name: 'Docker', Icon: Box, color: 'text-blue-400' },
      { name: 'Vercel', Icon: Globe, color: 'text-white' },
      { name: 'Redis', Icon: Flame, color: 'text-red-500' },
      { name: 'Firebase', Icon: Flame, color: 'text-yellow-500' },
      { name: 'Kubernetes', Icon: Settings, color: 'text-blue-300' },
    ],
    ai: [
      { name: 'OpenAI API', Icon: Sparkles, color: 'text-emerald-400' },
      { name: 'TensorFlow', Icon: Cpu, color: 'text-orange-400' },
      { name: 'Pinecone', Icon: Database, color: 'text-green-300' },
      { name: 'LangChain', Icon: Workflow, color: 'text-indigo-400' },
      { name: 'Hugging Face', Icon: Brain, color: 'text-yellow-300' },
      { name: 'PyTorch', Icon: BarChart3, color: 'text-red-400' },
    ],
  };

  const services = [
    {
      title: 'Web Dev',
      description: 'Scalable SaaS architectures built for peak performance and global availability using modern frameworks.',
      icon: 'code',
      tags: ['NEXT.JS', 'NODE', 'TYPESCRIPT'],
      color: 'neon-cyan'
    },
    {
      title: 'App Dev',
      description: 'Cross-platform mobile solutions designed to provide a native-feel experience on both iOS and Android.',
      icon: 'devices',
      tags: ['REACT NATIVE', 'FLUTTER'],
      color: 'neon-blue'
    },
    {
      title: 'UI/UX',
      description: 'Conversion-focused interface design backed by behavioral research and user-centric psychology.',
      icon: 'draw',
      tags: ['FIGMA', 'PROTOTYPING'],
      color: 'neon-cyan'
    },
    {
      title: 'Data Analysis',
      description: 'Turning raw metrics into actionable business intelligence through custom dashboards and modeling.',
      icon: 'analytics',
      tags: ['PYTHON', 'SQL'],
      color: 'neon-blue'
    },
  ];

  const stats = [
    { number: counters.projects, label: 'Projects Completed', icon: Briefcase },
    { number: `${counters.experience}+`, label: 'Years Experience', icon: Award },
    { number: counters.clients, label: 'Happy Clients', icon: Heart },
    { number: `${counters.technologies}+`, label: 'Technologies', icon: Code },
  ];

  const techFilters = [
    { key: 'all', label: 'All Tech' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'cloud', label: 'Cloud' },
    { key: 'ai', label: 'AI & Data' },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />

      {/* Animated Background Elements with Parallax */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse transition-transform duration-300"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        ></div>
        <div 
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-pulse delay-1000 transition-transform duration-300"
          style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-neon-purple/5 rounded-full blur-3xl animate-pulse delay-500 transition-transform duration-300"
          style={{ transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * -0.4}px)` }}
        ></div>
      </div>

      <main className="min-h-screen pt-24">
        {/* Hero Split Layout */}
        <section className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side: Content */}
          <div className={`flex flex-col justify-center gap-6 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div>
              <h2 className={`text-neon-cyan text-sm font-bold tracking-[0.2em] uppercase mb-4 transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>The Professional Story</h2>
              <h3 className={`text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6 text-white transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                Building the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue animate-gradient-x">
                  Intelligence
                </span>{' '}
                Layer of the Web.
              </h3>
              <p className={`text-gray-400 text-lg leading-relaxed max-w-xl transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                I specialize in the intersection of scalable web architecture and production-grade AI implementation. My mission is to blend professional technical credibility with high-impact digital experiences that feel like the future.
              </p>
            </div>
            <div className={`flex flex-wrap gap-3 mt-4 transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:bg-white/10 hover:border-neon-cyan/30 transition-all duration-300 cursor-default">LLM Orchestration</span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:bg-white/10 hover:border-neon-cyan/30 transition-all duration-300 cursor-default">Full-Stack Architecture</span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:bg-white/10 hover:border-neon-cyan/30 transition-all duration-300 cursor-default">Edge Computing</span>
              <Link to="/contact" className="px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg rounded-full text-sm font-bold hover:scale-105 hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300">Contact Me</Link>
            </div>
          </div>

          {/* Right Side: Visual */}
          {/* Right Side: Photo */}
          <div className={`relative group transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100 translate-x-0' : 'scale-95 opacity-0 translate-x-10'}`}>
            <div 
              className="absolute -inset-2 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000"
              style={{ transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)` }}
            ></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark-bg group-hover:border-neon-cyan/30 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent z-10"></div>
              <img
                className="w-full h-auto max-h-[600px] object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                src="photo.png"
                alt="Sattva Doshi - Full Stack Developer"
              />
              <div className={`absolute bottom-6 left-6 right-6 z-20 transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="inline-flex items-center gap-2 bg-neon-cyan/20 backdrop-blur-md px-4 py-2 rounded-full border border-neon-cyan/30 text-xs font-bold text-neon-cyan mb-3 hover:bg-neon-cyan/30 transition-colors duration-300">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></span>
                  AVAILABLE FOR WORK
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold leading-none tracking-tighter text-white">Sattva Doshi</h1>
                <p className="text-gray-400 mt-2">AI Solutions Architect & Web Dev</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Arsenal Section */}
        <div 
          ref={techSection.ref}
          className={`mt-24 mb-20 max-w-7xl mx-auto px-6 transition-all duration-1000 ${
            techSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          <div className="flex items-end justify-between pb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] text-white">
                Technical Arsenal
              </h2>
              <div className={`h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mt-2 rounded-full transition-all duration-1000 delay-300 ${
                techSection.isVisible ? 'w-20' : 'w-0'
              }`}></div>
            </div>
            <p className="hidden md:block text-gray-500 text-sm font-medium">Expertise across the modern stack</p>
          </div>

          {/* Tabs for Categories */}
          <div className="mb-8">
            <div className="flex border-b border-neon-cyan/10 gap-8 overflow-x-auto">
              {techFilters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setSelectedFilter(filter.key)}
                  className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-4 whitespace-nowrap transition-colors ${
                    selectedFilter === filter.key
                      ? 'border-neon-cyan text-neon-cyan'
                      : 'border-transparent text-gray-500 hover:text-neon-cyan'
                  }`}
                >
                  <span className="text-sm font-bold leading-normal tracking-wide">{filter.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tech Grid - Show all categories in 2x2 grid when "all" is selected */}
          {selectedFilter === 'all' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend */}
              <div className={`space-y-4 transition-all duration-700 delay-100 ${
                techSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <h3 className="text-neon-cyan text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                  <Code className="w-4 h-4" /> Frontend
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {techStack.frontend.map((tech, index) => (
                    <div 
                      key={index} 
                      className={`glass-card glass-card-hover p-4 rounded-xl flex items-center gap-3 cursor-default group transition-all duration-500 hover:scale-105 hover:-translate-y-1 ${
                        techSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${200 + index * 50}ms` }}
                    >
                      <div className={`w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center ${tech.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <tech.Icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-sm text-white">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className={`space-y-4 transition-all duration-700 delay-200 ${
                techSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <h3 className="text-neon-cyan text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                  <Server className="w-4 h-4" /> Backend
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {techStack.backend.map((tech, index) => (
                    <div 
                      key={index} 
                      className={`glass-card glass-card-hover p-4 rounded-xl flex items-center gap-3 cursor-default group transition-all duration-500 hover:scale-105 hover:-translate-y-1 ${
                        techSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${300 + index * 50}ms` }}
                    >
                      <div className={`w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center ${tech.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <tech.Icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-sm text-white">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className={`space-y-4 transition-all duration-700 delay-300 ${
                techSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <h3 className="text-neon-cyan text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                  <Cloud className="w-4 h-4" /> Cloud & DevOps
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {techStack.cloud.map((tech, index) => (
                    <div 
                      key={index} 
                      className={`glass-card glass-card-hover p-4 rounded-xl flex items-center gap-3 cursor-default group transition-all duration-500 hover:scale-105 hover:-translate-y-1 ${
                        techSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${400 + index * 50}ms` }}
                    >
                      <div className={`w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center ${tech.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <tech.Icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-sm text-white">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI & Data */}
              <div className={`space-y-4 transition-all duration-700 delay-[400ms] ${
                techSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <h3 className="text-neon-cyan text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                  <Brain className="w-4 h-4" /> AI & Data
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {techStack.ai.map((tech, index) => (
                    <div 
                      key={index} 
                      className={`glass-card glass-card-hover p-4 rounded-xl flex items-center gap-3 cursor-default group transition-all duration-500 hover:scale-105 hover:-translate-y-1 ${
                        techSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${500 + index * 50}ms` }}
                    >
                      <div className={`w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center ${tech.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <tech.Icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-sm text-white">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Single category view - full width grid */
            <div className="space-y-6">
              {selectedFilter === 'frontend' && (
                <>
                  <h3 className="text-neon-cyan text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                    <Code className="w-4 h-4" /> Frontend Technologies
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {techStack.frontend.map((tech, index) => (
                      <div key={index} className="glass-card glass-card-hover p-5 rounded-xl flex flex-col items-center gap-3 cursor-default group text-center">
                        <div className={`w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center ${tech.color} group-hover:scale-110 transition-transform`}>
                          <tech.Icon className="w-7 h-7" />
                        </div>
                        <span className="font-bold text-sm text-white">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {selectedFilter === 'backend' && (
                <>
                  <h3 className="text-neon-cyan text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                    <Server className="w-4 h-4" /> Backend Technologies
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {techStack.backend.map((tech, index) => (
                      <div key={index} className="glass-card glass-card-hover p-5 rounded-xl flex flex-col items-center gap-3 cursor-default group text-center">
                        <div className={`w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center ${tech.color} group-hover:scale-110 transition-transform`}>
                          <tech.Icon className="w-7 h-7" />
                        </div>
                        <span className="font-bold text-sm text-white">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {selectedFilter === 'cloud' && (
                <>
                  <h3 className="text-neon-cyan text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                    <Cloud className="w-4 h-4" /> Cloud & DevOps Technologies
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {techStack.cloud.map((tech, index) => (
                      <div key={index} className="glass-card glass-card-hover p-5 rounded-xl flex flex-col items-center gap-3 cursor-default group text-center">
                        <div className={`w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center ${tech.color} group-hover:scale-110 transition-transform`}>
                          <tech.Icon className="w-7 h-7" />
                        </div>
                        <span className="font-bold text-sm text-white">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {selectedFilter === 'ai' && (
                <>
                  <h3 className="text-neon-cyan text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                    <Brain className="w-4 h-4" /> AI & Data Technologies
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {techStack.ai.map((tech, index) => (
                      <div key={index} className="glass-card glass-card-hover p-5 rounded-xl flex flex-col items-center gap-3 cursor-default group text-center">
                        <div className={`w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center ${tech.color} group-hover:scale-110 transition-transform`}>
                          <tech.Icon className="w-7 h-7" />
                        </div>
                        <span className="font-bold text-sm text-white">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Stats Section */}
        <section 
          ref={statsSection.ref}
          className="py-16 px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`glass-card glass-card-hover p-6 md:p-8 text-center group transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
                    statsSection.isVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-16 opacity-0 rotate-3'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue mb-4 group-hover:animate-bounce group-hover:shadow-lg group-hover:shadow-neon-cyan/30 transition-shadow">
                    <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-dark-bg" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tabular-nums">{stat.number}</h3>
                  <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects - Bento Grid */}
        <section 
          ref={projectsSection.ref}
          className="max-w-7xl mx-auto px-6 py-20"
        >
          <div className={`flex items-center justify-between mb-10 transition-all duration-700 ${
            projectsSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex items-center gap-4">
              <Briefcase className={`w-8 h-8 text-neon-cyan transition-transform duration-700 ${
                projectsSection.isVisible ? 'rotate-0 scale-100' : '-rotate-12 scale-75'
              }`} />
              <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            </div>
            <Link
              to="/projects"
              className="text-sm font-bold text-white/50 hover:text-neon-cyan transition-colors flex items-center gap-1 uppercase tracking-widest group"
            >
              View All <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Bento Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Card 1: Large Featured - Ride Booking */}
            <div className={`md:col-span-4 glass-card rounded-2xl overflow-hidden group border border-white/10 flex flex-col transition-all duration-700 hover:border-neon-cyan/30 hover:shadow-xl hover:shadow-neon-cyan/10 ${
              projectsSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '100ms' }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                  src="./projects/riding-web.png"
                  alt="Ride Booking & Management System"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white">React</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white">Node.js</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white">MongoDB</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white">Razorpay</span>
                </div>
              </div>
              <div className="p-8 flex flex-col grow">
                <h3 className="text-2xl font-bold mb-3 text-white">Ride Booking & Management System</h3>
                <p className="text-white/60 mb-6 max-w-xl">
                  A full-fledged ride booking platform for BOM riding club with admin dashboard, real-time monitoring, group ticketing, and automated discount system. Reduced manual coordination by 70%.
                </p>
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex -space-x-3">
                    <div className="w-8 h-8 rounded-full border border-dark-bg bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">R</div>
                    <div className="w-8 h-8 rounded-full border border-dark-bg bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white">N</div>
                    <div className="w-8 h-8 rounded-full border border-dark-bg bg-slate-600 flex items-center justify-center text-[10px] font-bold text-white">M</div>
                  </div>
                  <a
                    href="https://brotherhoodofmumbai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-dark-bg rounded-lg text-sm font-bold hover:bg-neon-cyan transition-all"
                  >
                    View Live <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Medium Secondary - E-Commerce */}
            <div className={`md:col-span-2 glass-card rounded-2xl overflow-hidden group border border-white/10 flex flex-col transition-all duration-700 hover:border-neon-cyan/30 hover:shadow-xl hover:shadow-neon-cyan/10 ${
              projectsSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-50"
                  src="./projects/e-commerce-web.png"
                  alt="E-Commerce Platform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold mb-2 text-white">E-Commerce Platform</h3>
                <p className="text-white/50 text-sm mb-4">Modern e-commerce with secure payments & inventory management.</p>
                <div className="flex gap-1.5 flex-wrap mb-6">
                  <span className="text-[9px] text-white/40 border border-white/10 px-2 py-0.5 rounded uppercase font-bold tracking-tighter">React</span>
                  <span className="text-[9px] text-white/40 border border-white/10 px-2 py-0.5 rounded uppercase font-bold tracking-tighter">Stripe</span>
                  <span className="text-[9px] text-white/40 border border-white/10 px-2 py-0.5 rounded uppercase font-bold tracking-tighter">Node</span>
                </div>
                <a
                  href="https://style-hub-gilt.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full py-2.5 rounded-lg border border-white/10 text-sm font-bold hover:bg-white hover:text-dark-bg transition-all text-center text-white"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Card 3: Small Info - Healthcare Dashboard */}
            <div className={`md:col-span-3 glass-card rounded-2xl p-6 border border-white/10 bg-gradient-to-tr from-neon-cyan/20 via-transparent to-transparent transition-all duration-700 hover:border-neon-cyan/30 hover:shadow-xl hover:shadow-neon-cyan/10 hover:-translate-y-1 ${
              projectsSection.isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Healthcare Dashboard</h3>
                  <p className="text-xs text-white/40">Data Analytics & Management</p>
                </div>
              </div>
              <p className="text-sm text-white/60 mb-6">
                Comprehensive healthcare management system with patient tracking, appointment scheduling, and real-time analytics. HIPAA compliant with 35% efficiency improvement.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Code className="w-5 h-5 text-white/30" />
                  <Monitor className="w-5 h-5 text-white/30" />
                </div>
                <Zap className="w-5 h-5 text-neon-cyan/60" />
              </div>
            </div>

            {/* Card 4: Medium Secondary - AI Content Generator */}
            <div className={`md:col-span-3 glass-card rounded-2xl overflow-hidden group border border-white/10 flex flex-col transition-all duration-700 hover:border-neon-cyan/30 hover:shadow-xl hover:shadow-neon-cyan/10 hover:-translate-y-1 ${
              projectsSection.isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-40"
                  src="./projects/ai-content.png"
                  alt="AI-Powered Content Generator"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-neon-cyan text-dark-bg text-[10px] font-bold px-2 py-1 rounded">
                  AI POWERED
                </div>
              </div>
              <div className="px-6 pb-6 -mt-4 relative z-10 flex flex-col grow">
                <h3 className="text-xl font-bold mb-2 text-white">AI Content Generator</h3>
                <p className="text-white/50 text-sm mb-4">Generate blog posts, product descriptions using GPT. Reduced content writing time by 80%.</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="text-xs font-mono text-neon-cyan">#AI_AUTOMATION</div>
                  <a
                    href="https://auto-content-silk.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 text-white/40 hover:text-neon-cyan transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          ref={ctaSection.ref}
          className="py-20 px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="max-w-5xl mx-auto text-center">
            <div className={`glass-card glass-card-hover p-8 md:p-16 relative overflow-hidden transform transition-all duration-1000 hover:shadow-2xl hover:shadow-neon-cyan/20 ${
              ctaSection.isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-blue/10 to-neon-purple/10 opacity-50"></div>
              
              {/* Animated decorative elements */}
              <div className={`absolute top-4 right-4 w-20 h-20 border border-neon-cyan/20 rounded-full transition-all duration-1000 delay-300 ${
                ctaSection.isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}></div>
              <div className={`absolute bottom-4 left-4 w-16 h-16 border border-neon-blue/20 rounded-full transition-all duration-1000 delay-500 ${
                ctaSection.isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}></div>

              <h2 className={`text-3xl md:text-5xl font-bold text-white mb-6 relative z-10 transition-all duration-700 delay-200 ${
                ctaSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                Ready to Work{' '}
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple">
                  Together?
                </span>
              </h2>
              <p className={`text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto relative z-10 transition-all duration-700 delay-300 ${
                ctaSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                Let's discuss how I can help bring your vision to life with cutting-edge web solutions
              </p>

              <div className={`flex flex-col sm:flex-row gap-6 justify-center relative z-10 transition-all duration-700 delay-500 ${
                ctaSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <Link
                  to="/contact"
                  className="btn-glow inline-flex items-center justify-center px-8 py-4 text-lg font-medium transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                >
                  Get In Touch
                  <Heart className="ml-2 h-5 w-5 animate-pulse" />
                </Link>
                <Link
                  to="/projects"
                  className="px-8 py-4 text-lg rounded-xl border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:-translate-y-1"
                >
                  View My Work
                  <Briefcase className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
