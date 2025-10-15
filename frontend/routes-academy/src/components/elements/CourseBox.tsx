import { Star, Book, User, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

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
  badgeText,
  bgColor,
  icon,
}) => {
  return (
    <div className="bg-white rounded-[2rem] shadow-[0px_0.25rem_0.6375rem_-0.25rem_rgba(141,139,166,0.38)] p-[1rem] xl:p-[1.5rem] flex flex-col justify-between gap-[1rem] xl:gap-[1.5rem] flex-1 min-w-[20rem] sm:min-w-[32rem] max-w-[24rem] sm:max-w-[36rem] xl:max-w-[40rem]">
      {/* Course Image */}
      <div className="relative h-[20rem] sm:h-[26.5rem] xl:h-[30rem] rounded-[1.75rem] overflow-hidden mt-[0rem]">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>

      {/* Course Details */}
      <div className="flex flex-col gap-4 sm:gap-[1.5rem] xl:gap-[2rem] px-2 sm:px-[0.5rem] xl:px-[1rem]">
        {/* Title and Rating */}
        <div className="flex flex-col gap-4 sm:gap-[1rem] xl:gap-[1.25rem]">
          <div className="flex justify-between items-start gap-[11px] sm:gap-[0.6875rem] xl:gap-[1rem]">
            <h4 className="font-onest font-semibold text-[21px] sm:text-[1.69rem] xl:text-[2rem] leading-[30px] sm:leading-[1.875rem] xl:leading-[2.25rem] tracking-[-0.0071em] text-[#18181B] flex-1">
              {title}
            </h4>
            <div className="bg-[#F5F5F5] rounded flex items-center gap-1 sm:gap-[0.25rem] xl:gap-[0.5rem] px-2 sm:px-[1rem] xl:px-[1.25rem] py-[2px] sm:py-[0.125rem] xl:py-[0.25rem]">
              <Star className="w-4 sm:w-[1.5rem] xl:w-[1.75rem] h-4 sm:h-[1.5rem] xl:h-[1.75rem] fill-[#FACC15] text-[#FACC15]" />
              <span className="font-onest font-semibold text-sm sm:text-[1rem] xl:text-[1.125rem] leading-5 sm:leading-[1.25rem] xl:leading-[1.5rem] text-[#525252]">
                {rating}
              </span>
            </div>
          </div>

          {/* Course Stats */}
          <div className="flex flex-col gap-2 sm:gap-[0.5rem] xl:gap-[0.75rem]">
            <div className="flex items-center gap-4 sm:gap-[1rem] xl:gap-[1.5rem]">
              <div className="flex items-center gap-[6px] sm:gap-[0.375rem] xl:gap-[0.5rem]">
                <Book
                  className="w-5 sm:w-[1.5rem] xl:w-[1.75rem] h-5 sm:h-[1.5rem] xl:h-[1.75rem] text-[#104EFF]"
                  strokeWidth={1.5}
                />
                <span className="font-onest font-normal text-[13px] sm:text-[1rem] xl:text-[1.125rem] leading-[21px] sm:leading-[1.3125rem] xl:leading-[1.5rem] text-[#737373]">
                  {lessons}
                </span>
              </div>
              <div className="flex items-center gap-[6px] sm:gap-[0.375rem] xl:gap-[0.5rem]">
                <User className="w-5 sm:w-[1.5rem] xl:w-[1.75rem] h-5 sm:h-[1.5rem] xl:h-[1.75rem] fill-[#104EFF] text-[#104EFF]" />
                <span className="font-onest font-normal text-[13px] sm:text-[1rem] xl:text-[1.125rem] leading-[21px] sm:leading-[1.3125rem] xl:leading-[1.5rem] text-[#737373]">
                  {students}
                </span>
              </div>
              <div className="flex items-center gap-[6px] sm:gap-[0.375rem] xl:gap-[0.5rem]">
                <Clock
                  className="w-5 sm:w-[1.5rem] xl:w-[1.75rem] h-5 sm:h-[1.5rem] xl:h-[1.75rem] text-[#104EFF]"
                  strokeWidth={1.5}
                />
                <span className="font-onest font-normal text-[13px] sm:text-[1rem] xl:text-[1.125rem] leading-[21px] sm:leading-[1.3125rem] xl:leading-[1.5rem] text-[#737373]">
                  {duration}
                </span>
              </div>
            </div>
            <p className="font-onest font-normal text-sm sm:text-[1rem] xl:text-[1.125rem] leading-[21px] sm:leading-[1.3125rem] xl:leading-[1.5rem] text-[#737373]">
              {skills}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#27272A] opacity-20 w-full"></div>

        {/* Price and CTA */}
        <div className="flex justify-between items-center gap-[11px] sm:gap-[0.6875rem] xl:gap-[1rem]">
          <div className="bg-[#F1F5F9] rounded-lg flex justify-center items-center gap-2 sm:gap-[0.5rem] xl:gap-[0.75rem] px-3 sm:px-[0.75rem] xl:px-[1rem] py-2 sm:py-[0.5rem] xl:py-[0.75rem]">
            <span className="font-onest font-semibold text-lg sm:text-[1rem] xl:text-[1.25rem] leading-6 sm:leading-[1rem] xl:leading-[1.5rem] text-[#27272A]">
              {price}
            </span>
          </div>
          <button className="border border-[#A3A3A3] rounded-[1.5rem] flex justify-center items-center gap-[0.25rem] px-3 py-2 hover:border-[#104EFF] hover:bg-[#EFF6FF] transition-colors group sm:rounded-[2rem] sm:gap-[0.5rem] sm:px-4 sm:py-3 xl:px-6 xl:py-4 xl:gap-[0.75rem]">
            <span className="font-poppins font-medium text-[0.85rem] leading-[1rem] tracking-[-0.0114em] text-[#404040] group-hover:text-[#104EFF] transition-colors sm:text-[1rem] sm:leading-[1.25rem] xl:text-[1.125rem] xl:leading-[1.5rem]">
              See course Details
            </span>
            <ArrowRight
              className="w-[1rem] h-[1rem] text-[#525252] group-hover:text-[#104EFF] transition-colors sm:w-[1.5rem] sm:h-[1.25rem] xl:w-[1.75rem] xl:h-[1.5rem]"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
