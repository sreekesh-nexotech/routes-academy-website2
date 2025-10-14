'use client';

// --- TestimonialCard Component ---
interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  courses: { icon: React.ReactNode; title: string }[];
  stats: { value: string; label: string }[];
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, name, role, courses, stats }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8">
      {/* Testimonial Image */}
      <div className="w-48 h-48 md:w-1/3 md:h-1/2 flex-shrink-0">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Testimonial Content */}
      <div className="flex flex-col text-left w-full">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-500 mb-4">{role}</p>
        
        <p className="font-semibold text-blue-600 mb-3">Courses Enrolled</p>
        
        {/* Courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-gray-100/60 rounded-lg p-3 flex items-center gap-3">
              <div className="text-blue-600">{course.icon}</div>
              <p className="text-sm text-gray-700 font-medium">{course.title}</p>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="flex justify-center md:justify-start items-center gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-xs md:text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;