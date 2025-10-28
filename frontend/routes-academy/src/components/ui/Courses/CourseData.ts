// src/components/ui/Courses/courseData.ts

export interface LearnFeature {
  title: string;
  // description: string;
}

export interface MentorReviewBreakdown {
  stars: number;
  percentage: number;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  average_salary: string;
  mode_of_conduct: string;
  placed_students: number;
  emi: boolean;
  image_url: string;
  specific_course_img:string; 
  class_schedule:string;
  enrolled_students:number;
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
  featureDescription:string;
  learnFeatures: LearnFeature[]; 
  mentorRatingBreakdown: MentorReviewBreakdown[]; 
  mentor: {
    name: string;
    role: string;
    image: string;
    rating: number;
    bio: string;
    total_reviews: number;
  };
  certificate_img: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Career Program in Accounting & Taxation",
    description:
      "The CPAT (Career Program in Accounting & Taxation) is a 6-month comprehensive program designed to bridge the gap 'From Campus to Corporate' by providing extensive training in both foundational and advanced accounting and taxation skills, along with Placement Assistance.",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 0,
    class_schedule:"As per convenience",
    enrolled_students: 0,
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
      "Flexible Learning Options",
    ],
    
    curriculum_detailed: [
      { topic: "Foundation Level: Core Accounting & Statutory Compliance", details: "Practical Accounting\nTally Prime\nGoods & Service Tax (GST)\nIncome Tax\nMS Office\nESI & PF (Employee State Insurance & Provident Fund)\nBusiness Law" },
      { topic: "Associate Level: Advanced Tools & Professional Skills", details: "AI-Enabled Excel\nZoho Books\nGST Practical Filing (Simulation Software)\nAdvanced Tally Prime\nIntroduction to SAP S/4HANA FI\nLanguage Lab\nProfessional Skills" },
    ],
    featureDescription:"The CPAT program is designed to transform students into corporate-ready accounting professionals. This comprehensive course covers everything from basic accounting principles to advanced ERP systems like SAP, ensuring you're equipped with both technical expertise and professional skills required in today's accounting and taxation industry.",
    learnFeatures: [
      { title: "Practical Accounting Skills", },
      { title: "GST & Income Tax",  },
      { title: "Advanced Excel & SAP",},
      { title: "Professional Development",},
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],
    mentor: {
      name: "Muhammed Suhail",
      role: "Accounting & Taxation Faculty",
      image: "https://routesacademy.b-cdn.net/images/mentor.png",
      rating: 5.0,
      bio: "Experienced accounting and taxation professional dedicated to bridging the gap between campus and corporate through practical, industry-relevant training.",
      total_reviews: 150,
    },
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png",
  },
   {
    id: 2,
    title: "Data Analysis",
    description:
      "Unlock the power of data with our comprehensive Data Analysis Course, designed to turn raw information into valuable business insights. This program blends technical tools and analytical thinking, helping you master real-world data handling and decision-making skills.",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 0,
    class_schedule:"As per convenience",
    enrolled_students: 0,
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
      "Flexible Learning Options",
    ],
    
    curriculum_detailed: [
      { topic: "Module 1: Advanced Excel for Data Analysis", details: "Master advanced formulas, logical and lookup functions (IF, VLOOKUP, INDEXMATCH).\nPerform data cleaning, analysis, and visualization.\nAutomate repetitive tasks." },
      { topic: "Module 2: SQL for Data Management", details: "Learn how to extract, filter, and summarize data using SELECT, WHERE, and GROUP BY.\nWork with multiple tables using JOINs.\nManage and clean datasets for analysis." },
      { topic: "Module 3: Power BI for Business Intelligence", details: "Learn to import, model, and clean data in Power BI.\nDesign professional dashboards and reports.\nUse DAX functions to perform advanced calculations." },
      { topic: "Module 4: Python for Data Analysis", details: "Learn data manipulation with Pandas and NumPy.\nVisualize trends using Matplotlib and Seaborn.\nExplore real-world datasets and perform basic predictive analysis." },
    ],
    featureDescription:"Data analysis transforms raw data into actionable insights that drive business decisions. This comprehensive course equips you with the essential tools and techniques used by professional data analysts, including Excel, SQL, Power BI, and Python. You'll learn to clean, process, visualize, and interpret data to solve real-world business problems.",
    learnFeatures: [
      { title: "Advanced Excel Mastery", },
      { title: "SQL Database Skills",  },
      { title: "Power BI Dashboards",},
      { title: "Python Data Tools",},
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],
    mentor: {
      name: "Adithya",
      role: "Data Analysis Faculty",
      image: "https://routesacademy.b-cdn.net/images/mentor.png",
      rating: 5.0,
      bio: "Helps students turn messy data into useful insights, automate boring tasks and build the kind of sheets companies truly need.",
      total_reviews: 150,
    },
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png",
  },
   {
    id: 3,
    title: "Power BI and SQL Program",
    description:
      "SQL is the backbone of all data-driven companies. Power BI is the most in-demand tool for visualization & reporting. Together, they make you a complete Business Intelligence professional.",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 0,
    class_schedule:"As per convenience",
    enrolled_students: 0,
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
      "Flexible Learning Options",
    ],
    
    curriculum_detailed: [
      { topic: "Module 1: SQL (Databases & Querying)", details: "Basics of databases & data models\nSELECT, WHERE, GROUP BY, HAVING, ORDER BY\nJoins (INNER, LEFT, RIGHT, FULL)\nSubqueries & advanced filtering\nQuery optimization for large datasets" },
      { topic: "Module 2: Power BI (Visualization & Reporting)", details: "Importing data from SQL/Excel/cloud sources\nData modeling & DAX functions\nDesigning interactive dashboards & reports\nAI visuals & predictive insights\nPublishing & sharing reports securely" },
    ],
    featureDescription:"Master the complete Business Intelligence stack with SQL and Power BI. Learn to query databases efficiently, transform raw data into meaningful insights, and create stunning interactive dashboards that drive business decisions. This program combines technical database skills with modern visualization techniques.",
    learnFeatures: [
      { title: "SQL Database Mastery", },
      { title: "Advanced Querying",  },
      { title: "Power BI Dashboards",},
      { title: "Data Modeling & DAX",},
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],
    mentor: {
      name: "Abhin Prakash",
      role: "Business Intelligence Faculty",
      image: "https://routesacademy.b-cdn.net/images/mentor.png",
      rating: 5.0,
      bio: "Expert in Business Intelligence tools and data visualization, helping professionals master SQL and Power BI for real-world applications.",
      total_reviews: 150,
    },
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png",
  },
   {
    id: 4,
    title: "Power BI",
    description:
      "Power BI is a business-analytics tool/platform from Microsoft that lets you connect to a wide variety of data sources, transform & model data, build interactive reports & dashboards, and share/collaborate. Learning Power BI lets you turn raw data into actionable insights, support data-driven decision making, and often qualifies you for roles like data analyst, business intelligence developer or reporting specialist.",
    average_salary: "TBD",
    mode_of_conduct: "Offline / Online",
    placed_students: 0,
    class_schedule:"As per convenience",
    enrolled_students: 0,
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
      "Flexible Learning Options",
    ],
    
    curriculum_detailed: [
      { topic: "Module 1: Introduction to Power BI – Discover the Power of Data", details: "Power BI concepts\nBusiness Intelligence (BI)\nKey concepts: Datasets, Reports, Dashboards, Workspaces" },
      { topic: "Module 2: Data Extraction & Transformation – Shape Your Data Story", details: "Connect to multiple data sources (Excel, Web, SQL, etc.)\nUnderstanding data connection modes\nData cleaning & transformation techniques\nAutomating Data Refresh & Maintenance" },
      { topic: "Module 3: Data Modeling – Build Strong Analytical Foundations", details: "Importance of Data Modeling\nStar Schema vs Snowflake Schema\nManage relationships between tables" },
      { topic: "Module 4: DAX – Add Intelligence to Your Reports", details: "DAX Fundamentals: Syntax & Logic\nCalculated Columns vs Measures\nEssential DAX Functions\nAdvanced DAX Patterns and Optimization" },
      { topic: "Module 5: Data Visualization & Storytelling — Turning Data into Insights", details: "Introduction to Power BI Visuals\nWorking with Charts: Column, Bar, Line, Pie, Area\nAdvanced Visuals: KPI, Card, Gauge, Funnel, Map" },
      { topic: "Module 6: Advanced Power BI — Beyond Visualization", details: "AI Visuals: Key Influencers, Decomposition Tree\nWhat-If Parameters and Scenario Analysis" },
    ],
    featureDescription:"With organisations increasingly needing to visualise and democratise data, knowing Power BI is a strong asset. This comprehensive course takes you from beginner to advanced, covering data connections, transformations, modeling, DAX, and creating compelling visualizations that tell data stories.",
    learnFeatures: [
      { title: "Data Connectivity", },
      { title: "DAX Mastery",  },
      { title: "Interactive Dashboards",},
      { title: "AI-Powered Insights",},
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],
    mentor: {
      name: "Abhin Prakash",
      role: "Power BI & Analytics Faculty",
      image: "https://routesacademy.b-cdn.net/images/mentor.png",
      rating: 5.0,
      bio: "Expert in Power BI and data visualization, specializing in transforming complex data into actionable business intelligence solutions.",
      total_reviews: 150,
    },
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png",
  },
   {
    id: 5,
    title: "AI-Integrated Excel",
    description:
      "Unlock the next level of data management and analysis with our AI-Integrated Excel Course — designed to help you combine the power of Microsoft Excel with Artificial Intelligence tools. Whether you're a student, working professional, or entrepreneur, this course will teach you how to automate workflows, gain smarter insights, and make data-driven decisions with ease.",
    average_salary: "TBD",
    mode_of_conduct: "Offline / Online",
    placed_students: 0,
    class_schedule:"As per convenience",
    enrolled_students: 0,
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
      "Flexible Learning Options",
    ],
    
    curriculum_detailed: [
      { topic: "Module 1: Excel Fundamentals & Advanced Tools", details: "Learn data cleaning, formulas, PivotTables, Power Query, and visualization" },
      { topic: "Module 2: AI-Powered Features in Excel", details: "Use Excel Copilot, Ideas, and Analyze Data to summarize, predict, and visualize insights instantly" },
      { topic: "Module 3: Automation & Data Efficiency", details: "Integrate AI to automate repetitive tasks, generate reports, and enhance productivity" },
      { topic: "Module 4: AI + Excel Integrations", details: "Connect Excel with ChatGPT, Power BI, and Python to analyze and forecast data intelligently" },
      { topic: "Module 5: Real-World Projects", details: "Hands-on practice with business data, marketing analytics, and financial dashboards enhanced by AI" },
    ],
    featureDescription:"Transform your Excel skills with AI integration. Learn to leverage cutting-edge AI tools like Excel Copilot, ChatGPT, and Python to automate tasks, gain predictive insights, and create intelligent dashboards. This course bridges traditional Excel expertise with modern AI capabilities for maximum productivity.",
    learnFeatures: [
      { title: "Advanced Excel Techniques", },
      { title: "AI-Powered Analytics",  },
      { title: "Smart Automation",},
      { title: "AI Tool Integration",},
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],
    mentor: {
      name: "TBD",
      role: "AI & Excel Faculty",
      image: "https://routesacademy.b-cdn.net/images/mentor.png",
      rating: 5.0,
      bio: "Expert in combining traditional Excel skills with modern AI tools to deliver intelligent business solutions.",
      total_reviews: 150,
    },
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png",
  },
   {
    id: 6,
    title: "SAP S/4HANA FICO",
    description:
      "The SAP S/4HANA FICO – Learning Hub Business Edition Program by ROUTE Academy is designed to equip learners with comprehensive knowledge of SAP Financial Accounting (FI) and Controlling (CO) modules. Through 80+ hours of hands-on, expert-led sessions, participants gain practical skills in financial configuration, account management, taxation, and compliance, along with access to live SAP servers for real-time practice.",
    average_salary: "TBD",
    mode_of_conduct: "Offline / Online",
    placed_students: 0,
    class_schedule:"As per convenience",
    enrolled_students: 0,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/pics-6.png",
    specific_course_img: "https://routesacademy.b-cdn.net/images/specific-courses-hero6.svg",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/course3.png", 
    duration: "TBD",
    session_duration: 1,
    actual_price: 33500,
    offer_price: 33500,
    what_you_get: [
      "100% Placement Assistance",
      "Training through Real-Time Case Studies & Mock Filings",
      "Use of AI-Integrated Accounting Tools",
      "Valid Industry Certifications",
    ],
    
    curriculum_detailed: [
      { topic: "Module 1: Getting Started with SAP & ERP", details: "Introduction to SAP ecosystem\nUnderstanding ERP fundamentals\nNavigation and basic operations" },
      { topic: "Module 2: Core Financial Configuration", details: "Company code setup\nChart of accounts\nFiscal year variants\nCurrency configuration" },
      { topic: "Module 3: Accounts Management: AP, AR & BP", details: "Accounts Payable management\nAccounts Receivable processes\nBusiness Partner integration\nVendor and customer master data" },
      { topic: "Module 4: Taxation, Compliance & Statements", details: "Tax configuration and processing\nRegulatory compliance requirements\nFinancial statements generation\nReporting and analytics" },
      { topic: "Module 5: Asset Accounting & House Banking", details: "Asset master data and depreciation\nAsset acquisition and retirement\nHouse bank configuration\nPayment processing" },
      { topic: "Module 6: Controlling (CO) Essentials", details: "Cost center accounting\nProfit center accounting\nInternal orders\nProduct costing basics" },
    ],
    featureDescription:"This program bridges the gap between academics and corporate requirements, preparing learners for high-demand roles in global enterprises. Whether you're a student, fresher, or professional, the course empowers you to confidently step into the world of SAP-driven business solutions with practical job-oriented training and expert mentorship.",
    learnFeatures: [
      { title: "Practical Job-Oriented Training", },
      { title: "Live SAP Server Access",  },
      { title: "Expert Mentors",},
      { title: "Interview & Professional Grooming",},
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],
    mentor: {
      name: "TBD",
      role: "SAP FICO Consultant",
      image: "https://routesacademy.b-cdn.net/images/mentor.png",
      rating: 5.0,
      bio: "Experienced SAP FICO professional with expertise in financial accounting and controlling modules, specializing in S/4HANA implementations.",
      total_reviews: 150,
    },
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png",
  },
];

