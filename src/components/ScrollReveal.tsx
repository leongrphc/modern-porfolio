import { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
}

export const ScrollReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 600
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const getTransform = (visible: boolean) => {
      if (visible) return 'translate3d(0, 0, 0)';
      
      switch (direction) {
        case 'up':
          return `translate3d(0, ${distance}px, 0)`;
        case 'down':
          return `translate3d(0, -${distance}px, 0)`;
        case 'left':
          return `translate3d(${distance}px, 0, 0)`;
        case 'right':
          return `translate3d(-${distance}px, 0, 0)`;
        default:
          return `translate3d(0, ${distance}px, 0)`;
      }
    };

    element.style.transition = `all ${duration}ms cubic-bezier(0.165, 0.84, 0.44, 1)`;
    element.style.transitionDelay = `${delay}ms`;
    element.style.transform = getTransform(isVisible);
    element.style.opacity = isVisible ? '1' : '0';
  }, [isVisible, direction, distance, duration, delay]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};