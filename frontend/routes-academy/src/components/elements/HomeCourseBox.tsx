/* frontend/routes-academy/src/components/elements/CourseBox.tsx */
import { Star, Book, User, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CourseCardProps {
  title: string;
  rating: string;
  lessons: string;
  students: string;
  duration: string;
  skills: string;
  price: string;
  image: string;
  badgeText: string;
  bgColor: string;
  icon?: React.ReactNode;
  href: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  rating,
  lessons,
  students,
  duration,
  skills,
  price,
  image,
  href,

}) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-4 flex flex-col justify-between gap-4 flex-1 min-w-[18rem] max-w-sm sm:max-w-md lg:min-w-[20rem] xl:max-w-md">
      {/* Course Image */}
      <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden">
        {/* Changed object-contain to object-cover for better visual filling, adjust if object-contain is required */}
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Course Details */}
      <div className="flex flex-col gap-6 px-1">
        {/* Title and Rating */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start gap-4">
            <h4 className="font-onest font-semibold text-xl sm:text-2xl leading-7 tracking-tight text-[#18181B] flex-1">
              {title}
            </h4>
            <div className="bg-[#F5F5F5] rounded flex items-center gap-1 px-3 py-1 whitespace-nowrap">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FACC15] text-[#FACC15]" />
              <span className="font-onest font-semibold text-sm sm:text-base leading-5 text-[#525252]">
                {rating}
              </span>
            </div>
          </div>

          {/* Course Stats */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base">
              <div className="flex items-center gap-1.5">
                <Book className="w-5 h-5 text-[#104EFF]" strokeWidth={1.5} />
                <span className="font-onest font-normal text-[#737373]">
                  {lessons}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-5 h-5 fill-[#104EFF] text-[#104EFF]" />
                <span className="font-onest font-normal text-[#737373]">
                  {students}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-5 h-5 text-[#104EFF]" strokeWidth={1.5} />
                <span className="font-onest font-normal text-[#737373]">
                  {duration}
                </span>
              </div>
            </div>
            <p className="font-onest font-normal text-sm leading-6 text-[#737373]">
              {skills}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#27272A] opacity-20 w-full my-1"></div>

        {/* Price and CTA */}
        <div className="flex justify-between items-center gap-4">
          <div className="bg-[#F1F5F9] rounded-lg flex justify-center items-center px-3 py-2">
            <span className="font-onest font-semibold text-xl sm:text-2xl leading-6 text-[#27272A]">
              {price}
            </span>
          </div>
          <Link href={href} className="border border-[#A3A3A3] rounded-full flex justify-center items-center gap-1 px-4 py-2 sm:py-3 hover:border-[#104EFF] hover:bg-[#EFF6FF] transition-colors group">
            <span className="font-poppins font-medium text-sm sm:text-base leading-5 tracking-tight text-[#404040] group-hover:text-[#104EFF] transition-colors whitespace-nowrap">
              See course Details
            </span>
            <ArrowRight
              className="w-5 h-5 text-[#525252] group-hover:text-[#104EFF] transition-colors"
              strokeWidth={2}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;