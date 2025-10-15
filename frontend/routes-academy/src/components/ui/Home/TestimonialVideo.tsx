"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const TestimonialVideo: React.FC = () => {
  const [zoomScale, setZoomScale] = useState(1); // Start with normal scale (1)
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the component
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Calculate how much of the component has been scrolled past
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / sectionHeight));
      const scrollPercentage = scrollProgress * 100;
      
      // Start zooming when 40% of component is visible, complete at 100%
      if (scrollPercentage >= 40) {
        const zoomProgress = Math.min(1, (scrollPercentage - 40) / 60); // 60% range (40% to 100%)
        // Calculate scale factor to reach 80vw from current width
        const currentWidthVw = window.innerWidth <= 640 ? 90 : 
                             window.innerWidth <= 768 ? 84 : 
                             window.innerWidth <= 1024 ? 80 : 70;
        const targetWidthVw = 80;
        const scaleFactor = targetWidthVw / currentWidthVw;
        const newScale = 1 + (zoomProgress * (scaleFactor - 1));
        setZoomScale(newScale);
      } else {
        setZoomScale(1); // Reset to normal scale
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-screen min-h-[60vh] bg-white flex flex-col items-center justify-start gap-4 sm:gap-6 md:gap-8 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Heading */}
      <h2 className="w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[70vw] px-4 sm:px-6 md:px-8 text-center font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-blue-950">
        A small glimpse of what our students say about us
      </h2>

      {/* Video area */}
      <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] flex items-center justify-center mt-4 sm:mt-8 md:mt-12 lg:mt-16 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
        {/* Small image with scroll-based zoom animation */}
        <div 
          className="relative mt-4 sm:mt-6 md:mt-8 lg:mt-10 w-[90vw] sm:w-[84vw] md:w-[80vw] lg:w-[70vw] h-[35vh] sm:h-[50vh] md:h-[60vh] lg:h-[67vh] transition-transform duration-500 ease-out origin-center"
          style={{ transform: `scaleX(${zoomScale})` }}
        >
          <Image
            src="/videoSmall.png"
            alt="Video thumbnail"
            fill
            className="rounded-lg sm:rounded-xl md:rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideo;