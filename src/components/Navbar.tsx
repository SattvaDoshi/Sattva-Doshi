
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass-card rounded-full px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg flex items-center justify-center text-white">
            <Terminal className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Sattva Doshi</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-neon-cyan'
                  : 'text-gray-300 hover:text-neon-cyan'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-neon-cyan to-neon-blue hover:opacity-90 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 mx-6">
          <div className="glass-card rounded-3xl p-6 animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-neon-cyan'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-neon-cyan to-neon-blue hover:opacity-90 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
