"use client";

import React from "react";
import Image from "next/image";

const companiesData = [
  { src: "https://routesacademy.b-cdn.net/icons/ibm.png", alt: "IBM" },
  {
    src: "https://routesacademy.b-cdn.net/icons/Microsoft_logo_(2012).png",
    alt: "Microsoft",
  },
  {
    src: "https://routesacademy.b-cdn.net/icons/idnIFWhoAM_logos.png",
    alt: "BFSI",
  },
  {
    src: "https://routesacademy.b-cdn.net/images/zoho.png",
    alt: "Zoho",
  },
  {
    src: "https://routesacademy.b-cdn.net/icons/732d296dbd6c95ab945e2be9ce1e0d16.png",
    alt: "Certification",
  },
  {
    src: "https://routesacademy.b-cdn.net/images/UGC%20-%20NCVET%20Logo.png",
    alt: "UGC logo",
  },
  {
    src: "https://routesacademy.b-cdn.net/icons/SAP_2011_logo.png",
    alt: "SAP",
  },
  {
    src: "https://routesacademy.b-cdn.net/icons/American%20Board%20of%20Education%20LOGO.png",
    alt: "American Board Education Logo",
  },
];

const Companies: React.FC = () => {
  return (
    <section className="w-[100vw] bg-[#ffffff] py-[10vh] px-[5vw] flex flex-col items-center justify-center overflow-hidden">
      {/* Section Title */}
      <h2 className="text-[1.6rem] md:text-[2rem] font-semibold text-[#1E293B] mb-[6vh] tracking-[0.03em] text-center">
        OUR CERTIFICATIONS
      </h2>

      {/* Logos Row */}
      <div className="flex flex-wrap justify-center items-center gap-[1.5vw] md:gap-[2.5vw] w-full max-w-[95vw]">
        {companiesData.map((cert, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-[10vh] w-[16vw] min-w-[100px] max-w-[160px]"
          >
            <Image
              src={cert.src}
              alt={cert.alt}
              width={160}
              height={90}
              className={`object-contain ${
                cert.alt === "UGC logo"
                  ? "w-[180%] h-[180%]"
                  : "w-[85%] h-[85%]"
              }`}
              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
