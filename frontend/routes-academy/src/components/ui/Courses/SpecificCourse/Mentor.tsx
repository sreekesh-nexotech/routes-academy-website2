"use client";

import { useRef, useState } from "react";
import { Star } from "lucide-react";
import { Course, Mentor } from "../CourseData";
import type { Swiper as SwiperClass } from "swiper";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CircularProgress: React.FC<{
  percentage: number;
  label: string;
  color: string;
}> = ({ percentage, label, color }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28">
        <svg className="transform -rotate-90 w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r="45"
            stroke="#E5E7EB"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50%"
            cy="50%"
            r="45"
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl sm:text-2xl font-bold text-[#172554]">
            {percentage}%
          </span>
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-600 mt-2 font-medium">
        {label}
      </p>
    </div>
  );
};

const HorizontalBar: React.FC<{
  label: string;
  percentage: number;
  color: string;
}> = ({ label, percentage, color }) => (
  <div className="flex items-center gap-4">
    <span className="text-base sm:text-lg font-medium text-[#172554] min-w-[100px] sm:min-w-[120px]">
      {label}
    </span>
    <div className="flex-1 bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: `${percentage}%`,
          backgroundColor: color,
        }}
      />
    </div>
    <span className="text-base sm:text-lg font-semibold text-[#172554] min-w-[50px] text-right">
      {percentage}%
    </span>
  </div>
);

const MentorAndReviewsSection: React.FC<{ course: Course }> = ({ course }) => {
  // swiper state and ref for indicator bar
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

 

  return (
    <div
      className="bg-[#F8FAFF] rounded-2xl p-6 sm:p-8 space-y-8 scroll-mt-30"
      id="faculty"
    >
      <div>
        <h2 className="text-2xl sm:text-3xl font-poppins font-semibold text-[#172554] mb-6">
          Meet Your Faculty
        </h2>

        {/* ---------------- CAROUSEL START ---------------- */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="w-full"
          onSlideChange={(s) => setActiveIndex((((s as unknown) as SwiperClass).activeIndex) ?? 0)}
          onSwiper={(s) => (swiperRef.current = s as SwiperClass)}
        >
          {course.mentor.map((mentor: Mentor, index: number) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col xl:flex-row items-start xl:items-center gap-6">
                
                <div className="flex items-start gap-4 sm:gap-6 flex-1 min-w-0">
                  <div className="rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 flex-shrink-0 border-4 border-gray-100 shadow-md">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      width={140}
                      height={140}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-poppins font-bold text-[#172554]">
                      {mentor.name}
                    </h3>
                    <p className="text-base sm:text-lg text-[#104EFF] font-medium mb-1">
                      {mentor.designation}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 mt-2">
                      {mentor.totalReviews ? `${mentor.totalReviews} reviews` : ""}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-6 lg:gap-8 flex-shrink-0 w-full xl:w-auto justify-center xl:justify-end">
                  <CircularProgress
                    percentage={mentor.engagingPercentage ?? 78}
                    label="Engaging"
                    color="#F97316"
                  />
                  <CircularProgress
                    percentage={mentor.helpfulPercentage ?? 100}
                    label="Helpful"
                    color="#22C55E"
                  />
                  <CircularProgress
                    percentage={mentor.clarityPercentage ?? 98}
                    label="Clarity"
                    color="#22C55E"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Indicator bar (dots/segments) */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {course.mentor.map((_, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideTo(i)}
              aria-label={`Go to mentor ${i + 1}`}
              className={
                i === activeIndex
                  ? "h-2 w-8 rounded-full bg-[#172554] transition-all"
                  : "h-2 w-6 rounded-full bg-gray-300 transition-all"
              }
            />
          ))}
        </div>
        {/* ---------------- CAROUSEL END ---------------- */}
      </div>

      {/* STUDENT REVIEW SECTION */}
      <div id="review">
        <h3 className="text-xl sm:text-2xl font-poppins font-semibold text-[#172554] mb-4">
          Student Review
        </h3>

        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8">
          <div className="flex flex-col items-center">
              <div className="text-5xl sm:text-6xl font-bold text-[#172554]">
              {(course.rating && typeof course.rating === 'number')
                ? course.rating.toFixed(1)
                : '0.0'}
            </div>
            <div className="flex items-center gap-1 my-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  fill="#F97316"
                  strokeWidth={0}
                />
              ))}
            </div>
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              Course rating
            </p>
          </div>

          <div className="flex-1 space-y-3 sm:space-y-4 w-full">
            <HorizontalBar label="Exceeded" percentage={97} color="#F97316" />
            <HorizontalBar label="Yes" percentage={3} color="#F97316" />
            <HorizontalBar label="Somewhat" percentage={0} color="#E5E7EB" />
            <HorizontalBar label="Not really" percentage={0} color="#E5E7EB" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorAndReviewsSection;
