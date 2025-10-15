/* frontend/routes-academy/src/components/ui/Home/TopCourses.tsx */
import CourseCard from "../../../components/elements/CourseBox";
import { ChevronDown } from "lucide-react";
import React from "react";

const TopCourses: React.FC = () => {
  const courses = [
    {
      title: "Data Engineer",
      rating: "4.5",
      lessons: "36 Lessons",
      students: "460 Students",
      duration: "10hrs/Week",
      skills: "Skills : Python, Machine Learning",
      price: "₹6999 /-",
      image: "/course1.png",
      badgeText: "Offline/ Online",
      bgColor: "bg-[#F1F5F9]",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="30" r="30" fill="#60A5FA" opacity="0.4" />
        </svg>
      ),
    },
    {
      title: "Excel Advanced and Power BI, SQL",
      rating: "4.8",
      lessons: "25 Lessons",
      students: "180 Students",
      duration: "2hrs/Week",
      skills: "Skills : Advanced Excel, Power BI, Analytics",
      price: "₹2999 /-",
      image: "/course2.png",
      badgeText: "Online",
      bgColor: "bg-[#F1F5F9]",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="60" rx="8" fill="#C084FC" opacity="0.4" />
        </svg>
      ),
    },
    {
      title: "Digital Marketing & Personal Branding",
      rating: "4.6",
      lessons: "25 Lessons",
      students: "380 Students",
      duration: "4hrs/Week",
      skills: "Skills : Marketing, Meta Ads",
      price: "₹3999 /-",
      image: "/course3.png",
      badgeText: "Online",
      bgColor: "bg-[#F1F5F9]",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="30" r="30" fill="#FDBA74" />
        </svg>
      ),
    },
  ];

  return (
    <section className="flex flex-col w-full">
      {/* Section Container */}
      <div className="bg-[#F1F5F9] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-16 w-full">
        {/* Section Heading */}
        <div className="flex flex-col justify-center items-center gap-4 max-w-4xl text-center">
          <h2 className="font-poppins font-medium text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-[#172554]">
            Top Recommended Courses for Career Acceleration
          </h2>
          <p className="font-onest font-medium text-lg sm:text-xl leading-relaxed tracking-tight text-[#404040]">
            Discover Industry-Validated Courses with Guaranteed Career Pathways
          </p>
        </div>

        {/* Course Cards */}
        <div className="flex justify-center flex-wrap gap-6 sm:gap-12 w-full">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      {/* See All Button */}
      {/* Adjusted the layout to use flex-1 for dividers, ensuring they scale properly */}
      <div className="flex justify-center items-center gap-8 px-4 sm:px-6 py-8 w-full">
        <div className="border-t border-[#104EFF] flex-1 max-w-xs"></div>
        <button className="bg-[#104EFF] rounded-lg flex justify-center items-center gap-2 px-5 py-3 hover:bg-[#0D2DE1] transition-colors group whitespace-nowrap shadow-lg">
          <span className="font-onest font-semibold text-lg text-white">
            See All Courses
          </span>
          <ChevronDown className="w-6 h-6 text-white group-hover:translate-y-1 transition-transform" />
        </button>
        <div className="border-t border-[#104EFF] flex-1 max-w-xs"></div>
      </div>
    </section>
  );
};

export default TopCourses;