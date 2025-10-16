import { Course } from "../CourseData";
import ButtonLink from "@/components/elements/ButtonLink";




const CourseDetailsCard: React.FC<{ course: Course }> = ({ course }) => {
  const actualPrice = Number(course.actual_price);
  const offerPrice = Number(course.offer_price);


  return (
    <div className="bg-[#F2F5FF] rounded-2xl  p-6 ">
        <div className="text-center mt-3 space-y-3">
          <ButtonLink
            href='#Coursecontact'
            label={`Enroll Now${course.emi ? '. EMI Available' : ''}`}
            variant='primary'
            className="rounded-b-3xl rounded-t-3xl py-3"
           />
            <p className="text-xs text-gray-500">100 % Placement Support</p>
        </div>
      

      <ul className="space-y-3 text-gray-700 mt-10">
        <li className="flex justify-between items-center text-sm border-b border-[#a0a0a080] pb-2">
          <span className="flex items-center space-x-2">
            <span className="font-medium">Course Fees ( with Tax ):</span>
          </span>
          <p className="text-gray-800">{course.actual_price}</p>
        </li>
        <li className="flex justify-between items-center text-sm border-b border-[#a0a0a080] pb-2">
          <span className="flex items-center space-x-2">
            <span className="font-medium">Course Duration:</span>
          </span>
          <p className="text-gray-800">{course.duration}</p>
        </li>
        <li className="flex justify-between items-center text-sm border-b border-[#a0a0a080] pb-2">
          <span className="flex items-center space-x-2">
            <span className="font-medium">Session Duration:</span>
          </span>
          <p className="text-gray-800">{course.session_duration} Hrs/week</p>
        </li>
        <li className="flex justify-between items-center text-sm border-b border-[#a0a0a080] pb-2">
          <span className="flex items-center space-x-2">
            <span className="font-medium">Class Schedule:</span>
          </span>
          <p className="text-gray-800">{course.class_schedule}</p>
        </li>
        <li className="flex justify-between items-center text-sm border-b border-[#a0a0a080] pb-2">
          <span className="flex items-center space-x-2">
            <span className="font-medium">Mode:</span>
          </span>
          <p className="text-gray-800">{course.mode_of_conduct}</p>
        </li>
        <li className="flex justify-between items-center text-sm border-b border-[#a0a0a080] pb-2">
          <span className="flex items-center space-x-2">
            <span className="font-medium">Placed:</span>
          </span>
          <p className="text-gray-800">{course.placed_students}+ Students</p>
        </li>
        <li className="flex justify-between items-center text-sm border-b border-[#a0a0a080] border-[#a0a0a080] pb-2">
          <span className="flex items-center space-x-2">
            <span className="font-medium">Enrolled:</span>
          </span>
          <p className="text-gray-800">{course.enrolled_students}+ Students</p>
        </li>
        
      </ul>
      
  
    </div>
  );
};

export default CourseDetailsCard;