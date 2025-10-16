import { Course } from "../CourseData";
import CourseDetailsCard from "./CourseDetailsCard";
import DoubtsCard from "./DoubtsCard";

const CourseSidebar: React.FC<{ course: Course }> = ({ course }) => (
  <div className="lg:col-span-1 lg:sticky lg:top-28 lg:h-fit">
    <CourseDetailsCard course={course} />
    <DoubtsCard />
  </div>
);

export default CourseSidebar;