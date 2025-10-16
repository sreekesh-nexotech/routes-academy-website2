import React from "react";
import CourseHero from "@/components/ui/Courses/CourseHero";
import CourseContact from "@/components/ui/Courses/CourseContact";
import Courses from "@/components/ui/Courses/Courses";
import CourseHelps from "@/components/ui/Courses/CourseHelps";

const page = () => {
  return (
    <div>
      <CourseHero />
      <div className="px-[1rem] py-[2rem] sm:p-[5rem] bg-[#104EFF]">
        <h2 className="text-center text-[2.25rem] text-[#FFFFFF] font-bold leading-[2.875rem]">
          A 90%+ placement rate within six months
        </h2>
      </div>
      <Courses />
      <CourseHelps />
      <CourseContact />
    </div>
  );
};

export default page;
