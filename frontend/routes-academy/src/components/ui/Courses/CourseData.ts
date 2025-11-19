// src/components/ui/Courses/courseData.ts

export interface LearnFeature {
  title: string;
}

export interface MentorReviewBreakdown {
  stars: number;
  percentage: number;
}

export interface Mentor {
  id: number;
  name: string;
  designation: string;
  totalReviews: number;
  image: string;
  engagingPercentage?: number;
  helpfulPercentage?: number;
  clarityPercentage?: number;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  average_salary: string;
  mode_of_conduct: string;
  placed_students: number;
  emi: boolean;
  image_url: string;
  specific_course_img: string;
  class_schedule: string;
  enrolled_students: number;
  rating: number;
  home_img_url: string;
  duration: string;
  session_duration: number;
  actual_price: number;
  offer_price: number;
  what_you_get: string[];
  curriculum_detailed: {
    topic: string;
    details: string;
  }[];
  featureDescription: string;
  learnFeatures: LearnFeature[];
  mentorRatingBreakdown: MentorReviewBreakdown[];
  mentor: Mentor[];
  certificate_img: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Career Program in Accounting & Taxation",
    description:
      "The CPAT (Career Program in Accounting & Taxation) is a 6-month comprehensive program designed to bridge the gap 'From Campus to Corporate'...",
    category: "Finance, Accounting & ERP",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 98,
    class_schedule: "As per convenience",
    enrolled_students: 112,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/CPAT%20image%20-%20course%20page.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/specific-courses-hero.svg",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/CPAT%20image%20-%20landing%20page.png",
    duration: "6 months",
    session_duration: 1,
    actual_price: 47200,
    offer_price: 47200,
    what_you_get: [
      "24/7 Doubt Support",
      "Dedicated Placement Support",
      "Industry Relevant Curriculum",
      "Flexible Learning Options"
    ],
    curriculum_detailed: [
      { topic: "Foundation Level", details: "Practical Accounting\nTally Prime\nGST..." },
      { topic: "Associate Level", details: "AI-Enabled Excel\nZoho Books..." }
    ],
    featureDescription: "The CPAT program is designed to transform students...",
    learnFeatures: [
      { title: "Practical Accounting Skills" },
      { title: "GST & Income Tax" },
      { title: "Advanced Excel & SAP" },
      { title: "Professional Development" }
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 }
    ],
    mentor: [
      {
        id: 1,
        name: "Harsha T",
        designation: "Accounts Trainer & Educator",
        totalReviews: 150,
        engagingPercentage: 78,
        helpfulPercentage: 92,
        clarityPercentage: 88,
        image: "https://routesacademy.b-cdn.net/images/mentor3.png"
      }
    ],
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png"
  },

  // ------------------------------
  // COURSE 2
  // ------------------------------

  {
    id: 2,
    title: "Data Analysis",
    description: "Unlock the power of data...",
    category: "Data and Analytics",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 89,
    class_schedule: "As per convenience",
    enrolled_students: 105,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/pics-2.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/specific-courses-hero2.svg",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/pics-2.png",
    duration: "6 months",
    session_duration: 1,
    actual_price: 47200,
    offer_price: 47200,
    what_you_get: [
      "24/7 Doubt Support",
      "Dedicated Placement Support",
      "Industry Relevant Curriculum",
      "Flexible Learning Options"
    ],
    curriculum_detailed: [
      { topic: "Module 1", details: "Advanced Excel" },
      { topic: "Module 2", details: "SQL" },
      { topic: "Module 3", details: "Power BI" },
      { topic: "Module 4", details: "Python" }
    ],
    featureDescription: "Data analysis transforms raw data...",
    learnFeatures: [
      { title: "Advanced Excel Mastery" },
      { title: "SQL Database Skills" },
      { title: "Power BI Dashboards" },
      { title: "Python Data Tools" }
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 }
    ],
    mentor: [
      {
        id: 1,
        name: "Abhin Prakash",
        designation: "Data Analyst & Instructor",
        totalReviews: 150,
        engagingPercentage: 85,
        helpfulPercentage: 90,
        clarityPercentage: 92,
        image:
          "https://routesacademy.b-cdn.net/images/mentor1.png"
      },
      {
        id: 2,
        name: "Adithya P T",
        designation: "Data Analyst & Trainer",
        totalReviews: 150,
        engagingPercentage: 80,
        helpfulPercentage: 88,
        clarityPercentage: 86,
        image:
          "https://routesacademy.b-cdn.net/images/mentor2.png"
      }
    ],
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png"
  },

  // ------------------------------
  // COURSE 3
  // ------------------------------

  {
    id: 3,
    title: "Power BI and SQL Program",
    description: "SQL is the backbone...",
    category: "Data and Analytics",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 94,
    class_schedule: "As per convenience",
    enrolled_students: 118,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/pics-3.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/specific-courses-hero3.svg",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/pics-3.png",
    duration: "40 hours",
    session_duration: 1,
    actual_price: 9500,
    offer_price: 9500,
    what_you_get: [
      "24/7 Doubt Support",
      "Dedicated Placement Support",
      "Industry Relevant Curriculum",
      "Flexible Learning Options"
    ],
    curriculum_detailed: [
      { topic: "Module 1", details: "SQL" },
      { topic: "Module 2", details: "Power BI" }
    ],
    featureDescription: "Master the complete BI stack...",
    learnFeatures: [
      { title: "SQL Database Mastery" },
      { title: "Advanced Querying" },
      { title: "Power BI Dashboards" },
      { title: "Data Modeling & DAX" }
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 }
    ],
    mentor: [
      {
        id: 1,
        name: "Adithya P T",
        designation: "Data Analyst & Trainer",
        totalReviews: 150,
        engagingPercentage: 80,
        helpfulPercentage: 88,
        clarityPercentage: 86,
        image:
          "https://routesacademy.b-cdn.net/images/mentor2.png"
      }
    ],
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png"
  },

  // ------------------------------
  // COURSE 4
  // ------------------------------

  {
    id: 4,
    title: "Power BI",
    description: "Power BI is a business analytics tool...",
    category: "Data and Analytics",
    average_salary: "TBD",
    mode_of_conduct: "Offline / Online",
    placed_students: 81,
    class_schedule: "As per convenience",
    enrolled_students: 96,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/pics-1.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/specific-courses-hero4.svg",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/course3.png",
    duration: "15 hours",
    session_duration: 1,
    actual_price: 3500,
    offer_price: 3500,
    what_you_get: [
      "24/7 Doubt Support",
      "Dedicated Placement Support",
      "Industry Relevant Curriculum",
      "Flexible Learning Options"
    ],
    curriculum_detailed: [
      { topic: "Module 1", details: "Introduction to Power BI" },
      { topic: "Module 2", details: "Data Extraction & Transformation" },
      { topic: "Module 3", details: "Data Modeling" },
      { topic: "Module 4", details: "DAX" },
      { topic: "Module 5", details: "Visualization" },
      { topic: "Module 6", details: "Advanced Power BI" }
    ],
    featureDescription: "With organisations increasingly needing...",
    learnFeatures: [
      { title: "Data Connectivity" },
      { title: "DAX Mastery" },
      { title: "Interactive Dashboards" },
      { title: "AI-Powered Insights" }
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 }
    ],
    mentor: [
      {
        id: 1,
        name: "Abhin Prakash",
        designation: "Data Analyst & Instructor",
        totalReviews: 150,
        engagingPercentage: 85,
        helpfulPercentage: 90,
        clarityPercentage: 92,
        image:
          "https://routesacademy.b-cdn.net/images/mentor1.png"
      },
      {
        id: 2,
        name: "Adithya P T",
        designation: "Data Analyst & Trainer",
        totalReviews: 150,
        engagingPercentage: 80,
        helpfulPercentage: 88,
        clarityPercentage: 86,
        image:
          "https://routesacademy.b-cdn.net/images/mentor2.png"
      }
    ],
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png"
  },

  // ------------------------------
  // COURSE 5
  // ------------------------------

  {
    id: 5,
    title: "AI-Integrated Excel",
    description: "Unlock the next level of data management...",
    category: "AI, ML& Cloud",
    average_salary: "TBD",
    mode_of_conduct: "Offline / Online",
    placed_students: 86,
    class_schedule: "As per convenience",
    enrolled_students: 103,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/pics-4.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/specific-courses-hero5.svg",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/course3.png",
    duration: "20 hours",
    session_duration: 1,
    actual_price: 5800,
    offer_price: 5800,
    what_you_get: [
      "24/7 Doubt Support",
      "Dedicated Placement Support",
      "Industry Relevant Curriculum",
      "Flexible Learning Options"
    ],
    curriculum_detailed: [
      { topic: "Module 1", details: "Advanced Excel" },
      { topic: "Module 2", details: "AI Features" },
      { topic: "Module 3", details: "Automation" },
      { topic: "Module 4", details: "AI Integrations" },
      { topic: "Module 5", details: "Real Projects" }
    ],
    featureDescription: "Transform your Excel skills...",
    learnFeatures: [
      { title: "Advanced Excel Techniques" },
      { title: "AI-Powered Analytics" },
      { title: "Smart Automation" },
      { title: "AI Tool Integration" }
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 }
    ],
    mentor: [
      {
        id: 1,
        name: "Shilpa C",
        designation: "Excel Faculty & Data Entry Specialist",
        totalReviews: 150,
        engagingPercentage: 70,
        helpfulPercentage: 75,
        clarityPercentage: 72,
        image: "https://routesacademy.b-cdn.net/images/mentor4.png"
      }
    ],
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png"
  },

  // ------------------------------
  // COURSE 6
  // ------------------------------

  {
    id: 6,
    title: "SAP S/4HANA FICO",
    description: "The SAP S/4HANA FICO – Learning Hub Program...",
    category: "Finance, Accounting & ERP",
    average_salary: "TBD",
    mode_of_conduct: "Offline / Online",
    placed_students: 91,
    class_schedule: "As per convenience",
    enrolled_students: 108,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/pics-6.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/specific-courses-hero6.svg",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/course3.png",
    duration: "TBD",
    session_duration: 1,
    actual_price: 0,
    offer_price: 0,
    what_you_get: [
      "24/7 Doubt Support",
      "Dedicated Placement Support",
      "Industry Relevant Curriculum",
      "Flexible Learning Options"
    ],
    curriculum_detailed: [
      { topic: "Module 1", details: "SAP FI" },
      { topic: "Module 2", details: "SAP CO" }
    ],
    featureDescription: "Master SAP FICO with hands-on training...",
    learnFeatures: [
      { title: "SAP FI Basics" },
      { title: "SAP CO Basics" },
      { title: "SAP Server Access" },
      { title: "Hands-on Configuration" }
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 }
    ],
    mentor: [
      {
        id: 1,
        name: "TBD",
        designation: "SAP FICO Expert",
        totalReviews: 150,
        engagingPercentage: 68,
        helpfulPercentage: 70,
        clarityPercentage: 66,
        image: "https://routesacademy.b-cdn.net/images/mentor.png"
      }
    ],
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png"
  }
];
