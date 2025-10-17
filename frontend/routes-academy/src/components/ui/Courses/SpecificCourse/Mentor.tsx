import { Star } from "lucide-react";
import { Course } from "../CourseData";
import RatingBar from "./RatingBar";

const MentorAndReviewsSection: React.FC<{ course: Course }> = ({ course }) => (
  <div className="bg-[#F8FAFF] rounded-2xl  p-8 space-y-10 scroll-mt-30" id="faculty">
    <div>
      <h2 className="text-3xl font-poppins font-semibold text-[#172554] mb-6">Meet Your Faculty</h2>
      <div className="flex flex-col sm:flex-row items-center gap-6  p-6 ">
        <img
          src={course.mentor.image}
          alt={course.mentor.name}
          width={120}
          height={120}
          className="rounded-full object-cover border-4 border-white shadow-lg"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-poppins font-bold text-[#172554]">{course.mentor.name}</h3>
          <p className="text-lg text-[#104EFF] font-medium mb-2">{course.mentor.role}</p>
          <div className="flex items-center space-x-2 text-yellow-500">
            <Star fill="#FBBF24" className="w-5 h-5" />
            <span className="text-xl font-bold text-gray-800">{course.mentor.rating.toFixed(1)} / 5.0</span>
            <span className="text-gray-600 text-sm">({course.mentor.total_reviews} reviews)</span>
          </div>
          <p className="text-gray-600 mt-3 max-w-xl">{course.mentor.bio}</p>
        </div>
      </div>
    </div>
    <div id="review" className="pt-6 border-t border-gray-200">
      <h3 className="text-2xl font-poppins font-semibold text-[#172554] mb-6">Review Breakdown</h3>
      <div className="space-y-3 max-w-xl">
        {course.mentorRatingBreakdown.map((item, i) => (
          <RatingBar key={i} {...item} />
        ))}
      </div>
    </div>
  </div>
);

export default MentorAndReviewsSection;