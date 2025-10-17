import { Star } from "lucide-react";
import { Course } from "../CourseData";

// Circular Progress Component
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

// Horizontal Bar Component
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
  // Calculate metrics from review breakdown
  const totalReviews = course.mentor.total_reviews;
  const fiveStarPercentage = course.mentorRatingBreakdown[0]?.percentage || 87;

  // Mock data for circular metrics (you can add these to your Course type later)
  const engagingPercentage = 78;
  const helpfulPercentage = 100;
  const clarityPercentage = 98;

  return (
    <div
      className="bg-[#F8FAFF] rounded-2xl p-6 sm:p-8 space-y-8 scroll-mt-30"
      id="faculty"
    >
      {/* Meet Your Faculty Section */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-poppins font-semibold text-[#172554] mb-6">
          Meet Your Faculty
        </h2>
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            {/* Mentor Image */}
            <img
              src={course.mentor.image}
              alt={course.mentor.name}
              width={140}
              height={140}
              className="rounded-full object-cover border-4 border-gray-100 shadow-md w-32 h-32 sm:w-36 sm:h-36"
            />

            {/* Mentor Info */}
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-poppins font-bold text-[#172554]">
                {course.mentor.name}
              </h3>
              <p className="text-base sm:text-lg text-[#104EFF] font-medium mb-1">
                {course.mentor.role}
              </p>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                {course.mentor.bio}
              </p>
            </div>

            {/* Circular Progress Indicators */}
            <div className="flex gap-6 sm:gap-8 flex-wrap lg:flex-nowrap justify-center lg:justify-end w-full lg:w-auto">
              <CircularProgress
                percentage={engagingPercentage}
                label="Engaging"
                color="#F97316"
              />
              <CircularProgress
                percentage={helpfulPercentage}
                label="Helpful"
                color="#22C55E"
              />
              <CircularProgress
                percentage={clarityPercentage}
                label="Clarity"
                color="#22C55E"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Student Review Section */}
      <div id="review">
        <h3 className="text-xl sm:text-2xl font-poppins font-semibold text-[#172554] mb-4">
          Student Review
        </h3>
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8">
            {/* Rating Display */}
            <div className="flex flex-col items-center">
              <div className="text-5xl sm:text-6xl font-bold text-[#172554]">
                {course.mentor.rating.toFixed(1)}
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

            {/* Horizontal Bars */}
            <div className="flex-1 space-y-3 sm:space-y-4 w-full">
              <HorizontalBar label="Exceeded" percentage={97} color="#F97316" />
              <HorizontalBar label="Yes" percentage={3} color="#F97316" />
              <HorizontalBar label="Somewhat" percentage={0} color="#E5E7EB" />
              <HorizontalBar
                label="Not really"
                percentage={0}
                color="#E5E7EB"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorAndReviewsSection;
