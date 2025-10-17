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
    title: "Data Engineer",
    description:
      "This short and intensive training equips you to be a Data Engineer. You'll master essential tools and techniques for data warehousing, ETL, and robust data pipeline construction. Land your dream job with our dedicated placement support.",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 120,
    class_schedule:"Sat & Sun",
    enrolled_students:180,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/coursecard-1.svg",
    specific_course_img: "https://routesacademy.b-cdn.net/images/specific-courses-hero.svg",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/course1.png", 
    duration: "6 months",
    session_duration: 4,
    actual_price: 49999,
    offer_price: 29999,
    what_you_get: [
      "24/7 Doubt Support",
      "Dedicated Placement Support",
      "Industry Relevant Curriculum",
      "Flexible Learning Options",
    ],
    
    curriculum_detailed: [
      { topic: "Module 1: Programming Fundamentals (Python)", details: "Data structures, algorithms, and libraries for data handling." },
      { topic: "Module 2: Database & SQL Mastery", details: "Advanced SQL, NoSQL databases, and efficient querying." },
      { topic: "Module 3: Data Warehousing Concepts", details: "Dimensional modeling, star and snowflake schemas." },
      { topic: "Module 4: ETL / ELT Pipelines & Tools", details: "Hands-on implementation of robust data pipelines using Airflow." },
      { topic: "Module 5: Cloud Data Services (AWS/Azure)", details: "Introduction to cloud-based data solutions and services." },
      { topic: "Module 6: Capstone Project & Interview Prep", details: "Build a complete end-to-end data solution and mock interviews." },
    ],
    featureDescription:"Machine learning is a data analysis method that is used to automate analytical model building. It is a subset of Artificial Intelligence (AI) and focuses on analyzing structures and patterns in data to allow reasoning, learning, and decision-making without human interactions. In simple terms, Machine learning will let the user feed large volumes of data to a computer algorithm and make the device process the data to offer recommendations that are data-driven and decisions that are only based on the data offered.",
    learnFeatures: [
      { title: "Comprehensive Curriculum", },
      { title: "Dedicated Support",  },
      { title: "Real-World Projects",},
      { title: "Placement Assistance",},
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],
    mentor: {
      name: "Mr. Sharath K",
      role: "Faculty | 10+ yrs Exp. in Data Engg.",
      image: "https://routesacademy.b-cdn.net/images/mentor.png",
      rating: 5.0,
      bio: "Sharath is a seasoned Data Engineer with over a decade of experience designing and managing large-scale data systems for major tech companies. He focuses on practical, real-world applications.",
      total_reviews: 450,
    },
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png",
  },
   {
    id: 2,
    title: "Data Engineer",
    description:
      "This short and intensive training equips you to be a Data Engineer. You'll master essential tools and techniques for data warehousing, ETL, and robust data pipeline construction. Land your dream job with our dedicated placement support.",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 120,
    class_schedule:"Sat & Sun",
    enrolled_students:180,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/coursecard-2.svg",
    specific_course_img: "https://routesacademy.b-cdn.net/images/specific-courses-hero2.svg",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/course2.png", 
    duration: "6 months",
    session_duration: 4,
    actual_price: 49999,
    offer_price: 29999,
    what_you_get: [
      "24/7 Doubt Support",
      "Dedicated Placement Support",
      "Industry Relevant Curriculum",
      "Flexible Learning Options",
    ],
    
    curriculum_detailed: [
      { topic: "Module 1: Programming Fundamentals (Python)", details: "Data structures, algorithms, and libraries for data handling." },
      { topic: "Module 2: Database & SQL Mastery", details: "Advanced SQL, NoSQL databases, and efficient querying." },
      { topic: "Module 3: Data Warehousing Concepts", details: "Dimensional modeling, star and snowflake schemas." },
      { topic: "Module 4: ETL / ELT Pipelines & Tools", details: "Hands-on implementation of robust data pipelines using Airflow." },
      { topic: "Module 5: Cloud Data Services (AWS/Azure)", details: "Introduction to cloud-based data solutions and services." },
      { topic: "Module 6: Capstone Project & Interview Prep", details: "Build a complete end-to-end data solution and mock interviews." },
    ],
    featureDescription:"Machine learning is a data analysis method that is used to automate analytical model building. It is a subset of Artificial Intelligence (AI) and focuses on analyzing structures and patterns in data to allow reasoning, learning, and decision-making without human interactions. In simple terms, Machine learning will let the user feed large volumes of data to a computer algorithm and make the device process the data to offer recommendations that are data-driven and decisions that are only based on the data offered.",
    learnFeatures: [
      { title: "Comprehensive Curriculum", },
      { title: "Dedicated Support",  },
      { title: "Real-World Projects",},
      { title: "Placement Assistance",},
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],
    mentor: {
      name: "Mr. Sharath K",
      role: "Faculty | 10+ yrs Exp. in Data Engg.",
      image: "https://routesacademy.b-cdn.net/images/mentor.png",
      rating: 5.0,
      bio: "Sharath is a seasoned Data Engineer with over a decade of experience designing and managing large-scale data systems for major tech companies. He focuses on practical, real-world applications.",
      total_reviews: 450,
    },
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png",
  },
   {
    id: 3,
    title: "Data Engineer",
    description:
      "This short and intensive training equips you to be a Data Engineer. You'll master essential tools and techniques for data warehousing, ETL, and robust data pipeline construction. Land your dream job with our dedicated placement support.",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 120,
    class_schedule:"Sat & Sun",
    enrolled_students:180,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/coursecard-3.svg",
    specific_course_img: "https://routesacademy.b-cdn.net/images/specific-courses-hero3.svg",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/course3.png", 
    duration: "6 months",
    session_duration: 4,
    actual_price: 49999,
    offer_price: 29999,
    what_you_get: [
      "24/7 Doubt Support",
      "Dedicated Placement Support",
      "Industry Relevant Curriculum",
      "Flexible Learning Options",
    ],
    
    curriculum_detailed: [
      { topic: "Module 1: Programming Fundamentals (Python)", details: "Data structures, algorithms, and libraries for data handling." },
      { topic: "Module 2: Database & SQL Mastery", details: "Advanced SQL, NoSQL databases, and efficient querying." },
      { topic: "Module 3: Data Warehousing Concepts", details: "Dimensional modeling, star and snowflake schemas." },
      { topic: "Module 4: ETL / ELT Pipelines & Tools", details: "Hands-on implementation of robust data pipelines using Airflow." },
      { topic: "Module 5: Cloud Data Services (AWS/Azure)", details: "Introduction to cloud-based data solutions and services." },
      { topic: "Module 6: Capstone Project & Interview Prep", details: "Build a complete end-to-end data solution and mock interviews." },
    ],
    featureDescription:"Machine learning is a data analysis method that is used to automate analytical model building. It is a subset of Artificial Intelligence (AI) and focuses on analyzing structures and patterns in data to allow reasoning, learning, and decision-making without human interactions. In simple terms, Machine learning will let the user feed large volumes of data to a computer algorithm and make the device process the data to offer recommendations that are data-driven and decisions that are only based on the data offered.",
    learnFeatures: [
      { title: "Comprehensive Curriculum", },
      { title: "Dedicated Support",  },
      { title: "Real-World Projects",},
      { title: "Placement Assistance",},
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],
    mentor: {
      name: "Mr. Sharath K",
      role: "Faculty | 10+ yrs Exp. in Data Engg.",
      image: "https://routesacademy.b-cdn.net/images/mentor.png",
      rating: 5.0,
      bio: "Sharath is a seasoned Data Engineer with over a decade of experience designing and managing large-scale data systems for major tech companies. He focuses on practical, real-world applications.",
      total_reviews: 450,
    },
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png",
  },
   {
    id: 4,
    title: "Data Engineer",
    description:
      "This short and intensive training equips you to be a Data Engineer. You'll master essential tools and techniques for data warehousing, ETL, and robust data pipeline construction. Land your dream job with our dedicated placement support.",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 120,
    class_schedule:"Sat & Sun",
    enrolled_students:180,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/coursecard-4.svg",
    specific_course_img: "https://routesacademy.b-cdn.net/images/specific-courses-hero4.svg",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/course3.png", 
    duration: "6 months",
    session_duration: 4,
    actual_price: 49999,
    offer_price: 29999,
    what_you_get: [
      "24/7 Doubt Support",
      "Dedicated Placement Support",
      "Industry Relevant Curriculum",
      "Flexible Learning Options",
    ],
    
    curriculum_detailed: [
      { topic: "Module 1: Programming Fundamentals (Python)", details: "Data structures, algorithms, and libraries for data handling." },
      { topic: "Module 2: Database & SQL Mastery", details: "Advanced SQL, NoSQL databases, and efficient querying." },
      { topic: "Module 3: Data Warehousing Concepts", details: "Dimensional modeling, star and snowflake schemas." },
      { topic: "Module 4: ETL / ELT Pipelines & Tools", details: "Hands-on implementation of robust data pipelines using Airflow." },
      { topic: "Module 5: Cloud Data Services (AWS/Azure)", details: "Introduction to cloud-based data solutions and services." },
      { topic: "Module 6: Capstone Project & Interview Prep", details: "Build a complete end-to-end data solution and mock interviews." },
    ],
    featureDescription:"Machine learning is a data analysis method that is used to automate analytical model building. It is a subset of Artificial Intelligence (AI) and focuses on analyzing structures and patterns in data to allow reasoning, learning, and decision-making without human interactions. In simple terms, Machine learning will let the user feed large volumes of data to a computer algorithm and make the device process the data to offer recommendations that are data-driven and decisions that are only based on the data offered.",
    learnFeatures: [
      { title: "Comprehensive Curriculum", },
      { title: "Dedicated Support",  },
      { title: "Real-World Projects",},
      { title: "Placement Assistance",},
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],
    mentor: {
      name: "Mr. Sharath K",
      role: "Faculty | 10+ yrs Exp. in Data Engg.",
      image: "https://routesacademy.b-cdn.net/images/mentor.png",
      rating: 5.0,
      bio: "Sharath is a seasoned Data Engineer with over a decade of experience designing and managing large-scale data systems for major tech companies. He focuses on practical, real-world applications.",
      total_reviews: 450,
    },
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png",
  },
   {
    id: 5,
    title: "Data Engineer",
    description:
      "This short and intensive training equips you to be a Data Engineer. You'll master essential tools and techniques for data warehousing, ETL, and robust data pipeline construction. Land your dream job with our dedicated placement support.",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 120,
    class_schedule:"Sat & Sun",
    enrolled_students:180,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/coursecard-5.svg",
    specific_course_img: "https://routesacademy.b-cdn.net/images/specific-courses-hero5.svg",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/course3.png", 
    duration: "6 months",
    session_duration: 4,
    actual_price: 49999,
    offer_price: 29999,
    what_you_get: [
      "24/7 Doubt Support",
      "Dedicated Placement Support",
      "Industry Relevant Curriculum",
      "Flexible Learning Options",
    ],
    
    curriculum_detailed: [
      { topic: "Module 1: Programming Fundamentals (Python)", details: "Data structures, algorithms, and libraries for data handling." },
      { topic: "Module 2: Database & SQL Mastery", details: "Advanced SQL, NoSQL databases, and efficient querying." },
      { topic: "Module 3: Data Warehousing Concepts", details: "Dimensional modeling, star and snowflake schemas." },
      { topic: "Module 4: ETL / ELT Pipelines & Tools", details: "Hands-on implementation of robust data pipelines using Airflow." },
      { topic: "Module 5: Cloud Data Services (AWS/Azure)", details: "Introduction to cloud-based data solutions and services." },
      { topic: "Module 6: Capstone Project & Interview Prep", details: "Build a complete end-to-end data solution and mock interviews." },
    ],
    featureDescription:"Machine learning is a data analysis method that is used to automate analytical model building. It is a subset of Artificial Intelligence (AI) and focuses on analyzing structures and patterns in data to allow reasoning, learning, and decision-making without human interactions. In simple terms, Machine learning will let the user feed large volumes of data to a computer algorithm and make the device process the data to offer recommendations that are data-driven and decisions that are only based on the data offered.",
    learnFeatures: [
      { title: "Comprehensive Curriculum", },
      { title: "Dedicated Support",  },
      { title: "Real-World Projects",},
      { title: "Placement Assistance",},
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],
    mentor: {
      name: "Mr. Sharath K",
      role: "Faculty | 10+ yrs Exp. in Data Engg.",
      image: "https://routesacademy.b-cdn.net/images/mentor.png",
      rating: 5.0,
      bio: "Sharath is a seasoned Data Engineer with over a decade of experience designing and managing large-scale data systems for major tech companies. He focuses on practical, real-world applications.",
      total_reviews: 450,
    },
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png",
  },
   {
    id: 6,
    title: "Data Engineer",
    description:
      "This short and intensive training equips you to be a Data Engineer. You'll master essential tools and techniques for data warehousing, ETL, and robust data pipeline construction. Land your dream job with our dedicated placement support.",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline / Online",
    placed_students: 120,
    class_schedule:"Sat & Sun",
    enrolled_students:180,
    emi: true,
    image_url: "https://routesacademy.b-cdn.net/images/coursecard-6.svg",
    specific_course_img: "https://routesacademy.b-cdn.net/images/specific-courses-hero6.svg",
    rating: 4.9,
    home_img_url: "https://routesacademy.b-cdn.net/images/course3.png", 
    duration: "6 months",
    session_duration: 4,
    actual_price: 49999,
    offer_price: 29999,
    what_you_get: [
      "24/7 Doubt Support",
      "Dedicated Placement Support",
      "Industry Relevant Curriculum",
      "Flexible Learning Options",
    ],
    
    curriculum_detailed: [
      { topic: "Module 1: Programming Fundamentals (Python)", details: "Data structures, algorithms, and libraries for data handling." },
      { topic: "Module 2: Database & SQL Mastery", details: "Advanced SQL, NoSQL databases, and efficient querying." },
      { topic: "Module 3: Data Warehousing Concepts", details: "Dimensional modeling, star and snowflake schemas." },
      { topic: "Module 4: ETL / ELT Pipelines & Tools", details: "Hands-on implementation of robust data pipelines using Airflow." },
      { topic: "Module 5: Cloud Data Services (AWS/Azure)", details: "Introduction to cloud-based data solutions and services." },
      { topic: "Module 6: Capstone Project & Interview Prep", details: "Build a complete end-to-end data solution and mock interviews." },
    ],
    featureDescription:"Machine learning is a data analysis method that is used to automate analytical model building. It is a subset of Artificial Intelligence (AI) and focuses on analyzing structures and patterns in data to allow reasoning, learning, and decision-making without human interactions. In simple terms, Machine learning will let the user feed large volumes of data to a computer algorithm and make the device process the data to offer recommendations that are data-driven and decisions that are only based on the data offered.",
    learnFeatures: [
      { title: "Comprehensive Curriculum", },
      { title: "Dedicated Support",  },
      { title: "Real-World Projects",},
      { title: "Placement Assistance",},
    ],
    mentorRatingBreakdown: [
      { stars: 5, percentage: 87 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],
    mentor: {
      name: "Mr. Sharath K",
      role: "Faculty | 10+ yrs Exp. in Data Engg.",
      image: "https://routesacademy.b-cdn.net/images/mentor.png",
      rating: 5.0,
      bio: "Sharath is a seasoned Data Engineer with over a decade of experience designing and managing large-scale data systems for major tech companies. He focuses on practical, real-world applications.",
      total_reviews: 450,
    },
    certificate_img: "https://routesacademy.b-cdn.net/images/certificate1.png",
  },
];
