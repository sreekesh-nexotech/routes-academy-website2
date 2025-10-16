import React from "react";
import Image from "next/image";

import courseHero from "../../../../public/images/courses-hero.svg";
import courseHeroMobile from "../../../../public/images/courses-hero-mobile.svg";
// import PageIllustration from "../../elements/PageIllustration";

const CourseHero = () => {
  const careerObjecives = [
    {
      title: "Career launch support",
      active: true,
    },
    {
      title: "Hands-on learning",
      active: false,
    },
    {
      title: "90%+ placement rate",
      active: false,
    },
    {
      title: "Industry built curriculum",
      active: false,
    },
  ];
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:relative mt-[5rem]">
      {/* Hero content section */}
      <div className="md:col-span-1 md:ml-[3rem] flex md:items-end md:justify-items-end order-2 md:order-none px-[5rem] md:px-0 mt-[2rem] lg:mt-0">
        <div className="xl:absolute xl:top-[33%] xl:left-[10%] 2xl:left-[15%]">
          <h1 className="text-center md:text-start font-semibold text-[2rem] lg:text-[3rem] xl:text-[3.5rem] leading-[2.5rem] lg:leading-[4.25rem] mb-[1.21875rem]">
            Build <span className="text-blue-600">Job‑Ready</span>
            <br className="md:block hidden" /> Skills, Faster
          </h1>
          <h5 className="text-center md:text-start font-normal text-[1rem] xl:text-[1.125rem] text-neutral-600 leading-[1.5rem] sm:leading-[1.75rem]">
            We have a carefully designed structure to make you job ready. We{" "}
            <br className="lg:hidden xl:block hidden" /> made these courses with
            the help of 200+ Hiring managers
          </h5>

          <div className="sm:grid sm:justify-center md:justify-start">
            <ul className="font-medium font-(family-name:--font-onest) text-[1.125rem] leading-[1.75rem] mt-[2rem] ml-auto">
              {careerObjecives.map((item, index) => (
                <li
                  key={index}
                  id="item-1"
                  className="flex gap-[.5rem] mb-[1.125rem]"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8 8.33335L10.2 21.9334L3.96667 15.7L5.56467 14.102L10.2 18.726L22.202 6.73535L23.8 8.33335Z"
                      fill={item.active === true ? "#172554" : "#D1D5DC"}
                    />
                    oklch(87.2% 0.01 258.338)
                  </svg>

                  <span
                    className={`${
                      item.active === true ? "text-[#172554]" : "text-gray-300"
                    }`}
                  >
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <PageIllustration /> */}

      {/* Hero Image section */}
      <div className="flex justify-center md:justify-end md:items-end md:col-span-1 xl:col-span-2">
        <div className="lg:max-w-[600px] xl:max-w-[780px] 2xl:max-w-auto px-[5rem] md:px-0">
          {/* Image for bigger screen*/}
          <Image
            className="mt-[2.75rem] hidden sm:block"
            src={courseHero}
            alt="course-hero"
            width={876}
            height={927}
          />
          {/* Image for Smaller screen*/}
          <Image
            className="mt-[2.75rem] sm:hidden"
            src={courseHeroMobile}
            alt="course-hero-mobile"
            width={230.0006561279297}
            height={219.07366943359375}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
