import React from "react";

const LocationAuthority = () => {
  return (
    <section className="w-full bg-[#EFF6FF] py-14 md:py-20 px-5 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 text-center md:text-left">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A]">
            Why We Are the Best Upskill Academy in Calicut.
          </h2>
          <p className="text-lg md:text-xl text-[#1F2937] max-w-5xl">
            Strategically located in HiLite Business Park, we offer the most
            advanced, AI-integrated curriculum for professionals in the Calicut
            region.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 flex flex-col gap-4 text-[#1F2937]">
          <p className="text-base md:text-lg leading-relaxed">
            At Route Academy, we operate alongside major tech firms inside
            HiLite Business Park and are directly connected to Calicut&apos;s
            innovation corridor near Cyberpark and Government Engineering
            College Calicut (GEC). This ecosystem builds a trust map for
            students and search engines alike, reinforcing that Route Academy is
            the central hub for premium upskilling in North Kerala.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-xl bg-[#E0F2FE]">
              <h3 className="font-semibold text-lg text-[#0F172A]">
                Neighboring brands
              </h3>
              <p className="text-sm md:text-base text-[#1F2937]">
                Based in HiLite Business Park beside leading technology
                companies and fast-growing startups.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#E0F2FE]">
              <h3 className="font-semibold text-lg text-[#0F172A]">
                City connectivity
              </h3>
              <p className="text-sm md:text-base text-[#1F2937]">
                Minutes away from Cyberpark and Government Engineering College
                Calicut, anchoring our local authority.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#E0F2FE]">
              <h3 className="font-semibold text-lg text-[#0F172A]">
                Career outcomes
              </h3>
              <p className="text-sm md:text-base text-[#1F2937]">
                AI-integrated, corporate-aligned curriculum that links Calicut
                talent with global opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAuthority;
