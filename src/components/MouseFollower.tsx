import { useEffect, useState } from 'react';

export const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Check if device supports hover (not mobile)
    const hasHover = window.matchMedia('(hover: hover)').matches;
    
    if (hasHover) {
      document.addEventListener('mousemove', updateMousePosition);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Don't render on mobile devices
  const hasHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;
  
  if (!hasHover || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed top-0 left-0 w-4 h-4 bg-primary/30 rounded-full pointer-events-none z-[9999] transition-all duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`,
        }}
      />
      
      {/* Trail cursor */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-primary/20 rounded-full pointer-events-none z-[9998] transition-all duration-200 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
        }}
      />
    </>
  );
};