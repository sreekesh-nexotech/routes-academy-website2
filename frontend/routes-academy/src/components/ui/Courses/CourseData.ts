// src/components/ui/Courses/courseData.ts

export interface Course {
  id: number;
  title: string;
  description: string;
  average_salary: string;
  mode_of_conduct: string;
  placed_students: number;
  emi: boolean;
  image_url: string;
  rating: number; 
  home_img_url?:string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Data Engineer",
    description:
      "Ideal for beginners who want to learn data visualization and database management. Build practical skills to turn raw data into meaningful insights.",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline",
    placed_students: 120,
    emi: true,
    image_url: "/coursecard-1.svg",
    rating: 4.5,
    home_img_url:"/course3.png",
  },
  {
    id: 2,
    title: "Data Engineer",
    description:
      "Ideal for beginners who want to learn data visualization and database management. Build practical skills to turn raw data into meaningful insights.",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline",
    placed_students: 120,
    emi: true,
    image_url: "/coursecard-2.svg",
    rating: 4,
  },
  {
    id: 3,
    title: "Data Engineer",
    description:
      "Ideal for beginners who want to learn data visualization and database management. Build practical skills to turn raw data into meaningful insights.",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline",
    placed_students: 120,
    emi: true,
    image_url: "/coursecard-3.svg",
    rating: 4.8,
    home_img_url:"/course1.png"
  },
  {
    id: 4,
    title: "Data Engineer",
    description:
      "Ideal for beginners who want to learn data visualization and database management. Build practical skills to turn raw data into meaningful insights.",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline",
    placed_students: 120,
    emi: true,
    image_url: "/coursecard-4.svg",
    rating: 4.2,
  },
  {
    id: 5,
    title: "Data Engineer",
    description:
      "Ideal for beginners who want to learn data visualization and database management. Build practical skills to turn raw data into meaningful insights.",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline",
    placed_students: 120,
    emi: true,
    image_url: "/coursecard-5.svg",
    rating: 4.6,
    home_img_url:"/course2.png"
  },
  {
    id: 6,
    title: "Data Engineer",
    description:
      "Ideal for beginners who want to learn data visualization and database management. Build practical skills to turn raw data into meaningful insights.",
    average_salary: "7-15 LPA",
    mode_of_conduct: "Offline",
    placed_students: 120,
    emi: true,
    image_url: "/coursecard-6.svg",
    rating: 4.3,
  },
];
