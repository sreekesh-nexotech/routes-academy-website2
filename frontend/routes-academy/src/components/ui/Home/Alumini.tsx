"use client";

import React from "react";
import Image from "next/image";

const Alumni: React.FC = () => {
  return (
    <section className="w-screen bg-white py-8 flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-[1.2rem] md:text-[2rem] font-normal text-gray-800 mb-8">
        Our Students & Alumni Worked In
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-4 md:gap-6 lg:gap-8 items-center w-max">
          {/* Original images */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="h-[12vh] w-[600vw] md:h-[18vh] md:w-[400vw] lg:h-[25vh] lg:w-[350vw] min-w-[200px] md:min-w-[300px] lg:min-w-[400px] flex items-center justify-center shrink-0"
            >
              <Image
                src="/companyLogo.png"
                alt="Company Logo"
                width={600}
                height={240}
                className="object-contain w-full h-full"
                priority={i < 4}
                quality={100}
                unoptimized
              />
            </div>
          ))}


          {/* Duplicate for seamless infinite scroll */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`dup-${i}`}
              className="h-[12vh] w-[60vw] md:h-[18vh] md:w-[45vw] lg:h-[25vh] lg:w-[35vw] min-w-[200px] md:min-w-[300px] lg:min-w-[400px] flex items-center justify-center shrink-0"
            >
              <Image
                src="/companyLogo.png"
                alt="Company Logo"
                width={600}
                height={240}
                className="object-contain w-full h-full"
                quality={100}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alumni;
