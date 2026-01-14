
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Facebook, Instagram, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/Sattva_Doshi', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/__sattva__10/', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/SattvaDoshi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sattva-doshi-37b0851bb/', label: 'LinkedIn' },
  ];

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Custom Website Development', href: '/contact' },
        { name: 'Landing Page Development', href: '/contact' },
        { name: 'Ecommerce Website Development', href: '/contact' },
        { name: 'Website Redesign & Maintenance', href: '/contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Expertise', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Case Studies', href: '/projects' },
        { name: 'Documentation', href: '#' },
        { name: 'Support', href: '#' },
      ],
    },
  ];

  return (
    <footer className="glass-card mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue">
                <Code className="h-6 w-6 text-dark-bg" />
              </div>
              <span className="text-xl font-bold text-gradient">Sattva Doshi</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Freelance Full Stack Web Developer in Mumbai, India. Specializing in React.js, Next.js, Node.js development. Building responsive, SEO-friendly websites for startups and businesses worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target='_blank'
                  className="p-3 rounded-lg glass-card glass-card-hover transition-all duration-300 hover:text-neon-cyan"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-neon-cyan transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Sattva Doshi | Freelance Web Developer in Mumbai, India. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-neon-cyan text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-neon-cyan text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
