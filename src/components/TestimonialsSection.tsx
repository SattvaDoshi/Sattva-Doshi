import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import CountingNumber from './CountingNumber';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: 'Kunal Mystery',
      company: 'BOM - Brotherhood of Mumbai',
      text: 'The ride booking platform they built for us has completely changed how we manage our club events. Real-time monitoring, group bookings, and the admin controls are absolutely top-notch.',
      rating: 5,
      image: 'https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image for a man
    },
    {
      name: 'Neha Kapoor',
      company: 'UrbanCart E-Commerce',
      text: 'Their team delivered a scalable, fast, and beautifully optimized e-commerce web app for our brand. Our conversions went up significantly thanks to their clean UX and performance-focused design.',
      rating: 5,
      image: 'https://plus.unsplash.com/premium_photo-1682096111256-e020381ec730?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image for a woman
    },
    {
      name: 'Vikram Saini',
      company: 'DataSight Analytics',
      text: 'The analytics dashboard they developed helped us visualize complex KPIs with ease. From live metrics to detailed reports, the solution exceeded our expectations.',
      rating: 5,
      image: 'https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image for a man
    }

  ];

  const stats = [
    { number: 50, suffix: '+', label: 'Projects Completed' },
    { number: 100, suffix: '%', label: 'Client Satisfaction' },
    { number: 3, suffix: '+', label: 'Years Experience' },
    { number: 24, suffix: '/7', label: 'Support Available' }
  ];

  const intervalRef = useRef(null);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(goToNext, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, goToNext]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section (Unchanged) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                <CountingNumber
                  targetNumber={stat.number}
                  suffix={stat.suffix}
                  duration={2000}
                />
              </div>
              <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What My <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take my word for it - hear from my satisfied clients
          </p>
        </div>

        {/* --- TESTIMONIALS CAROUSEL WITH PHOTOS --- */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full glass-card glass-card-hover text-neon-cyan hover:text-white transition-colors duration-300 -translate-x-1/2"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full glass-card glass-card-hover text-neon-cyan hover:text-white transition-colors duration-300 translate-x-1/2"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden">
            {/* Sliding Container */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="glass-card glass-card-hover p-8 h-full flex flex-col items-center text-center">
                    {/* --- ADDED IMAGE --- */}
                    <img
                      src={testimonial.image}
                      alt={`Photo of ${testimonial.name}`}
                      className="w-24 h-24 rounded-full mb-4 border-2 border-neon-cyan/50 shadow-lg"
                    />
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-neon-cyan fill-current animate-pulse"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 text-lg">"{testimonial.text}"</p>
                    <div className="mt-auto">
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-neon-cyan scale-125'
                    : 'bg-gray-600 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;