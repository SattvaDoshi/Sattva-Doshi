
import React from 'react';
import { Code, Monitor, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Website Development',
      description: 'Professional website design and development using React.js, Next.js, Node.js & TypeScript. Responsive, SEO-friendly websites for startups and businesses.',
    },
    {
      icon: Monitor,
      title: 'UI/UX Design & Landing Pages',
      description: 'Beautiful, mobile-friendly landing page development with optimized UI/UX design. Conversion-focused designs that drive results.',
    },
    {
      icon: Users,
      title: 'Full Stack Development',
      description: 'End-to-end web application development including API integration, database setup, hosting & deployment for ecommerce and SaaS startups.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Freelance web development services — from custom website development to SEO optimization, website maintenance, and performance improvements.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-8 text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue mb-6 group-hover:animate-float">
                <service.icon className="h-8 w-8 text-dark-bg" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
