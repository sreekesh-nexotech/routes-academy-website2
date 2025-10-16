/* frontend/routes-academy/src/components/ui/Home/TopCourses.tsx */
import ButtonLink from "@/components/elements/ButtonLink";
import CourseCard from "@/components/elements/HomeCourseBox";
import React from "react";
import { courses } from "../Courses/CourseData";

const TopCourses: React.FC = () => {
  //  Get top 3 highest-rated courses
  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="flex flex-col w-full">
      {/* Section Container */}
      <div className="bg-[#F1F5F9] py-16 sm:py-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex flex-col items-center gap-16 w-full">
          {/* Section Heading */}
          <div className="flex flex-col justify-center items-center gap-4 max-w-4xl text-center">
            <h2 className="font-poppins font-medium text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-[#172554]">
              Top Recommended Courses for Career Acceleration
            </h2>
            <p className="font-onest font-medium text-lg sm:text-xl leading-relaxed tracking-tight text-[#404040]">
              Discover Industry-Validated Courses with Guaranteed Career Pathways
            </p>
          </div>
        </div>

        {/* Course Cards */}
        <div className="flex justify-center flex-wrap gap-6 sm:gap-12 w-full">
          {topCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              rating={course.rating.toFixed(1)}
              lessons="N/A"
              students={`${course.placed_students} Students`}
              duration="Flexible"
              skills={course.description}
              price={`Avg Salary: ${course.average_salary}`}
              image={course.home_img_url || course.image_url}
              badgeText={course.mode_of_conduct}
              bgColor="bg-[#F1F5F9]"
              href={`/courses/${course.id}`}
            />
          ))}
        </div>
      </div>

      {/* See All Button */}
      <div className="flex justify-center items-center gap-8 px-4 sm:px-6 py-8 w-full">
        <div className="border-t border-[#104EFF] flex-1 max-w-xs"></div>
        <ButtonLink href="/courses" label="See All Courses" variant="primary" />
        <div className="border-t border-[#104EFF] flex-1 max-w-xs"></div>
      </div>
    </section>
  );
};

export default TopCourses;
