import { MentorReviewBreakdown } from "../CourseData";

const RatingBar: React.FC<MentorReviewBreakdown> = ({ stars, percentage }) => (
  <div className="flex items-center space-x-2">
    <span className="text-sm font-medium text-gray-500 w-10 text-right">{stars} Star</span>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-[#104EFF] h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
    <span className="text-sm text-gray-500 w-8 text-left">{percentage}%</span>
  </div>
);

export default RatingBar;