
import React from 'react';
import { CheckIcon, Star, Users, Code, Monitor, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';

const About = () => {
  const skills = [
    { name: 'React & Next.js', level: 95 },
    { name: 'Node.js & Express', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'MongoDB & PostgreSQL', level: 85 },
    { name: 'AWS & Cloud Services', level: 80 },
    { name: 'Git & DevOps', level: 87 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'API Development', level: 92 },
  ];

  const values = [
    {
      icon: Star,
      title: 'Quality First',
      description: 'I deliver clean, scalable code that stands the test of time.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is my priority. I work closely with you throughout the project.',
    },
    {
      icon: Code,
      title: 'Modern Tech',
      description: 'I use the latest technologies to build fast, responsive applications.',
    },
    {
      icon: CheckIcon,
      title: 'On-Time Delivery',
      description: 'I respect deadlines and deliver projects when promised.',
    },
  ];

  const achievements = [
    '10+ Projects Completed',
    '100% Client Satisfaction',
    '2.5 Years Experience',
    'B.Tech in IT',
    'Full Stack Expertise',
    'Available 24/7',
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            About <span className="text-gradient">Sattva Doshi</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            A passionate Full Stack Developer creating exceptional web solutions that drive business growth and deliver outstanding user experiences.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                My <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Hi, I'm Sattva Doshi, a B.Tech graduate in Information Technology with 2.5 years of hands-on experience in full stack web development. I specialize in creating modern, scalable web applications using cutting-edge technologies.
              </p>
              <p className="text-gray-300 mb-8 text-lg">
                My passion lies in transforming ideas into digital reality. I believe in writing clean, maintainable code and creating user-centric solutions that not only look great but also solve real business problems. Every project is an opportunity to exceed expectations.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckIcon className="h-5 w-5 text-neon-cyan mr-3 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-scale-up">
              <img
                src="Photo.jpg"
                alt="Sattva Doshi - Full Stack Developer"
                className="rounded-2xl glass-card w-full h-[80vh] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My <span className="text-gradient">Approach</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide my work and client relationships
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover p-8 text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue mb-6 group-hover:animate-float">
                  <value.icon className="h-8 w-8 text-dark-bg" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technologies I use to build exceptional web solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover p-6 text-center group animate-scale-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">{skill.name}</h3>
                <ProgressBar 
                  targetPercentage={skill.level}
                  duration={2500}
                  delay={0}
                  className="mt-2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card glass-card-hover p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work <span className="text-gradient">Together?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how I can help bring your vision to life with cutting-edge web solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-glow inline-flex items-center">
                Get In Touch
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 rounded-lg border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300 inline-flex items-center"
              >
                View My Work
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
