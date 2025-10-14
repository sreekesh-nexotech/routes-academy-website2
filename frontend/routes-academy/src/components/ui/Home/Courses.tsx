import CourseCard from "../../../components/elements/CourseBox";
import { ChevronDown } from "lucide-react";

const Courses = () => {
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
    <section className="flex flex-col gap-4 w-full">
      {/* Section Container */}
      <div className="bg-[#F1F5F9] py-[5vw] px-[5vw] flex flex-col items-center gap-[3.75rem] w-full">
        {/* Section Heading */}
        <div className="flex flex-col justify-center items-center gap-[1rem] w-full">
          <h2 className="font-poppins font-medium text-[3rem] leading-[3.625rem] tracking-[-0.0083em] text-[#172554] text-center">
            Top Recommended Courses for Career Acceleration
          </h2>
          <p className="font-onest font-medium text-[1.3125rem] leading-[1.875rem] tracking-[-0.0071em] text-[#404040] text-center">
            Discover Industry-Validated Courses with Guaranteed Career Pathways
          </p>
        </div>

        {/* Course Cards */}
        <div className="flex justify-center flex-wrap gap-[1.5rem] sm:gap-[3rem] w-full">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      {/* See All Button */}
      <div className="flex justify-center items-center gap-[3.0625rem] h-[3.5625rem] w-full">
        <div className="border-t border-[#104EFF] w-full max-w-[25rem]"></div>
        <button className="bg-[#104EFF] rounded flex justify-center items-center gap-[0.625rem] px-[1.25rem] py-[0.75rem] hover:bg-[#0D2DE1] transition-colors group whitespace-nowrap">
          <span className="font-onest font-semibold text-[1.125rem] leading-[1.5rem] text-white">
            See All Courses
          </span>
          <ChevronDown className="w-[1.5rem] h-[1.5rem] text-white group-hover:translate-y-1 transition-transform" />
        </button>
        <div className="border-t border-[#104EFF] w-full max-w-[25rem]"></div>
      </div>
    </section>
  );
};

export default Courses;
