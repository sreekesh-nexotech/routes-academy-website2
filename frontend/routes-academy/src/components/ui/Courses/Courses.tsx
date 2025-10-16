"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Course, courses } from "./CourseData";
import { useState } from "react";

const Courses = () => {
  return (
    <div>
      {/* Courses title */}
      <div className="px-[1rem] pt-[5rem] pb-[2rem] md:pt-[5.8125rem] md:pb-[5.4375rem]">
        <h3 className="text-center font-semibold text-[#172554] text-[1.5rem] md:text-[2.5rem] leading-[1.5rem] md:leading-[3rem] mb-[1.3125rem]">
          Our Courses
        </h3>
        <h5 className="text-center font-normal text-[.875rem] md:text-[1rem] text-[#404040] leading-[1.3125rem] md:leading-[1.75rem]">
          Our curriculum is crafted to accelerate your career growth because
          knowledge <br className="hidden sm:block" /> creates real impact.
        </h5>
      </div>
      {/* courses listing */}
      <div className="xl:container xl:mx-auto px-[1rem] xl:px-[5rem]">
        <div className="grid lg:grid-cols-4 lg:gap-[2.3125rem] justify-center">
          <div className="lg:col-span-1 mb-[1rem]">
            <CoursesNav />
            <div className="hidden lg:block">
              <GuideMe />
            </div>
          </div>
          <div className="lg:col-span-3">
            <CourseList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

function CoursesNav() {
  const [activeCategoryId, setActiveCategoryId] = useState(1);
  const courseCategories = [
    { id: 1, title: "All Courses" },
    { id: 2, title: "Data and Analytics" },
    { id: 3, title: "Finance, Accounting & ERP" },
    { id: 4, title: "AI, ML& Cloud" },
    { id: 5, title: "Digital Marketing & Growth" },
    { id: 6, title: "HR & People Analytics" },
    { id: 7, title: "Communication" },
  ];
  return (
    <div>
      <ul>
        {courseCategories.map((category, index) => (
          <li key={index}>
            <button
              className={`font-(family-name:--font-onest) text-left font-normal text-[.875rem] md:text-[1rem] leading-[1.3125rem] md:leading-[1.5rem] cursor-pointer w-full py-[.5rem] px-[1rem] 
                ${
                  category.id === activeCategoryId
                    ? "bg-[#104EFF] text-[#FFFFFF] rounded-[0.25rem]"
                    : "text-[#172554]"
                }`}
              onClick={() => setActiveCategoryId(category.id)}
            >
              {category.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CourseList() {
  return (
    <div className="grid md:grid-cols-2 gap-[2rem]">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="max-w-[26.65625rem] rounded-[1rem] bg-[#FFFFFF] shadow-md">
        <Image
          src={course.image_url}
          alt={`coursecard-${course.id} image`}
          width={426.5}
          height={168}
          className="rounded-t-[1rem]"
        />
        <div className="p-[1rem]">
          <h5 className="font-bold text-[#172554] text-[1.125rem] md:text-[1.3125rem] leading-[1.5rem] md:leading-[1.875rem] mb-[1rem]">
            {course.title}
          </h5>
          <p className="font-(family-name:--font-onest) font-normal text-[#404040] text-[.75rem] md:text-[.875rem] leading-[1.125rem] mb-[1rem]">
            {course.description}
          </p>
          <div className="grid grid-cols-3 gap-[1.5] font-medium text-[#172554] text-[.875rem] md:text-[1rem] leading-[1.3125rem] md:leading-[1.5rem] mb-[.25rem]">
            <h6>Average Salary</h6>
            <h6>Mode of Conduct</h6>
            <h6>We Placed</h6>
          </div>
          <div className="grid grid-cols-3 gap-[1.5] font-(family-name:--font-onest) font-normal text-[#404040] text-[.75rem] md:text-[.875rem] leading-[1.125] mb-[1rem]">
            <p>{course.average_salary}</p>
            <p>{course.mode_of_conduct}</p>
            <p>{course.placed_students} + Students</p>
          </div>
          <button className="cursor-pointer flex justify-center items-center font-(family-name:--font-onest) font-medium text-[#172554] bg-[#DBEAFE] w-full h-[3.5625rem] rounded-[5.125rem] mb-[.25rem]">
            See Full Details
          </button>
          <p className="font-(family-name:--font-onest) text-[#525252] text-[.75rem] md:text-[.875rem] text-center">
            EMI option available
          </p>
        </div>
      </div>
    </Link>
  );
}

function GuideMe() {
  return (
    <div className="bg-[#EFF6FF] font-(family-name:--font-onest) p-[1rem] text-center rounded-[1.25rem] mt-[5.625rem]">
      <p className="font-normal text-[#172554] text-[.75rem] xl:text-[.875rem] mb-[.5rem]">
        NEED ANY HELP ?
      </p>
      <h5 className="font-semibold text-[#172554] text-[1rem] xl:text-[1.2rem] 2xl:text-[1.3125rem] mb-[.5rem]">
        Had some Confusion ?
      </h5>
      <p className="font-normal text-[#404040] text-[.75rem] xl:text-[1rem] mb-[1rem] xl:mb-[1.5rem]">
        We can help you select the best and suitable Course for your career and
        skill
      </p>
      <button className="cursor-pointer font-bold bg-[#172554] text-[#FFFFFF] text-[1rem] py-[1rem] px-[1rem] xl:py-[1rem] xl:px-[1.8125rem] rounded-[2rem] xl:rounded-[2.295rem] mx-auto">
        Yes Guide Me
      </button>
    </div>
  );
}
