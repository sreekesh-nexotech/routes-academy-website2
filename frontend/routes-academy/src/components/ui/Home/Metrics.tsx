"use client";

import React from "react";

const Statistics: React.FC = () => {
  const stats = [
    { number: "90%", title: "Placement" },
    { number: "344+", title: "Students" },
    { number: "125+", title: "1:1 Mentoring" },
    { number: "40+", title: "Hired in GCC" },
  ];

  return (
    <section className="w-[100vw] bg-[#F1F5F9] py-[10vh] px-[8vw] flex flex-col items-center gap-[6vh]">
      {/* Section Heading */}
      <div className="flex flex-col gap-[2.5vh] w-full">
        <h3 className="font-onest font-semibold text-[1.8rem] sm:text-[2.5rem] leading-[1.8rem] sm:leading-[2.375rem] tracking-[0.03125em] text-center bg-gradient-to-b from-[#0A1E4A] to-[#104EFF] bg-clip-text text-transparent">
          Our results in numbers
        </h3>
        <h2 className="font-onest font-medium text-[1.2rem] sm:text-[1.6rem] leading-[1.4rem] sm:leading-[1.75rem] text-[#404040] text-center">
          Real Lives, Real Transformations: Stories of Impact
        </h2>
      </div>

      {/* Statistics Grid */}
      <div className="flex justify-center items-center flex-wrap gap-[10vw] w-full mt-[2vh]">
        {stats.map((stat, index) => {
          const match = stat.number.match(/^(\d+)([%+]?)$/);
          const numberPart = match ? match[1] : stat.number;
          const operatorPart = match ? match[2] : "";

          return (
            <div
              key={index}
              className="flex flex-col items-center gap-[2vh] sm:gap-[3vh]"
            >
              <p className="font-poppins font-semibold text-[2.5rem] sm:text-[4rem] leading-[2.2rem] sm:leading-[3.625rem] tracking-[-0.0083em] text-[#1E293B] text-center">
                {numberPart}
                {operatorPart && (
                  <span className="bg-gradient-to-b from-[#0A1E4A] to-[#104EFF] bg-clip-text text-transparent">
                    {operatorPart}
                  </span>
                )}
              </p>
              <p className="font-onest font-medium text-[1rem] sm:text-[1.5rem] leading-[1.25rem] sm:leading-[1.875rem] tracking-[-0.0071em] text-[#1E293B] text-center">
                {stat.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Statistics;
