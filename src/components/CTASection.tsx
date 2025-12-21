
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center items-center">
        <div className="glass-card glass-card-hover p-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and bring your vision to life
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link to="/contact" className="btn-glow inline-flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 rounded-lg border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300 inline-flex items-center"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
