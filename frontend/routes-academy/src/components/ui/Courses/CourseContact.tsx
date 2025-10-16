"use client";
import React from "react";

const CourseContact = () => {
  return (
    <div className="bg-[#104EFF]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-[2.5rem] lg:gap-[2.5rem] p-[1rem] md:p-[2rem] lg:p-[5rem]">
          <div>
            <h4 className="text-[1.375rem] md:text-[2rem] text-[#FFFFFF] font-semibold leading-[2.375rem] mb-[1.1875rem]">
              Still had doubts, lets clear that in a friendly 5 Min Call
            </h4>
            <h5 className="font-medium text-[1.125rem] md:text-[1.3125rem] text-[#FFFFFF] leading-[1.875rem]">
              We wont force you to buy, we care how it helps
            </h5>
          </div>
          <div>
            <div className="grid md:grid-cols-2 gap-[1.4375rem]">
              <input
                className="h-[3.1875rem] bg-[#FFFFFF] rounded-[.5rem] border border-[#EFF6FF] focus:outline-none indent-4"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="h-[3.1875rem] bg-[#FFFFFF] rounded-[.5rem] border border-[#EFF6FF] focus:outline-none indent-4"
                type="text"
                placeholder="Phone number"
              />
            </div>
            <button className="cursor-pointer w-full h-[3.4375rem] rounded-[0.3125rem] font-medium text-[1rem] text-[#FFFFFF] bg-[#172554] mt-[1.4375rem]">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContact;
