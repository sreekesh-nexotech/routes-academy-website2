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
        designation: "Accounting, GST , Tally Prime, SAP & Zoho Books",
        qualification: "M.Com (Finance)",
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
        designation: "Microsoft Certified Trainer, SQL & Python",
        qualification: "M.Sc. Computer Science (Data Science)",
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
        designation: "Excel Training, Accounting & Data Management",
        qualification: "B.Com (Co-operation), ITI (COPA)",
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
    specific_course_img: "https://routesacademy.b-cdn.net/images/Course%20Image%20(1).png",
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
        name: "Harsha T",
        designation: "Accounting, GST , Tally Prime, SAP & Zoho Books",
        qualification: "M.Com (Finance)",
        engagingPercentage: 78,
        helpfulPercentage: 92,
        clarityPercentage: 88,
        image: "https://routesacademy.b-cdn.net/images/mentor3.png"
      }
    ],
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png"
  },
  {
    id: 7,
    title: "AI-Integrated Logistics & Supply Chain Management",
    description:
      "The AI-Integrated Logistics & Supply Chain Management program is designed to prepare learners for the future of global trade, operations, and supply chain intelligence. This program blends core logistics knowledge with modern AI applications, helping students master end-to-end supply chain workflows, automation tools, predictive analytics, and smart decision-making.",
    category: "Logistics",
    average_salary: "6-12 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 85,
    class_schedule: "As per convenience",
    enrolled_students: 95,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/new_pics-4.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/Course%20Image%20(2).png",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/new_pics-4.png",
    duration: "6 months",
    session_duration: 1,
    actual_price: 45000,
    offer_price: 45000,
    what_you_get: [
      "100% Placement Support",
      "International Certifications",
      "AI-Powered Curriculum",
      "Internship Exposure",
      "NSDC & UGC-approved Training"
    ],
    curriculum_detailed: [
      {
        topic: "Module 1: Introduction to Logistics & Supply Chain",
        details: "Fundamentals of logistics\nComponents of supply chain\nIndian & global logistics landscape\nDigitisation in supply chain"
      },
      {
        topic: "Module 2: Warehousing & Inventory Management",
        details: "Warehouse setup & operations\nInventory control techniques\nDemand forecasting\nAI-based warehouse automation systems"
      },
      {
        topic: "Module 3: Transportation & Distribution",
        details: "Fleet management\nRoute planning and load optimization\nAI-powered tracking, GPS & telematics\nLast-mile delivery trends"
      },
      {
        topic: "Module 4: Procurement & Vendor Management",
        details: "Purchasing strategies\nSupplier evaluation\nE-procurement systems\nData-driven decision making"
      },
      {
        topic: "Module 5: Artificial Intelligence in Logistics",
        details: "Predictive analytics\nMachine learning basics for logistics\nRobotics, IoT & automation\nDigital twins and smart supply chain"
      },
      {
        topic: "Module 6: Logistics Software & Tools",
        details: "SAP basics\nTally Prime for inventory\nWMS, ERP, CRM tools\nAI dashboards & BI tools"
      },
      {
        topic: "Module 7: Soft Skills & Professional Development",
        details: "Communication and documentation\nInterview training\nGroup discussions\nPersonality development"
      },
      {
        topic: "Module 8: Internship / Practical Learning",
        details: "Live projects\nIndustry visits\nHands-on logistics operations"
      }
    ],
    featureDescription:
      "The AI-Integrated Logistics & Supply Chain Management program blends core logistics knowledge with modern Artificial Intelligence applications. This industry-aligned curriculum ensures students become job-ready professionals capable of handling warehousing, transportation, inventory planning, procurement, and AI-enabled optimization processes used by top logistics companies worldwide.",
    learnFeatures: [
      { title: "AI-Powered Supply Chain" },
      { title: "Warehouse Automation" },
      { title: "Predictive Analytics" },
      { title: "Smart Logistics Tools" }
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
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png"
  },
  {
    id: 8,
    title: "Certified Business & Financial Analyst (CBFA)",
    description:
      "The Certified Business & Financial Analyst (CBFA) program is crafted to build highly skilled finance and business professionals equipped with modern accounting tools, global taxation knowledge, and AI-powered analytical skills. This program blends practical software training with essential financial theory, preparing learners for real corporate roles in India and abroad, especially GCC countries.",
    category: "Finance, Accounting & ERP",
    average_salary: "8-16 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 92,
    class_schedule: "As per convenience",
    enrolled_students: 108,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/new_pics-2.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/Course%20Image%20(3).png",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/new_pics-2.png",
    duration: "6 months",
    session_duration: 1,
    actual_price: 48000,
    offer_price: 48000,
    what_you_get: [
      "100% Placement Support (India & GCC)",
      "10+ Global Accounting Platforms",
      "Real Filing Practice (GST, ITR, UAE VAT)",
      "AI-Integrated Financial Analysis",
      "NSDC & UGC-approved Training"
    ],
    curriculum_detailed: [
      {
        topic: "Module 1: SAP for Finance & Business Operations",
        details: "Introduction to SAP ERP\nSAP FICO basics\nLedger, asset & cost center management\nBusiness process integration in SAP"
      },
      {
        topic: "Module 2: UAE VAT & Corporate Tax",
        details: "UAE VAT concepts & compliance\nCorporate Tax framework (9% CT)\nReturn filing procedures\nDocumentation & business compliance\nGCC taxation overview"
      },
      {
        topic: "Module 3: AI-Enabled Excel for Decision Making",
        details: "Advanced formulas & functions\nPivot tables & dashboards\nAI-powered automation & insights\nPredictive analysis using Excel AI tools"
      },
      {
        topic: "Module 4: Zoho Books Accounting",
        details: "Company setup\nInvoicing, inventory & banking\nGST integration\nReports generation & automation"
      },
      {
        topic: "Module 5: GST Filing & Theory (India)",
        details: "GST concepts & applicability\nInput/output tax mechanisms\nRegistration & compliance rules\nGSTR-1, 3B & annual return filing"
      },
      {
        topic: "Module 6: GST in Tally Prime (Practical)",
        details: "GST setup in Tally\nLedger & voucher entries\nGST reports & reconciliation\nE-invoice & E-way bill integration"
      },
      {
        topic: "Module 7: Peachtree (Sage 50) Accounting",
        details: "Company creation\nVendor/customer management\nFinancial statements & reporting\nMiddle East job-oriented training"
      },
      {
        topic: "Module 8: QuickBooks Online (International Accounting)",
        details: "Cloud accounting setup\nBank reconciliation\nSales, purchases & payroll\nReporting for SMEs & startups"
      },
      {
        topic: "Module 9: AI Lab & Soft Skill Development",
        details: "AI tools for accounting & analysis\nAutomation in business operations\nCommunication skills\nInterview preparation & resume building\nCorporate etiquette & career readiness"
      }
    ],
    featureDescription:
      "The CBFA program combines hands-on training in 10+ global accounting platforms with AI-powered financial analysis. With industry-standard tools like SAP, QuickBooks, Zoho, Tally, and real filing practice in GST, ITR, and UAE VAT, students become job-ready from day one. This program opens doors to finance careers in India and GCC countries.",
    learnFeatures: [
      { title: "Global Accounting Tools" },
      { title: "UAE VAT & Corporate Tax" },
      { title: "AI-Powered Excel Analysis" },
      { title: "Real GST & ITR Filing" }
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
        designation: "Finance & Accounting Specialists",
        qualification: "BBA in Finance",
        engagingPercentage: 85,
        helpfulPercentage: 93,
        clarityPercentage: 89,
        image: "https://routesacademy.b-cdn.net/images/mentor.png"
      }
    ],
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png"
  },
  {
    id: 9,
    title: "Certified Business Analyst (CBA)",
    description:
      "The Certified Business Analyst (CBA) program is designed to prepare students for high-demand analytical roles across corporate, IT, finance, and operational sectors. With a strong focus on AI-Integrated Excel and Power BI, this program equips learners with the ability to turn raw data into insights, build dashboards, automate workflows, and support strategic decision-making.",
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
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png"
  },
  {
    id: 10,
    title: "Human Resource Business Program (HR BP)",
    description:
      "The Human Resource Business Program (HR BP) prepares learners to become modern, strategic HR professionals who can manage people, processes, and organizational development. This program covers the complete HR lifecycle—from recruitment to payroll, compliance, performance management, HR analytics, Excel mastery, and HRMS tools—making students job-ready for HR roles in India and GCC.",
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
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png"
  },
  {
    id: 11,
    title: "AI Integrated Digital Marketing",
    description:
      "The AI Integrated Digital Marketing program is designed to create next-generation digital marketers who can leverage Artificial Intelligence to plan campaigns, analyze performance, and drive business growth. This program blends traditional digital marketing fundamentals with AI tools, automation platforms, content generation, analytics, and performance tracking, giving learners a strong competitive edge in today's digital-first world.",
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
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png"
  }
];
