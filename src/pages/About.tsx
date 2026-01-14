import React, { useState, useEffect } from 'react';
import { CheckIcon, Star, Users, Code, Monitor, Briefcase, Award, Coffee, Heart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
    technologies: 0
  });

  useEffect(() => {
    setIsVisible(true);

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
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: 'React & Next.js', level: 95, icon: '⚛️' },
    { name: 'Node.js & Express', level: 90, icon: '🟢' },
    { name: 'TypeScript', level: 88, icon: '📘' },
    { name: 'MongoDB & PostgreSQL', level: 85, icon: '🗄️' },
    { name: 'AWS & Cloud Services', level: 80, icon: '☁️' },
    { name: 'Git & DevOps', level: 87, icon: '🔧' },
    { name: 'UI/UX Design', level: 75, icon: '🎨' },
    { name: 'API Development', level: 92, icon: '🔌' },
  ];

  const values = [
    {
      icon: Star,
      title: 'Quality First',
      description: 'I deliver clean, scalable code that stands the test of time.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is my priority. I work closely with you throughout the project.',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Code,
      title: 'Modern Tech',
      description: 'I use the latest technologies to build fast, responsive applications.',
      color: 'from-green-400 to-cyan-500'
    },
    {
      icon: CheckIcon,
      title: 'On-Time Delivery',
      description: 'I respect deadlines and deliver projects when promised.',
      color: 'from-pink-400 to-red-500'
    },
  ];

  const achievements = [
    '15+ Projects Completed',
    '100% Client Satisfaction',
    '2.5 Years Experience',
    'B.Tech in IT',
    'Full Stack Expertise',
    'Available 24/7',
  ];

  const stats = [
    { number: counters.projects, label: 'Projects Completed', icon: Briefcase },
    { number: `${counters.experience}+`, label: 'Years Experience', icon: Award },
    { number: counters.clients, label: 'Happy Clients', icon: Heart },
    { number: `${counters.technologies}+`, label: 'Technologies', icon: Code },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-neon-cyan/3 to-neon-blue/3 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
              About{' '}
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple animate-gradient-x">
                Sattva Doshi
              </span>
            </h1>
            <div className="relative inline-block">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A passionate Freelance Full Stack Web Developer based in Mumbai, Maharashtra, India. I specialize in React.js, Next.js, Node.js development and create responsive, SEO-friendly websites for startups, small businesses, and agencies worldwide. Available for remote web development projects.
              </p>
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 rounded-lg blur opacity-25 animate-pulse"></div>
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-10 left-10 animate-float">
            <Coffee className="h-8 w-8 text-neon-cyan/60" />
          </div>
          <div className="absolute top-20 right-10 animate-float delay-1000">
            <Zap className="h-6 w-6 text-neon-blue/60" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`glass-card glass-card-hover p-6 md:p-8 text-center group transform transition-all duration-700 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue mb-4 group-hover:animate-bounce">
                  <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-dark-bg" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tabular-nums">{stat.number}</h3>
                <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                My{' '}
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-blue">
                  Journey
                </span>
              </h2>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Hi, I'm Sattva Doshi, a B.Tech graduate in Information Technology with 2.5 years of hands-on experience in full stack web development. I specialize in creating modern, scalable web applications using cutting-edge technologies.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My passion lies in transforming ideas into digital reality. I believe in writing clean, maintainable code and creating user-centric solutions that not only look great but also solve real business problems. Every project is an opportunity to exceed expectations.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-white mb-6">Key Achievements</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-center text-gray-300 p-3 rounded-lg glass-card transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                        }`}
                      style={{ transitionDelay: `${index * 100 + 500}ms` }}
                    >
                      <CheckIcon className="h-5 w-5 text-neon-cyan mr-3 flex-shrink-0" />
                      <span className="text-sm md:text-base">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl ">
                  <img
                    src="photo.png"
                    alt="Sattva Doshi - Full Stack Developer"
                    className="w-full h-[50vh] md:h-[65vh] lg:h-[85vh] object-contain object-center transform transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-2xl "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              My{' '}
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple">
                Approach
              </span>
            </h2>
            <p className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              The principles that guide my work and client relationships
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`glass-card glass-card-hover p-6 md:p-8 text-center group relative overflow-hidden transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r ${value.color} mb-6 group-hover:animate-bounce transform transition-transform duration-300`}>
                  <value.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Technical{' '}
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                Expertise
              </span>
            </h2>
            <p className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Technologies I use to build exceptional web solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`glass-card glass-card-hover p-6 md:p-8 text-center group relative overflow-hidden transform transition-all duration-700 hover:scale-105 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-4 group-hover:text-neon-cyan transition-colors duration-300">
                  {skill.name}
                </h3>
                <ProgressBar
                  targetPercentage={skill.level}
                  duration={2500}
                  delay={index * 100}
                  className="mt-4"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className={`glass-card glass-card-hover p-8 md:p-16 relative overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-blue/10 to-neon-purple/10 opacity-50"></div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Ready to Work{' '}
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple">
                Together?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto relative z-10">
              Let's discuss how I can help bring your vision to life with cutting-edge web solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Link
                to="/contact"
                className="btn-glow inline-flex items-center justify-center px-8 py-4 text-lg font-medium transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
                <Heart className="ml-2 h-5 w-5 animate-pulse" />
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 text-lg rounded-xl border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
              >
                View My Work
                <Briefcase className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
