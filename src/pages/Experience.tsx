import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Brain, Terminal, Code, Award, CheckCircle, Sparkles, Users, TrendingUp, Globe, Zap, Heart } from 'lucide-react';
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

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll animation refs
  const experienceSection = useScrollAnimation(0.1);
  const freelanceSection = useScrollAnimation(0.1);
  const ctaSection = useScrollAnimation(0.2);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const professionalExperience = [
    {
      title: 'Software Developer',
      company: 'AVD Inovex',
      location: 'Borivali, Mumbai (Hybrid)',
      period: 'Sep 2025 - Present',
      description: 'Building custom full-stack applications for diverse clients using MERN stack and Next.js, translating business requirements into scalable technical solutions. Leveraging Nest.js architecture to develop robust backend services with improved code maintainability and implementing AWS infrastructure for reliable cloud deployment.',
      icon: Briefcase,
      isActive: true,
    },
    {
      title: 'Full Stack Developer',
      company: 'Criton Technology',
      location: 'Andheri, Mumbai',
      period: 'Oct 2024 - Jan 2025',
      description: 'Developed multi-tenant application using Node.js and Express on AWS, implementing security measures and achieving 99.5% uptime. Created responsive React interfaces with cross-device compatibility and optimized API performance, reducing response times by 30% through database query optimization and caching.',
      icon: Terminal,
      isActive: false,
    },
    {
      title: 'Frontend Developer',
      company: 'Trading Guru',
      location: 'Mumbai, Maharashtra',
      period: 'Dec 2023 - Jan 2024',
      description: 'Built mobile-responsive website using Bootstrap, improving user experience and reducing bounce rate by 30% while increasing subscription conversions by 30% through data-driven design improvements.',
      icon: Code,
      isActive: false,
    },
  ];

  const freelanceProjects = [
    {
      client: 'Brotherhood of Mumbai',
      project: 'Ride Booking Platform',
      period: '2024',
      description: 'Built a complete ride booking and event management system with real-time monitoring, group ticketing, and Razorpay integration. Reduced manual coordination by 70%.',
      impact: '70% efficiency boost',
      tech: ['React', 'Node.js', 'MongoDB', 'Razorpay'],
    },
    {
      client: 'Fashion Retail Startup',
      project: 'E-Commerce Platform',
      period: '2023',
      description: 'Developed a modern e-commerce platform with secure payments, inventory management, and analytics dashboard.',
      impact: '45% increase in sales',
      tech: ['React', 'Stripe', 'PostgreSQL', 'Tailwind'],
    },
    {
      client: 'Content Agency',
      project: 'AI Content Generator',
      period: '2023',
      description: 'Created an AI-powered content generation tool using OpenAI API for blog posts, product descriptions, and social media captions.',
      impact: '80% time saved',
      tech: ['Next.js', 'OpenAI API', 'Prisma', 'Vercel'],
    },
    {
      client: 'Healthcare Provider',
      project: 'Patient Management Dashboard',
      period: '2022',
      description: 'Built a HIPAA-compliant healthcare dashboard with patient tracking, appointment scheduling, and real-time analytics.',
      impact: '35% efficiency gain',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    },
  ];

  const coreExpertise = [
    'NEXT.JS', 'PYTHON', 'OPENAI API', 'POSTGRESQL', 'TAILWIND CSS', 'STRIPE', 'REACT', 'NODE.JS', 'MONGODB', 'TYPESCRIPT'
  ];

  const achievements = [
    { text: '50+ Projects delivered successfully', icon: CheckCircle },
    { text: '40% Increase in client revenue on average', icon: TrendingUp },
    { text: 'AWS Certified Developer', icon: Award },
    { text: '15+ Happy international clients', icon: Users },
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
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className={`flex flex-col gap-4 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 w-fit transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
              <span className="text-neon-cyan text-xs font-bold uppercase tracking-widest">Available for projects</span>
            </div>
            <h1 className={`text-5xl md:text-7xl font-black leading-tight tracking-tighter max-w-3xl text-white transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue animate-gradient-x">Journey</span> & Impact
            </h1>
            <p className={`text-white/60 text-lg md:text-xl max-w-2xl font-normal leading-relaxed transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Full-stack Developer & AI Specialist crafting high-converting SaaS and E-commerce solutions with a focus on scalable architecture.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section 
          ref={experienceSection.ref}
          className="max-w-7xl mx-auto px-6 mb-24"
        >
          <div className={`flex items-center gap-4 mb-10 transition-all duration-700 ${experienceSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-neon-cyan" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Experience</h2>
              <div className={`h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mt-1 rounded-full transition-all duration-1000 delay-300 ${experienceSection.isVisible ? 'w-24' : 'w-0'}`}></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
            {/* Timeline */}
            <div className="space-y-0">
              {professionalExperience.map((exp, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-[40px_1fr] gap-x-6 group transition-all duration-700 ${experienceSection.isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full glass-card flex items-center justify-center z-10 group-hover:scale-110 transition-all duration-300 ${exp.isActive ? 'border-neon-cyan/50 shadow-lg shadow-neon-cyan/20' : 'border-white/10'}`}>
                      <exp.icon className={`w-5 h-5 ${exp.isActive ? 'text-neon-cyan' : 'text-white/40'}`} />
                    </div>
                    {index < professionalExperience.length - 1 && (
                      <div className={`w-[2px] h-full -mt-2 bg-gradient-to-b ${exp.isActive ? 'from-neon-cyan to-neon-cyan/20' : 'from-white/20 to-white/5'}`}></div>
                    )}
                  </div>
                  <div className="pb-12 pt-1">
                    <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">{exp.title}</h3>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-white/50 text-xs font-mono border border-white/10">{exp.period}</span>
                    </div>
                    <p className={`font-medium mb-3 ${exp.isActive ? 'text-neon-cyan' : 'text-neon-cyan/50'}`}>{exp.company} • {exp.location}</p>
                    <p className="text-white/60 leading-relaxed max-w-2xl">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Side Bento */}
            <div className={`space-y-6 transition-all duration-700 delay-500 ${experienceSection.isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <div className="glass-card glass-card-hover p-6 rounded-xl border border-white/10">
                <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                  <Code className="w-5 h-5 text-neon-cyan" />
                  Core Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {coreExpertise.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 text-xs text-neon-cyan font-bold hover:bg-neon-cyan/20 hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card glass-card-hover p-6 rounded-xl border border-white/10 bg-gradient-to-br from-neon-cyan/10 to-transparent">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-5 h-5 text-neon-cyan" />
                  <h4 className="text-lg font-bold text-white">Achievements</h4>
                </div>
                <ul className="space-y-3 text-sm text-white/70">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex gap-3 items-start group">
                      <achievement.icon className="w-4 h-4 text-neon-cyan mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-white/90 transition-colors">{achievement.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-6 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-neon-cyan" />
                  <h4 className="text-lg font-bold text-white">Work Style</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Timezone</span>
                    <span className="text-white font-medium">IST (UTC+5:30)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Response Time</span>
                    <span className="text-neon-cyan font-medium">{'<'} 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Availability</span>
                    <span className="text-green-400 font-medium">Open to work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Freelance Projects Section */}
        <section 
          ref={freelanceSection.ref}
          className="max-w-7xl mx-auto px-6 mb-24"
        >
          <div className={`flex items-center gap-4 mb-10 transition-all duration-700 ${freelanceSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-neon-cyan" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Freelance Highlights</h2>
              <div className={`h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mt-1 rounded-full transition-all duration-1000 delay-300 ${freelanceSection.isVisible ? 'w-32' : 'w-0'}`}></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {freelanceProjects.map((project, index) => (
              <div 
                key={index}
                className={`glass-card glass-card-hover p-6 rounded-2xl border border-white/10 group transition-all duration-700 hover:border-neon-cyan/30 hover:shadow-xl hover:shadow-neon-cyan/10 hover:-translate-y-1 ${freelanceSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-neon-cyan text-sm font-medium mb-1">{project.client}</p>
                    <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">{project.project}</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-white/50 text-xs font-mono border border-white/10">{project.period}</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[10px] text-white/40 border border-white/10 px-2 py-0.5 rounded uppercase font-bold tracking-tighter">{tech}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="w-4 h-4 text-neon-cyan" />
                    <span className="text-neon-cyan font-medium">{project.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section 
          ref={ctaSection.ref}
          className="py-20 px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="max-w-5xl mx-auto text-center">
            <div className={`glass-card glass-card-hover p-8 md:p-16 relative overflow-hidden transform transition-all duration-1000 hover:shadow-2xl hover:shadow-neon-cyan/20 ${ctaSection.isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-blue/10 to-neon-purple/10 opacity-50"></div>
              
              {/* Animated decorative elements */}
              <div className={`absolute top-4 right-4 w-20 h-20 border border-neon-cyan/20 rounded-full transition-all duration-1000 delay-300 ${ctaSection.isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
              <div className={`absolute bottom-4 left-4 w-16 h-16 border border-neon-blue/20 rounded-full transition-all duration-1000 delay-500 ${ctaSection.isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>

              <h2 className={`text-3xl md:text-5xl font-bold text-white mb-6 relative z-10 transition-all duration-700 delay-200 ${ctaSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Let's Build Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                  Amazing
                </span>
              </h2>
              <p className={`text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto relative z-10 transition-all duration-700 delay-300 ${ctaSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Looking for a developer who can turn your vision into a scalable, high-performance reality?
              </p>

              <div className={`flex flex-col sm:flex-row gap-6 justify-center relative z-10 transition-all duration-700 delay-500 ${ctaSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <Link
                  to="/contact"
                  className="btn-glow inline-flex items-center justify-center px-8 py-4 text-lg font-medium transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                >
                  Start a Project
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

export default Experience;