"use client";

import { useState } from "react";
import Image from "next/image";

const TestimonialVideo: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-screen min-h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] bg-white flex flex-col items-center justify-start gap-4 sm:gap-6 md:gap-8 py-8 sm:py-10 md:py-12">
      {/* Heading */}
      <h2 className="w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[70vw] px-4 sm:px-6 md:px-8 text-center font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-blue-950">
        A small glimpse of what our students say about us
      </h2>

      {/* Video area */}
      <div
        className="relative w-full h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] flex items-center justify-center mt-4 sm:mt-8 md:mt-12 lg:mt-16 mb-8 sm:mb-12 md:mb-16 lg:mb-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Small image (default) */}
        <div className="absolute left-[5vw] sm:left-[8vw] md:left-[10vw] mt-4 sm:mt-6 md:mt-8 lg:mt-10 w-[90vw] sm:w-[84vw] md:w-[80vw] lg:w-[70vw] h-[35vh] sm:h-[50vh] md:h-[60vh] lg:h-[67vh]">
          <Image
            src="/videoSmall.png"
            alt="Video thumbnail"
            fill
            className={`rounded-lg sm:rounded-xl md:rounded-2xl object-cover transition-opacity duration-700 ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
        </div>

        {/* Large image (on hover) */}
        <div className="absolute left-1/2 top-[50%] sm:top-[55%] md:top-[60%] w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] h-[40vh] sm:h-[48vh] md:h-[55vh] lg:h-[57vh] -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/videoBig.png"
            alt="Video big thumbnail"
            fill
            className={`rounded-lg sm:rounded-xl md:rounded-2xl object-cover transition-all duration-700 ${
              hovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideo;