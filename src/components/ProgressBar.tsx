import React, { useState, useEffect, useRef } from 'react';

interface ProgressBarProps {
  targetPercentage: number;
  duration?: number;
  className?: string;
  delay?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  targetPercentage,
  duration = 2000,
  className = '',
  delay = 0
}) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, delay]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startPercentage = 0;

    const updatePercentage = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startPercentage + (targetPercentage - startPercentage) * easeOutCubic);
      
      setCurrentPercentage(current);
      
      if (progress < 1) {
        requestAnimationFrame(updatePercentage);
      }
    };

    requestAnimationFrame(updatePercentage);
  }, [isVisible, targetPercentage, duration]);

  return (
    <div ref={elementRef} className={`w-full ${className}`}>
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-neon-cyan to-neon-blue h-2 rounded-full shadow-sm shadow-neon-cyan/50"
          style={{ 
            width: `${currentPercentage}%`,
            transition: 'width 0.05s ease-out'
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;