// src/app/courses/[id]/page.tsx
import React from "react";

interface PageProps {
  params: { id: string };
}

const CoursePage = ({ params }: PageProps) => {
  return <div>Course ID: {params.id}</div>;
};

export default CoursePage; // ✅ Must have default export