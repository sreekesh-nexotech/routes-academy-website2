import { Course } from "../CourseData";
import React from "react";

const CourseHeroSection: React.FC<{ course: Course }> = ({ course }) => (
  <div className="mb-12 relative">
    <div className="z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
      
      <div className="order-2 sm:order-1 sm:max-w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-poppins font-extrabold text-[#172554] mb-4">{course.title}</h1>
        <p className="text-gray-600 mb-8 leading-relaxed text-md md:text-lg xl:text-xl">{course.description}</p>
        <div className="space-y-4 text-gray-700">
          {course.what_you_get.map((item, i) => (
            <div key={i} className="flex items-center space-x-3">
              <span className="text-[#172554] text-md md:text-lg xl:text-xl pt-0.5 font-bold">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      

      <div className="z-10 order-1 sm:order-2 justify-self-center">
        <img
          src={course.specific_course_img}
          alt="Student Graphic"
          width={400}
          height={400}
          className="w-full max-w-sm lg:max-w-none"
        />
      </div>
    </div>
  </div>
);

export default CourseHeroSection;