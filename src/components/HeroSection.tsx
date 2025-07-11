
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TypingEffect from './TypingEffect';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const typingTexts = [
    'Digital Solutions',
    'Web Applications', 
    'User Experiences',
    'Modern Interfaces'
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">I Create</span>
              <br />
              <span className="text-gradient">
                <TypingEffect 
                  texts={typingTexts} 
                  typingSpeed={80}
                  deletingSpeed={40}
                  delayBetweenTexts={1500}
                />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Freelance developer specializing in modern web applications and user experiences that bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link to="/projects" className="btn-glow inline-flex items-center">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300 inline-flex items-center"
              >
                Let's Talk
              </Link>
            </div>
          </div>

          {/* Right side - Interactive SVG */}
          <div className="flex justify-center lg:justify-end">
            <div 
              className="relative w-full max-w-lg cursor-pointer"
              onMouseMove={handleMouseMove}
            >
              <svg
                width="500"
                height="500"
                viewBox="0 0 500 500"
                className="w-full h-auto"
              >
                {/* Background grid */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 245, 255, 0.1)" strokeWidth="1"/>
                  </pattern>
                  <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f5ff" />
                    <stop offset="50%" stopColor="#0080ff" />
                    <stop offset="100%" stopColor="#00f5ff" />
                  </linearGradient>
                  <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#0080ff" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Animated background grid */}
                <rect width="500" height="500" fill="url(#grid)" opacity="0.3" />

                {/* Interactive floating elements that follow mouse */}
                <g 
                  className="transition-transform duration-300 ease-out"
                  style={{
                    transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 15}px)`
                  }}
                >
                  {/* Code brackets */}
                  <text x="100" y="150" fill="url(#codeGradient)" fontSize="48" fontFamily="monospace" filter="url(#glow)" className="animate-pulse">
                    {'<'}
                  </text>
                  <text x="400" y="150" fill="url(#codeGradient)" fontSize="48" fontFamily="monospace" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: '0.5s' }}>
                    {'>'}
                  </text>
                </g>

                {/* Central interactive code symbol */}
                <g className="hover:animate-bounce">
                  <circle
                    cx="250"
                    cy="250"
                    r="60"
                    fill="url(#centerGlow)"
                    className="animate-pulse"
                  />
                  <text 
                    x="250" 
                    y="265" 
                    fill="#00f5ff" 
                    fontSize="36" 
                    fontFamily="monospace" 
                    textAnchor="middle"
                    filter="url(#glow)"
                    className="cursor-pointer hover:fill-white transition-colors"
                  >
                    {'</>'}
                  </text>
                </g>

                {/* Orbiting code elements */}
                <g
                  className="animate-spin"
                  style={{ 
                    transformOrigin: '250px 250px',
                    animationDuration: '20s'
                  }}
                >
                  <circle cx="350" cy="250" r="8" fill="#00f5ff" filter="url(#glow)" />
                  <text x="345" y="280" fill="#00f5ff" fontSize="14" fontFamily="monospace">JS</text>
                </g>

                <g
                  className="animate-spin"
                  style={{ 
                    transformOrigin: '250px 250px',
                    animationDuration: '25s',
                    animationDirection: 'reverse'
                  }}
                >
                  <circle cx="150" cy="250" r="6" fill="#0080ff" filter="url(#glow)" />
                  <text x="140" y="280" fill="#0080ff" fontSize="14" fontFamily="monospace">CSS</text>
                </g>

                <g
                  className="animate-spin"
                  style={{ 
                    transformOrigin: '250px 250px',
                    animationDuration: '30s'
                  }}
                >
                  <circle cx="250" cy="150" r="7" fill="#00f5ff" filter="url(#glow)" />
                  <text x="235" y="135" fill="#00f5ff" fontSize="14" fontFamily="monospace">React</text>
                </g>

                <g
                  className="animate-spin"
                  style={{ 
                    transformOrigin: '250px 250px',
                    animationDuration: '18s',
                    animationDirection: 'reverse'
                  }}
                >
                  <circle cx="250" cy="350" r="5" fill="#0080ff" filter="url(#glow)" />
                  <text x="240" y="375" fill="#0080ff" fontSize="14" fontFamily="monospace">TS</text>
                </g>

                {/* Interactive floating symbols */}
                <g 
                  className="animate-float cursor-pointer hover:scale-110 transition-transform"
                  style={{ 
                    animationDelay: '1s',
                    transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -8}px)`
                  }}
                >
                  <text x="180" y="180" fill="#00f5ff" fontSize="24" fontFamily="monospace" filter="url(#glow)">{'{}'}</text>
                </g>

                <g 
                  className="animate-float cursor-pointer hover:scale-110 transition-transform"
                  style={{ 
                    animationDelay: '2s',
                    transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * -12}px)`
                  }}
                >
                  <text x="320" y="320" fill="#0080ff" fontSize="20" fontFamily="monospace" filter="url(#glow)">[]</text>
                </g>

                <g 
                  className="animate-float cursor-pointer hover:scale-110 transition-transform"
                  style={{ 
                    animationDelay: '1.5s',
                    transform: `translate(${mousePosition.x * -6}px, ${mousePosition.y * 10}px)`
                  }}
                >
                  <text x="320" y="180" fill="#00f5ff" fontSize="18" fontFamily="monospace" filter="url(#glow)">()</text>
                </g>

                {/* Connecting lines that react to mouse */}
                <g opacity="0.3">
                  <line 
                    x1="250" y1="250" 
                    x2={250 + mousePosition.x * 50} 
                    y2={250 + mousePosition.y * 50} 
                    stroke="url(#codeGradient)" 
                    strokeWidth="2" 
                    className="animate-pulse"
                  />
                  <line 
                    x1="250" y1="250" 
                    x2={250 - mousePosition.x * 50} 
                    y2={250 - mousePosition.y * 50} 
                    stroke="url(#codeGradient)" 
                    strokeWidth="2" 
                    className="animate-pulse" 
                    style={{ animationDelay: '0.5s' }}
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
