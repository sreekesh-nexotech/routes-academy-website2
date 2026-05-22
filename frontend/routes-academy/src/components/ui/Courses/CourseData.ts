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
  qualification: string;
  image: string;
  engagingPercentage?: number;
  helpfulPercentage?: number;
  clarityPercentage?: number;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  card_description: string;
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
  session_duration_display?: string;
  actual_price: number;
  actual_price_display?: string;
  offer_price: number;
  what_you_get: string[];
  content_list?: string[];
  curriculum_detailed: {
    topic: string;
    details: string;
  }[];
  featureDescription: string;
  learnFeatures: LearnFeature[];
  mentorRatingBreakdown: MentorReviewBreakdown[];
  mentor: Mentor[];
  certificate_img: string | string[];
  certificate_title?: string | string[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Career Program in Accounting & Taxation (CPAT)",
    description:
      "The CPAT (Career Program in Accounting & Taxation) is a 6-month comprehensive program in Kerala that bridges the gap 'From Campus to Corporate' for Calicut talent ready to move into finance roles...",
    card_description:
      "Best upskill training in Kerala for accounting, taxation, GST, Tally Prime, SAP & Zoho Books—built in Calicut for corporate-ready careers.",
    category: "Finance, Accounting & ERP",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 150,
    class_schedule: "As per convenience",
    enrolled_students: 180,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/CPAT%20image%20-%20course%20page.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/specific-courses-hero.svg",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/CPAT%20image%20-%20landing%20page.png",
    duration: "6 Months",
    session_duration: 600,
    session_duration_display: "600 Hours",
    actual_price: 50000,
    actual_price_display: "₹50,000",
    offer_price: 50000,
    what_you_get: [
      "24/7 Doubt Support",
      "Dedicated Placement Support",
      "Industry Relevant Curriculum",
      "Flexible Learning Options"
    ],
    content_list: [
      "SAP FICO",
      "Zoho Books",
      "GST Filing",
      "Excel AI",
      "Tally Prime",
      "Manual Accounting"
    ],
    curriculum_detailed: [
      {
        topic: "Course Content",
        details:
          "SAP FICO\nZoho Books\nGST Filing\nExcel AI\nTally Prime\nManual Accounting"
      }
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
        designation: "Accounting, GST , Tally Prime, SAP & Zoho Books",
        qualification: "M.Com (Finance)",
        engagingPercentage: 78,
        helpfulPercentage: 92,
        clarityPercentage: 88,
        image: "https://routesacademy.b-cdn.net/images/mentor3.png"
      }
    ],

    certificate_img: [
      "https://routesacademy.b-cdn.net/images/certificate1.png",
      "https://routesacademy.b-cdn.net/images/Microsoft%20Certificate.png",
      "https://routesacademy.b-cdn.net/images/Zoho%20Certificate.png"
    ],
    certificate_title: [
      "Certification By National Skill Development Council",
      "Certification By Microsoft",
      "Certification By ZOHO"
    ]
  },

  // ------------------------------
  // COURSE 2
  // ------------------------------

  {
    id: 2,
    title: "Career Program in Accounting & Taxation (GCC CPAT)",
    description:
      "GCC-focused accounting and taxation program covering UAE VAT, Corporate Tax, and global accounting tools with SAP and Zoho.",
    card_description:
      "GCC CPAT with UAE VAT, Corporate Tax, SAP FICO, Zoho Books, QuickBooks, and Peachtree.",
    category: "Finance, Accounting & ERP",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 130,
    class_schedule: "As per convenience",
    enrolled_students: 150,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/Course_Card_Image-4.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/specific-courses-hero2.svg",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/pics-2.png",
    duration: "6 Months",
    session_duration: 600,
    session_duration_display: "600 Hours",
    actual_price: 50000,
    actual_price_display: "₹50,000",
    offer_price: 50000,
    what_you_get: [
      "24/7 Doubt Support",
      "Dedicated Placement Support",
      "Industry Relevant Curriculum",
      "Flexible Learning Options"
    ],
    content_list: [
      "UAE VAT",
      "Corporate Tax",
      "Peachtree (Sage 50)",
      "Manual Accounting",
      "QuickBooks",
      "SAP FICO",
      "Zoho Books",
      "Excel AI"
    ],
    curriculum_detailed: [
      {
        topic: "Course Content",
        details:
          "UAE VAT\nCorporate Tax\nPeachtree (Sage 50)\nManual Accounting\nQuickBooks\nSAP FICO\nZoho Books\nExcel AI"
      }
    ],
    featureDescription: "GCC CPAT builds practical accounting skills...",
    learnFeatures: [
      { title: "UAE VAT & Corporate Tax" },
      { title: "Global Accounting Tools" },
      { title: "Practical Manual Accounting" },
      { title: "Job-Ready Tax Filing Skills" }
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
        name: "Abin Prakash",
        designation: "Data Analytics, Excel & Power BI",
        qualification: "BBA in Finance",
        engagingPercentage: 85,
        helpfulPercentage: 90,
        clarityPercentage: 92,
        image:
          "https://routesacademy.b-cdn.net/images/mentor1.png"
      },
      {
        id: 2,
        name: "Adithya P T",
        designation: "Microsoft Certified Trainer, SQL & Python",
        qualification: "M.Sc. Computer Science (Data Science)",
        engagingPercentage: 80,
        helpfulPercentage: 88,
        clarityPercentage: 86,
        image:
          "https://routesacademy.b-cdn.net/images/mentor2.png"
      }
    ],
    certificate_img: [
      "https://routesacademy.b-cdn.net/images/certificate1.png",
      "https://routesacademy.b-cdn.net/images/Microsoft%20Certificate.png",
      "https://routesacademy.b-cdn.net/images/IBM%20certificate%20.jpeg.jpg"
    ],
    certificate_title: [
      "Certification By National Skill Development Council",
      "Certification By Microsoft",
      "Certification By IBM"
    ]
  },

  // ------------------------------
  // COURSE 3
  // ------------------------------

  {
    id: 3,
    title: "AI Integrated Data Analytics & BI Specialist (1 Year)",
    description:
      "One-year analytics program covering Excel & AI, BI tools, SQL, Python, ML basics, cloud computing, and capstone projects.",
    card_description:
      "1-year AI-integrated analytics with Excel & AI, Power BI, Tableau, SQL, Python, and capstones.",
    category: "Data and Analytics",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 130,
    class_schedule: "As per convenience",
    enrolled_students: 160,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/Course_Card_Image.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/specific-courses-hero3.svg",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/pics-3.png",
    duration: "1 Year",
    session_duration: 1200,
    session_duration_display: "1200 Hours",
    actual_price: 110000,
    actual_price_display: "₹1,10,000/-",
    offer_price: 110000,
    what_you_get: [
      "24/7 Doubt Support",
      "Dedicated Placement Support",
      "Industry Relevant Curriculum",
      "Flexible Learning Options"
    ],
    content_list: [
      "Excel & AI",
      "Power BI",
      "Tableau",
      "SQL",
      "Python",
      "Introduction to Machine Learning",
      "Cloud Computing",
      "2 Capstone Projects"
    ],
    curriculum_detailed: [
      {
        topic: "Course Content",
        details:
          "Excel & AI\nPower BI\nTableau\nSQL\nPython\nIntroduction to Machine Learning\nCloud Computing\n2 Capstone Projects"
      }
    ],
    featureDescription: "Build analytics expertise with AI tools...",
    learnFeatures: [
      { title: "Excel & AI" },
      { title: "Power BI & Tableau" },
      { title: "SQL & Python" },
      { title: "Capstone Projects" }
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
        designation: "Microsoft Certified Trainer, SQL & Python",
        qualification: "M.Sc. Computer Science (Data Science)",
        engagingPercentage: 80,
        helpfulPercentage: 88,
        clarityPercentage: 86,
        image:
          "https://routesacademy.b-cdn.net/images/mentor2.png"
      }
    ],
    certificate_img: [
      "https://routesacademy.b-cdn.net/images/certificate1.png",
    ],
    certificate_title: [
      "Certification By National Skill Development Council",
    ]
  },

  // ------------------------------
  // COURSE 4
  // ------------------------------

  {
    id: 4,
    title: "AI Integrated Data Analytics & BI Specialist (6 Months)",
    description:
      "Six-month AI-integrated analytics program focused on Excel & AI, BI tools, SQL, Python, and ML basics.",
    card_description:
      "6-month AI-integrated analytics with Excel & AI, Power BI, Tableau, SQL, and Python.",
    category: "Data and Analytics",
    average_salary: "TBD",
    mode_of_conduct: "Offline / Online",
    placed_students: 120,
    class_schedule: "As per convenience",
    enrolled_students: 140,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/Course_Card_Image.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/specific-courses-hero4.svg",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/course3.png",
    duration: "6 Months",
    session_duration: 600,
    session_duration_display: "600 Hours",
    actual_price: 55000,
    actual_price_display: "₹55,000/-",
    offer_price: 55000,
    what_you_get: [
      "24/7 Doubt Support",
      "Dedicated Placement Support",
      "Industry Relevant Curriculum",
      "Flexible Learning Options"
    ],
    content_list: [
      "Excel & AI",
      "Power BI",
      "Tableau",
      "SQL",
      "Python",
      "Introduction to Machine Learning"
    ],
    curriculum_detailed: [
      {
        topic: "Course Content",
        details:
          "Excel & AI\nPower BI\nTableau\nSQL\nPython\nIntroduction to Machine Learning"
      }
    ],
    featureDescription: "Build analytics skills with AI tooling...",
    learnFeatures: [
      { title: "Excel & AI" },
      { title: "Power BI & Tableau" },
      { title: "SQL & Python" },
      { title: "ML Basics" }
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
        name: "Abin Prakash",
        designation: "Data Analytics, Excel & Power BI",
        qualification: "BBA in Finance",
        engagingPercentage: 85,
        helpfulPercentage: 90,
        clarityPercentage: 92,
        image:
          "https://routesacademy.b-cdn.net/images/mentor1.png"
      },
      {
        id: 2,
        name: "Adithya P T",
        designation: "Microsoft Certified Trainer, SQL & Python",
        qualification: "M.Sc. Computer Science (Data Science)",
        engagingPercentage: 80,
        helpfulPercentage: 88,
        clarityPercentage: 86,
        image:
          "https://routesacademy.b-cdn.net/images/mentor2.png"
      }
    ],
    certificate_img: [
      "https://routesacademy.b-cdn.net/images/certificate1.png",
    ],
    certificate_title: [
      "Certification By National Skill Development Council",
    ]
  },

  // ------------------------------
  // COURSE 5
  // ------------------------------

  {
    id: 5,
    title: "AI Integrated Excel with Power BI & SQL",
    description:
      "Short-term Excel and BI upskill covering AI-assisted Excel and Power BI for quick career upgrades.",
    card_description:
      "Excel & AI with Power BI and SQL basics for fast upskilling.",
    category: "Data and Analytics",
    average_salary: "TBD",
    mode_of_conduct: "Offline / Online",
    placed_students: 1000,
    class_schedule: "As per convenience",
    enrolled_students: 1000,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/Course_Card_Image-2.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/specific-courses-hero5.svg",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/course3.png",
    duration: "2 Months",
    session_duration: 200,
    session_duration_display: "200 Hours",
    actual_price: 15000,
    actual_price_display: "₹15,000/-",
    offer_price: 15000,
    what_you_get: [
      "24/7 Doubt Support",
      "Dedicated Placement Support",
      "Industry Relevant Curriculum",
      "Flexible Learning Options"
    ],
    content_list: [
      "Excel & AI",
      "Power BI",
      "SQL"
    ],
    curriculum_detailed: [
      {
        topic: "Course Content",
        details: "Excel & AI\nPower BI\nSQL"
      }
    ],
    featureDescription: "Level up Excel and BI skills fast...",
    learnFeatures: [
      { title: "Excel & AI" },
      { title: "Power BI Dashboards" },
      { title: "SQL Basics" },
      { title: "Quick Upskilling" }
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
        designation: "Microsoft Certifed Trainer , Account",
        qualification: "B.Com (Co-operation), ITI (COPA)",
        engagingPercentage: 70,
        helpfulPercentage: 75,
        clarityPercentage: 72,
        image: "https://routesacademy.b-cdn.net/images/mentor4.png"
      }
    ],
    certificate_img: [
      "https://routesacademy.b-cdn.net/images/certificate1.png"
    ],
    certificate_title: [
      "Certification By National Skill Development Council"
    ]
  },

  // ------------------------------
  // COURSE 6
  // ------------------------------

  {
    id: 6,
    title: "AI Integrated Certified Business & Financial Analyst - CBFA (1 Year)",
    description:
      "One-year CBFA program combining accounting platforms, taxation filings, BI tools, and AI-enabled analysis for finance careers.",
    card_description:
      "1-year CBFA with SAP FICO, UAE VAT/Corporate Tax, Power BI, SQL, and global accounting tools.",
    category: "Finance, Accounting & ERP",
    average_salary: "TBD",
    mode_of_conduct: "Offline / Online",
    placed_students: 200,
    class_schedule: "As per convenience",
    enrolled_students: 250,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/Course_Card_Image-1.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/Course%20Image%20(1).png",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/course3.png",
    duration: "1 Year",
    session_duration: 1200,
    session_duration_display: "1200 Hours",
    actual_price: 95000,
    actual_price_display: "₹95,000/-",
    offer_price: 95000,
    what_you_get: [
      "24/7 Doubt Support",
      "Dedicated Placement Support",
      "Industry Relevant Curriculum",
      "Flexible Learning Options"
    ],
    content_list: [
      "SAP FICO",
      "UAE VAT Filing",
      "Corporate Tax Filing",
      "Power BI",
      "SQL",
      "ITR Filing",
      "GST Filing",
      "ZOHO Books",
      "Peachtree (Sage 50)",
      "QuickBooks",
      "Excel AI",
      "Manual Accounting",
      "Tally Prime"
    ],
    curriculum_detailed: [
      {
        topic: "Course Content",
        details:
          "SAP FICO\nUAE VAT Filing\nCorporate Tax Filing\nPower BI\nSQL\nITR Filing\nGST Filing\nZOHO Books\nPeachtree (Sage 50)\nQuickBooks\nExcel AI\nManual Accounting\nTally Prime"
      }
    ],
    featureDescription: "CBFA blends accounting tools with AI analytics...",
    learnFeatures: [
      { title: "Global Accounting Platforms" },
      { title: "Tax Filing Practice" },
      { title: "Power BI & SQL" },
      { title: "AI-Enabled Analysis" }
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
        designation: "Accounting, GST , Tally Prime, SAP & Zoho Books",
        qualification: "M.Com (Finance)",
        engagingPercentage: 78,
        helpfulPercentage: 92,
        clarityPercentage: 88,
        image: "https://routesacademy.b-cdn.net/images/mentor3.png"
      }
    ],
    certificate_img: [
      "https://routesacademy.b-cdn.net/images/certificate1.png",
      "https://routesacademy.b-cdn.net/images/Microsoft%20Certificate.png",
      "https://routesacademy.b-cdn.net/images/Zoho%20Certificate.png"
    ],
    certificate_title: [
      "Certification By National Skill Development Council",
      "Certification By Microsoft",
      "Certification By ZOHO"
    ]
  },

  // ------------------------------
  // COURSE 7
  // ------------------------------

  {
    id: 7,
    title: "AI Integrated Logistics & Supply Chain Management (1 Year)",
    description:
      "One-year logistics program covering end-to-end supply chain operations, digital tools, and professional skills.",
    card_description:
      "AI-integrated logistics program covering warehousing, transport, procurement, and supply chain strategy.",
    category: "Logistics",
    average_salary: "6-12 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 250,
    class_schedule: "As per convenience",
    enrolled_students: 3000,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/new_pics-4.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/Course%20Image%20(2).png",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/new_pics-4.png",
    duration: "1 Year",
    session_duration: 1200,
    session_duration_display: "1200 Hours",
    actual_price: 130000,
    actual_price_display: "₹1,30,000/-",
    offer_price: 130000,
    what_you_get: [
      "100% Placement Support",
      "International Certifications",
      "AI-Powered Curriculum",
      "Internship Exposure",
      "NSDC & UGC-approved Training"
    ],
    content_list: [
      "Principles of Logistics and Supply Chain Management",
      "Transportation and Distribution Management",
      "Warehousing and Inventory Management",
      "Procurement and Materials Management",
      "Business Communication & Professional Skills",
      "MS Office and Logistics Software Applications",
      "International Logistics and Documentation",
      "Port, Shipping and Cargo Management",
      "Supply Chain Planning and Operations Strategy",
      "E-Commerce and Digital Supply Chain",
      "Financial and Legal Aspects in Logistics",
      "Entrepreneurship and Project Management",
      "Learning Outcomes",
      "Career Opportunities"
    ],
    curriculum_detailed: [
      {
        topic: "Course Content",
        details:
          "Principles of Logistics and Supply Chain Management\nTransportation and Distribution Management\nWarehousing and Inventory Management\nProcurement and Materials Management\nBusiness Communication & Professional Skills\nMS Office and Logistics Software Applications\nInternational Logistics and Documentation\nPort, Shipping and Cargo Management\nSupply Chain Planning and Operations Strategy\nE-Commerce and Digital Supply Chain\nFinancial and Legal Aspects in Logistics\nEntrepreneurship and Project Management\nLearning Outcomes\nCareer Opportunities"
      }
    ],
    featureDescription:
      "The logistics program blends core operations knowledge with modern tools to build job-ready supply chain professionals.",
    learnFeatures: [
      { title: "Supply Chain Fundamentals" },
      { title: "Warehouse & Inventory" },
      { title: "Transport & Distribution" },
      { title: "Digital Logistics Tools" }
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 85 },
      { stars: 4, percentage: 8 },
      { stars: 3, percentage: 4 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 }
    ],
    mentor: [
      {
        id: 1,
        name: "Industry Specialists",
        designation: "Logistics & AI Experts",
        qualification: "BBA in Finance",
        engagingPercentage: 82,
        helpfulPercentage: 90,
        clarityPercentage: 86,
        image: "https://routesacademy.b-cdn.net/images/mentor.png"
      }
    ],
    certificate_img: [
      "https://routesacademy.b-cdn.net/images/certificate1.png",
      "https://routesacademy.b-cdn.net/images/ACE%20certificate.jpeg.jpg",
    ],
    certificate_title: [
      "Certification By National Skill Development Council",      
      "Certification by American Board of Education"
    ]
  },

  // ------------------------------
  // COURSE 8
  // ------------------------------
  {
    id: 8,
    title: "AI Integrated Data Science & Agentic AI",
    description:
      "One-year data science and Agentic AI program covering ML, deep learning, NLP, computer vision, and deployment.",
    card_description:
      "Agentic AI and data science track with ML, DL, NLP, CV, and deployment skills.",
    category: "AI, ML& Cloud",
    average_salary: "8-16 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 100,
    class_schedule: "As per convenience",
    enrolled_students: 120,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/Course_Card_Image-5.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/Course%20Image%20(3).png",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/new_pics-2.png",
    duration: "1 Year",
    session_duration: 1200,
    session_duration_display: "1200 Hours",
    actual_price: 140000,
    actual_price_display: "₹1,40,000/-",
    offer_price: 140000,
    what_you_get: [
      "Hands-on AI Curriculum",
      "Capstone Projects",
      "Industry Internship Support",
      "Career Guidance",
      "Flexible Learning Options"
    ],
    content_list: [
      "Python for Data Science & Automation",
      "Statistics & Mathematics for AI",
      "SQL & Big Data Foundation",
      "Advanced Machine Learning",
      "Deep Learning & Neural Networks",
      "Natural Language Processing (NLP)",
      "Computer Vision & Intelligent Systems",
      "Agentic AI & Generative System",
      "Model Deployment & AI Applications",
      "Capstone Projects & Career Launch",
      "Advanced Agentic AI & Autonomous Systems",
      "RAG Pipelines & LLM Engineering",
      "Recommendation Systems Engineering",
      "Cloud Computing for Data Science",
      "LOps & Production Deployment",
      "Industry Internship & Research Projects",
      "Career Acceleration & Leadership"
    ],
    curriculum_detailed: [
      {
        topic: "Course Content",
        details:
          "Python for Data Science & Automation\nStatistics & Mathematics for AI\nSQL & Big Data Foundation\nAdvanced Machine Learning\nDeep Learning & Neural Networks\nNatural Language Processing (NLP)\nComputer Vision & Intelligent Systems\nAgentic AI & Generative System\nModel Deployment & AI Applications\nCapstone Projects & Career Launch\nAdvanced Agentic AI & Autonomous Systems\nRAG Pipelines & LLM Engineering\nRecommendation Systems Engineering\nCloud Computing for Data Science\nLOps & Production Deployment\nIndustry Internship & Research Projects\nCareer Acceleration & Leadership"
      }
    ],
    featureDescription:
      "The program builds end-to-end AI skills, from data foundations to deployment and agentic systems.",
    learnFeatures: [
      { title: "Machine Learning" },
      { title: "Deep Learning & NLP" },
      { title: "Deployment & MLOps" },
      { title: "Agentic AI" }
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 88 },
      { stars: 4, percentage: 7 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 1 }
    ],
    mentor: [
      {
        id: 1,
        name: "Expert Faculty Team",
        designation: "AI & Data Science Specialists",
        qualification: "BBA in Finance",
        engagingPercentage: 85,
        helpfulPercentage: 93,
        clarityPercentage: 89,
        image: "https://routesacademy.b-cdn.net/images/mentor.png"
      }
    ],
    certificate_img: [
      "https://routesacademy.b-cdn.net/images/certificate1.png"
    ],
    certificate_title: [
      "Certification By National Skill Development Council"
    ]
  },


  // ------------------------------
  // COURSE 9
  // ------------------------------
  {
    id: 9,
    title: "Certified Business Analyst (CBA)",
    description:
      "The Certified Business Analyst (CBA) program, crafted in Calicut for Kerala's corporate market, prepares students for high-demand analytical roles with AI-Integrated Excel and Power BI—turning raw data into actionable insight and automation.",
    card_description:
      "Calicut-based CBA upskill program for Kerala: AI-Integrated Excel, Power BI dashboards, and workflow automation.",
    category: "Data and Analytics",
    average_salary: "7-14 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 88,
    class_schedule: "As per convenience",
    enrolled_students: 102,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/new_pics-3.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/Course%20Image%20(4).png",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/new_pics-3.png",
    duration: "6 months",
    session_duration: 1,
    actual_price: 46000,
    offer_price: 46000,
    what_you_get: [
      "100% Placement Support",
      "AI-powered Excel & Power BI Training",
      "Real Business Case Studies",
      "NSDC & UGC-approved Training",
      "Industry Expert Trainers"
    ],
    curriculum_detailed: [
      {
        topic: "Module 1: Foundations of Business Analysis",
        details: "Business processes & systems\nRequirements gathering\nProblem-solving frameworks\nIntroduction to analytics-driven decision making"
      },
      {
        topic: "Module 2: AI-Integrated Excel (Advanced Analytics)",
        details: "Advanced formulas & functions\nPivot tables, Power Query & data modeling\nDashboard creation\nAI-powered Excel tools for automation\nPredictive insights using Excel AI"
      },
      {
        topic: "Module 3: Power BI (Data Visualization & BI Tools)",
        details: "Power BI interface & workflow\nData cleaning & transformation\nDAX basics\nInteractive dashboards\nReal-time business intelligence reporting\nPublishing & sharing dashboards"
      },
      {
        topic: "Module 4: SQL Fundamentals (Optional Add-On)",
        details: "Basic queries\nFiltering, sorting & joins\nData extraction for analysis"
      },
      {
        topic: "Module 5: Introduction to Python for Analytics (Optional Add-On)",
        details: "Basics of data analysis\nWorking with pandas\nVisualization fundamentals"
      },
      {
        topic: "Module 6: Corporate Reporting & Insights",
        details: "Building business reports\nKPI identification and interpretation\nPreparing management-level insights\nIndustry case studies"
      },
      {
        topic: "Module 7: AI Tools for Analysts",
        details: "AI-driven data analysis tools\nReport automation\nAI-based forecasting\nWorkflow streamlining"
      },
      {
        topic: "Module 8: Soft Skills & Professional Development",
        details: "Communication for analysts\nPresentation skills\nResume building & interview training\nCorporate etiquette"
      }
    ],
    featureDescription:
      "The CBA program combines AI-powered learning with Excel and Power BI, offering fully practical, project-oriented training. Students work on real business case studies and dashboard projects, gaining skills used by top MNCs. Industry expert trainers with real corporate experience ensure students graduate job-ready for roles as Data Analysts, Business Analysts, Reporting Specialists, and Process Consultants.",
    learnFeatures: [
      { title: "AI-Integrated Excel" },
      { title: "Power BI Mastery" },
      { title: "Business Intelligence" },
      { title: "Dashboard Creation" }
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 6 },
      { stars: 3, percentage: 4 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 }
    ],
    mentor: [
      {
        id: 1,
        name: "Business Analytics Experts",
        designation: "Data & Analytics Specialists",
        qualification: "BBA in Finance",
        engagingPercentage: 84,
        helpfulPercentage: 91,
        clarityPercentage: 88,
        image: "https://routesacademy.b-cdn.net/images/mentor.png"
      }
    ],
    certificate_img: [
      "https://routesacademy.b-cdn.net/images/certificate1.png"
    ],
    certificate_title: [
      "Certification By National Skill Development Council"
    ]
  },

  // ------------------------------
  // COURSE 10
  // ------------------------------

  {
    id: 10,
    title: "Human Resource Business Program (HR BP)",
    description:
      "The Human Resource Business Program (HR BP) prepares learners to become modern, strategic HR professionals who can manage people, processes, and organizational development. This program covers the complete HR lifecycle—from recruitment to payroll, compliance, performance management, HR analytics, Excel mastery, and HRMS tools—making students job-ready for HR roles in India and GCC.",
    card_description:
      "Master the complete HR lifecycle from recruitment to payroll with HR analytics and HRMS tools.",
    category: "HR & People Analytics",
    average_salary: "6-12 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 94,
    class_schedule: "As per convenience",
    enrolled_students: 110,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/new_pics-1.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/Course%20Image%20(5).png",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/new_pics-1.png",
    duration: "6 months",
    session_duration: 1,
    actual_price: 44000,
    offer_price: 44000,
    what_you_get: [
      "100% Placement Support",
      "Complete HR Generalist Training",
      "Dedicated Excel for HR Module",
      "HRMS & Payroll Software Exposure",
      "Real HR Document Preparation"
    ],
    curriculum_detailed: [
      {
        topic: "Module 1: Fundamentals of Human Resource Management",
        details: "Scope and functions of HR\nHR roles in modern organizations\nHR strategy & business alignment\nHR policies & procedures"
      },
      {
        topic: "Module 2: Talent Acquisition & Recruitment",
        details: "Job description drafting\nSourcing techniques\nResume screening & shortlisting\nInterview coordination\nApplicant Tracking Systems (ATS)\nOnboarding & induction"
      },
      {
        topic: "Module 3: Payroll Management",
        details: "CTC structure & salary components\nAttendance & leave management\nPayroll processing\nPayslips, reimbursement & compliances\nHands-on payroll software"
      },
      {
        topic: "Module 4: Performance Management",
        details: "Goals, KPIs & KRAs\nAppraisal systems\n360-degree feedback\nEmployee engagement initiatives\nReward & recognition"
      },
      {
        topic: "Module 5: Labour Laws & Compliance",
        details: "Shops & Commercial Establishment Act\nPF, ESI, Bonus & Gratuity\nPOSH Act\nEmployer statutory responsibilities\nHR compliance documentation"
      },
      {
        topic: "Module 6: Excel for HR (Practical Module)",
        details: "HR-focused Excel skills\nVLOOKUP, XLOOKUP, Pivot Tables\nAttendance sheets, payroll sheets, salary breakup\nHR dashboards & MIS reporting\nData cleaning & automation for HR tasks"
      },
      {
        topic: "Module 7: HR Analytics",
        details: "HR metrics & KPIs\nHiring, attrition, productivity analytics\nDashboard building using Excel\nData-driven decision-making"
      },
      {
        topic: "Module 8: HRMS & Digital HR Tools",
        details: "Introduction to HRMS\nEmployee database management\nDigital attendance, payroll systems\nRecruitment & performance management tools\nCloud HR workflow tools"
      },
      {
        topic: "Module 9: HR Operations & Administration",
        details: "Employee lifecycle management\nHR documentation & letters\nHR audits & file management\nCorporate HR reporting"
      },
      {
        topic: "Module 10: Soft Skills & Corporate Behaviour",
        details: "Communication skills\nConflict management\nProfessional etiquette\nHR interview preparation\nResume building"
      },
      {
        topic: "Module 11: Practical HR Training / Internship",
        details: "Real HR document preparation\nPayroll and recruitment practice\nHRMS live simulations\nInternship support with HR departments"
      }
    ],
    featureDescription:
      "The HR BP program provides complete HR Generalist, HR Operations, and HR Analytics training with dedicated Excel for HR modules. Faculty with 10–20 years of HR industry experience teach using real HR documents and practical simulations. Students gain exposure to HRMS and payroll software, preparing them for HR roles in India and GCC countries.",
    learnFeatures: [
      { title: "Complete HR Lifecycle" },
      { title: "Excel for HR Analytics" },
      { title: "HRMS & Payroll Tools" },
      { title: "Labour Law Compliance" }
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 89 },
      { stars: 4, percentage: 6 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 1 }
    ],
    mentor: [
      {
        id: 1,
        name: "Senior HR Professionals",
        designation: "HR & People Analytics Experts",
        qualification: "BBA in Finance",
        engagingPercentage: 86,
        helpfulPercentage: 92,
        clarityPercentage: 90,
        image: "https://routesacademy.b-cdn.net/images/mentor.png"
      }
    ],
    certificate_img: [
      "https://routesacademy.b-cdn.net/images/certificate1.png"
    ],
    certificate_title: [
      "Certification By National Skill Development Council"
    ]
  },


  // ------------------------------
  // COURSE 11
  // ------------------------------
  
  {
    id: 11,
    title: "AI Integrated Digital Marketing",
    description:
      "The AI Integrated Digital Marketing program is designed to create next-generation digital marketers who can leverage Artificial Intelligence to plan campaigns, analyze performance, and drive business growth. This program blends traditional digital marketing fundamentals with AI tools, automation platforms, content generation, analytics, and performance tracking, giving learners a strong competitive edge in today's digital-first world.",
    card_description:
      "Leverage AI to plan campaigns, analyze performance & drive business growth in digital marketing.",
    category: "Digital Marketing & Growth",
    average_salary: "6-13 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 96,
    class_schedule: "As per convenience",
    enrolled_students: 115,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/pics.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/Course%20Image%20(6).png",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/pics.png",
    duration: "6 months",
    session_duration: 1,
    actual_price: 45000,
    offer_price: 45000,
    what_you_get: [
      "100% Placement Support",
      "Live Google & Meta Ad Campaigns",
      "Exclusive AI Lab for Marketing",
      "Google + Meta Certifications",
      "Real Project Execution"
    ],
    curriculum_detailed: [
      {
        topic: "Module 1: Introduction to Digital Marketing",
        details: "Digital marketing ecosystem\nCustomer journey & funnel\nBrand positioning & strategy\nModern marketing trends"
      },
      {
        topic: "Module 2: AI for Digital Marketing",
        details: "AI content generation tools\nAI automation for social media\nAI for SEO, ads & market research\nPredictive analytics for campaigns\nChatGPT, Gemini & other AI tools"
      },
      {
        topic: "Module 3: Social Media Marketing (SMM)",
        details: "Facebook, Instagram & YouTube marketing\nContent planning & calendar creation\nAudience targeting\nOrganic growth strategies\nAI-assisted creative production"
      },
      {
        topic: "Module 4: Search Engine Optimization (SEO)",
        details: "On-page & off-page SEO\nKeyword research using AI\nBacklink strategies\nTechnical SEO basics\nSEO content writing & AI optimization"
      },
      {
        topic: "Module 5: Google Ads & Performance Marketing",
        details: "Google Ads setup & structure\nSearch, Display, Video & Remarketing ads\nCampaign budgeting\nConversion tracking\nAI tools for ad optimization"
      },
      {
        topic: "Module 6: Meta Ads (Facebook & Instagram Ads)",
        details: "Ad Manager introduction\nCreative testing strategies\nAudience segmentation\nPixel setup & event tracking\nAI-driven ad recommendations"
      },
      {
        topic: "Module 7: Content Writing & AI Copywriting",
        details: "Copywriting frameworks\nSocial media content writing\nLanding page content\nAI writing workflows\nBrand voice development"
      },
      {
        topic: "Module 8: Website Development (No-Code Tools)",
        details: "WordPress basics\nTheme customization\nOn-page SEO setup\nLanding page creation with no-code AI tools"
      },
      {
        topic: "Module 9: Email Marketing & Automation",
        details: "Email automation tools\nLead nurturing\nFunnel creation\nAI-driven personalization"
      },
      {
        topic: "Module 10: Analytics & Reporting",
        details: "Google Analytics 4 (GA4)\nSocial media analytics\nDashboard building\nAI dashboards & insight generation"
      },
      {
        topic: "Module 11: Influencer & Branding Strategies",
        details: "Influencer collaboration\nBrand building\nCustomer psychology & communication"
      },
      {
        topic: "Module 12: AI Lab & Soft Skills",
        details: "Real-time AI marketing experiments\nLive project execution\nPresentation skills\nInterview training & resume building"
      }
    ],
    featureDescription:
      "The AI Integrated Digital Marketing program combines complete digital marketing training with AI-based marketing automation. Students work on live ad campaigns on Google & Meta, participate in an exclusive AI Lab for marketing automation, and gain practical experience through real case studies. The program prepares learners to build brands, run ads, optimize strategies, and use AI to scale marketing faster and smarter.",
    learnFeatures: [
      { title: "AI Marketing Tools" },
      { title: "Google & Meta Ads" },
      { title: "SEO & Content Strategy" },
      { title: "Analytics & Automation" }
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 90 },
      { stars: 4, percentage: 6 },
      { stars: 3, percentage: 2 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 1 }
    ],
    mentor: [
      {
        id: 1,
        name: "Digital Marketing Experts",
        designation: "AI & Marketing Specialists",
        qualification: "BBA in Finance",
        engagingPercentage: 88,
        helpfulPercentage: 94,
        clarityPercentage: 91,
        image: "https://routesacademy.b-cdn.net/images/mentor.png"
      }
    ],
    certificate_img: [
      "https://routesacademy.b-cdn.net/images/certificate1.png"
    ],
    certificate_title: [
      "Certification By National Skill Development Council"
    ]
  }
];
