import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { courses } from '@/components/ui/Courses/CourseData';

// Define the course interface (same as in Courses.tsx)
interface Course {
  id: number;
  title: string;
  description: string;
  average_salary: string;
  mode_of_conduct: string;
  placed_students: number;
  emi: boolean;
  image_url: string;
  // Add more details if needed, e.g., fullDescription, syllabus, etc.
}



// Function to get course by ID (simulate fetching)
function getCourseById(id: number): Course | undefined {
  return courses.find(course => course.id === id);
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10); // Convert string ID to number
  const course = getCourseById(id);

  if (!course) {
    return <div className="text-center py-10">Course not found!</div>; // Handle 404
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <Image src={course.image_url} alt={course.title} width={800} height={400} className="mb-4" />
      <p className="text-lg mb-4">{course.description}</p>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <h3>Average Salary</h3>
          <p>{course.average_salary}</p>
        </div>
        <div>
          <h3>Mode of Conduct</h3>
          <p>{course.mode_of_conduct}</p>
        </div>
        <div>
          <h3>We Placed</h3>
          <p>{course.placed_students} + Students</p>
        </div>
      </div>
      {course.emi && <p className="text-sm text-gray-600">EMI option available</p>}
      {/* Add more sections: syllabus, instructors, etc. */}
      <Link href="/courses" className="text-blue-600 hover:underline">Back to Courses</Link>
    </div>
  );
}