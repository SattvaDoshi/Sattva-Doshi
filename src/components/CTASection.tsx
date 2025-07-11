
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card glass-card-hover p-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and bring your vision to life
          </p>
          <Link to="/contact" className="btn-glow inline-flex items-center">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
