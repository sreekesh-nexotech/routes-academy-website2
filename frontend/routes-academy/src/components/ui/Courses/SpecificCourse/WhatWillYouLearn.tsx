import Image from "next/image";
import { Course } from "../CourseData";

const WhatYouWillLearnSection: React.FC<{ course: Course }> = ({ course }) => {
  
  return (
    <div className="bg-[#F8FAFF] rounded-2xl shadow-lg p-8 scroll-mt-30 " id="features">
      <h2 className="text-3xl font-poppins font-semibold text-[#172554] mb-6">What you will learn</h2>
      <div className="mb-6">
        <p className="text-gray-600 leading-relaxed">
          {course.featureDescription}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {course.learnFeatures.map((feature, i) => {
          return (
            <div
              key={i}
              className="flex  items-center gap-2 justify-baseline "
            >
             <Image src="/images/right-arrow.svg" alt="*" width={13} height={13}/> 
              <h4 className="text-gray-600 ">{feature.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatYouWillLearnSection;