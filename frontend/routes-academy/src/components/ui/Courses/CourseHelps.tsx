import React from "react";
import Image from "next/image";

const CourseHelps = () => {
  return (
    <div>
      <div className="px-[1rem] pt-[5rem] pb-[2rem] md:pt-[5.8125rem] md:pb-[5.4375rem]">
        <h3 className="text-center font-semibold text-[#172554] text-[1.5rem] md:text-[2.5rem] leading-[1.5rem] md:leading-[3rem] mb-[1.3125rem]">
          How this course helps in your Career
        </h3>
        <h5 className="text-center font-normal text-[.875rem] md:text-[1rem] text-[#404040] leading-[1.3125rem] md:leading-[1.75rem]">
          Every course is a step closer to your highest potential and ultimate{" "}
          <br className="hidden sm:block" />
          success.
        </h5>
      </div>
      <Helps />
    </div>
  );
};

export default CourseHelps;

function Helps() {
  const helps = [
    {
      title: "Industry-recognized certifications",
      description:
        "These certifications serve as proof of expertise that employers trust, giving students a competitive edge in the job market",
      logo: "/help-1.svg",
    },
    {
      title: "Placement support",
      description:
        "This eliminates the stress and uncertainty of job hunting by providing dedicated support throughout the entire placement process.",
      logo: "/help-2.svg",
    },
    {
      title: "interview coaching",
      description:
        "Comprehensive training that includes mock interviews and expert guidance to help students master interview techniques,",
      logo: "/help-3.svg",
    },
    {
      title: "Resume polishing",
      description:
        "This ensures students present themselves effectively to employers by crafting resumes that stand out from the competition.",
      logo: "/help-4.svg",
    },
    {
      title: "Direct access to recruiters",
      description:
        "This eliminates the traditional job hunting struggle by connecting students directly with decision-makers who are actively looking to hire",
      logo: "/help-5.svg",
    },
    {
      title: "Industry-recognized certifications",
      description:
        "These certifications serve as proof of expertise that employers trust, giving students a competitive edge in the job market",
      logo: "/help-1.svg",
    },
  ];
  return (
    <div className="px-[1rem] sm:px-[2rem] xl:px-[5rem] xl:container xl:mx-auto mb-[4.875rem] md:mb-[5.875rem]">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-[2rem] xl:gap-x-[6rem] gap-y-[2rem]">
        {helps.map((help, index) => (
          <div
            key={index}
            className="grid grid-cols-1 justify-items-center items-cente px-[2rem] py-[2.5rem] bg-[#EFF6FF] rounded-[1.5rem]"
          >
            <Image
              src={help.logo}
              alt={help.title}
              width={46}
              height={49.06666564941406}
              className="mb-[1.5rem]"
            />
            <h5 className="font-semibold text-[#172554] text-[1.125rem] md:text-[1.3125rem] leading-[1.5rem] md:leading-[1.875rem] mb-[.5rem] text-center">
              {help.title}
            </h5>
            <p className="font-(family-name:--font-onest) font-normal text-[#404040] text-[1rem] leading-[1.3125rem] md:leading-[1.5rem] text-center">
              {help.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
