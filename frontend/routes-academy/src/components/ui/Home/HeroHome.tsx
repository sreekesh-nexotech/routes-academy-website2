import PageIllustration from "../../elements/PageIllustration";
import React from "react";
import ButtonLink from "../../elements/ButtonLink";

const HeroHome = () => {
  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center mt-15 min-h-[56vh] md:min-h-[55vh] ">
      {/* Page Illustration */}
      <PageIllustration />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6">
        {/* Top Text */}
        <p className="text-blue-600 font-medium mb-4 text-xl md:text-2xl">
          Learn. <span className="text-gray-900">Build.</span> Expand
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-4 leading-tight">
          The Best Upskill Academy in Kerala for Career Growth.
        </h1>

        {/* Topic authority proof */}
        <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
          Providing industry-standard certifications (IBM, Microsoft, Zoho) to
          students across Kerala, helping them secure high-package roles in
          global markets.
        </p>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We build a four-stage journey—Learn, Apply, Experience, Launch, so
          graduates contribute from day one in real roles.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row   justify-center gap-4">
          <ButtonLink href="/courses" label="See Courses" variant="primary" />
          <ButtonLink
            href="#contact"
            label="Contact us"
            variant="secondary"
            className="bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
