"use client";

import { use, useEffect, useRef, useState } from "react";
import { courses } from "../../../components/ui/Courses/CourseData";
import CourseHeroSection from "@/components/ui/Courses/SpecificCourse/CourseHero";
import StickyTabs from "@/components/ui/Courses/SpecificCourse/StickyTabs";
import WhatYouWillLearnSection from "@/components/ui/Courses/SpecificCourse/WhatWillYouLearn";
import CourseContentSection from "@/components/ui/Courses/SpecificCourse/CourseContent";
import MentorAndReviewsSection from "@/components/ui/Courses/SpecificCourse/Mentor";
import CertificationSection from "@/components/ui/Courses/SpecificCourse/Certification";
import CourseSidebar from "@/components/ui/Courses/SpecificCourse/CourseSidebar";
import BookACallBanner from "@/components/ui/Courses/SpecificCourse/BookACallBanner";
import SuccessStories from "@/components/ui/Courses/SpecificCourse/Testimonial";

interface UnwrappedParams {
  id: string;
}

interface CoursePageProps {
  params: Promise<UnwrappedParams>;
}

export default function CoursePage(props: CoursePageProps) {
  const { id } = use(props.params);
  const numericId = Number(id);

  const course = courses.find((c) => c.id === numericId);


  if (!course) {
    return (
      <div className="pt-16 sm:pt-20 text-center text-xl font-bold">
        Course not found. Please check the ID.
      </div>
    );
  }

  return (
    <div className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-10 sm:pb-16 lg:pb-20 font-sans min-h-screen relative overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10 mb-20">
        {/* Hero Section */}
        <CourseHeroSection course={course} />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 mt-10">
          {/* Sidebar */}
          <CourseSidebar course={course} />

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10" id="main-content-area">

            {/* Tabs */}
              <StickyTabs/>

            {/* Features */}
            <WhatYouWillLearnSection course={course} />

            {/* Modules */}
            <CourseContentSection curriculum={course.curriculum_detailed} />

            {/* Faculty & Review */}
            <MentorAndReviewsSection course={course} />

            {/* Book a Call */}
            <BookACallBanner />

            {/* Certification */}
            <CertificationSection img={course.certificate_img} />

            
          </div>
        </div>
      </div>
        <SuccessStories/>

    </div>
  );
}