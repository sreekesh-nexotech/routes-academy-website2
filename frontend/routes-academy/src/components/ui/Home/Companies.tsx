"use client";

import React from "react";
import Image from "next/image";

const companiesData = [
  { src: "https://routesacademy.b-cdn.net/icons/ibm.png", alt: "IBM" },
  { src: "https://routesacademy.b-cdn.net/icons/Microsoft_logo_(2012).png", alt: "Microsoft" },
  { src: "https://routesacademy.b-cdn.net/icons/idnIFWhoAM_logos.png", alt: "BFSI" },
  { src: "https://routesacademy.b-cdn.net/icons/STED.a89f7934.png", alt: "STED" },
  { src: "https://routesacademy.b-cdn.net/icons/SAP_2011_logo.png", alt: "SAP" },
];

const Companies: React.FC = () => {
  return (
    <section className="w-[100vw] bg-[#ffffff] py-[10vh] px-[5vw] flex flex-col items-center justify-center overflow-hidden">
      {/* Section Title */}
      <h2 className="text-[1.6rem] md:text-[2rem] font-semibold text-[#1E293B] mb-[6vh] tracking-[0.03em] text-center">
        OUR CERTIFICATIONS
      </h2>

      {/* Logos Row */}
      <div className="flex flex-wrap justify-center items-center gap-[4vw] w-full max-w-[90vw]">
        {companiesData.map((cert, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-[10vh] w-[20vw] min-w-[120px] max-w-[200px]"
          >
            <Image
              src={cert.src}
              alt={cert.alt}
              width={200}
              height={100}
              className="object-contain w-[80%] h-[80%]"
              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
