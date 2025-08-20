import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import CountingNumber from './CountingNumber';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: 'Priya Sharma',
      company: 'KiranaTech',
      text: 'DevStudio transformed our online presence. Their attention to detail and technical expertise is unmatched.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=1', // Placeholder image for a woman
    },
    {
      name: 'Arjun Verma',
      company: 'GullyBuy',
      text: 'Working with DevStudio was a game-changer. They delivered beyond our expectations and helped us scale.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=2', // Placeholder image for a man
    },
    {
      name: 'Sneha Reddy',
      company: 'ChaiCo',
      text: 'Professional, creative, and reliable. DevStudio is our go-to development partner for all our digital needs.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=3', // Placeholder image for a woman
    },
    {
      name: 'Rohan Mehta',
      company: 'BharatAgri',
      text: 'Exceptional quality and seamless communication throughout the entire project lifecycle. Highly recommended!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=4', // Placeholder image for a man
    },
    {
      name: 'Anjali Desai',
      company: 'Apna Dukaan',
      text: 'Outstanding results that exceeded our ROI expectations. They are a team of true professionals.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=5', // Placeholder image for a woman
    },
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
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