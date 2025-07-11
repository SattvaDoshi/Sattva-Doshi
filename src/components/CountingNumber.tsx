
import React, { useState, useEffect, useRef } from 'react';

interface CountingNumberProps {
  targetNumber: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

const CountingNumber: React.FC<CountingNumberProps> = ({
  targetNumber,
  duration = 2000,
  suffix = '',
  className = ''
}) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startNumber = 0;

    const updateNumber = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startNumber + (targetNumber - startNumber) * easeOutCubic);
      
      setCurrentNumber(current);
      
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };

    requestAnimationFrame(updateNumber);
  }, [isVisible, targetNumber, duration]);

  return (
    <span ref={elementRef} className={className}>
      {currentNumber}{suffix}
    </span>
  );
};

export default CountingNumber;
