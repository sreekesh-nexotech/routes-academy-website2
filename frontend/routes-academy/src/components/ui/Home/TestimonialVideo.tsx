"use client";

import { useState, useEffect, useRef } from "react";

const TestimonialVideo: React.FC = () => {
  const [zoomScale, setZoomScale] = useState(0.5); // Start with 50% scale
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

      // Calculate how much of the component is visible
      // When top of section is at bottom of viewport: progress = 0
      // When bottom of section is at top of viewport: progress = 1
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - sectionTop) / (sectionHeight + windowHeight),
        ),
      );

      // Scale from 0.5 (50%) to 1.0 (100%) based on scroll progress
      // Multiply by 2 to make it expand 2x faster, then clamp to max 1.0
      const acceleratedProgress = Math.min(1, scrollProgress * 2);
      const newScale = 0.5 + acceleratedProgress * 0.5;
      setZoomScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-screen min-h-[60vh] bg-white flex flex-col items-center justify-start gap-4 sm:gap-6 md:gap-8 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Heading */}
      <h2 className="w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[70vw] px-4 sm:px-6 md:px-8 text-center font-semibold text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-blue-950">
        Reset, Restart, Rebuild.
      </h2>

      {/* Video area */}
      <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] flex items-center justify-center mt-4 sm:mt-8 md:mt-12 lg:mt-3 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
        <div
          className="relative mt-4 sm:mt-6 md:mt-8 lg:mt-10 w-[90vw] sm:w-[84vw] md:w-[80vw] lg:w-[70vw] h-[35vh] sm:h-[50vh] md:h-[60vh] lg:h-[67vh] transition-transform duration-500 ease-out origin-center"
          style={{ transform: `scale(${zoomScale})` }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl object-cover"
          >
            <source
              src="https://routesacademy.b-cdn.net/video/Route%20Students%20Review%20(website).mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      {/* <div className="rounded-lg sm:rounded-xl md:rounded-2xl border-0" style={{ transform: `scaleX(${zoomScale})` }}>
            <video controls width="250" poster="https://routesacademy.b-cdn.net/video/video-thump.png" className="w-full max-h-[500px]">
            <source src="https://routesacademy.b-cdn.net/video/VIDEO%20ROUTE%20DATE%2018%3B10%3B25.mp4" type="video/mp4" />
          </video>
          </div> */}
    </section>
  );
};

export default TestimonialVideo;
