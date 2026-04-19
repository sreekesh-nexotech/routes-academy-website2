import Image from "next/image";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatarSrc: string;
  className?: string;
}

// Success stories by course ID
const testimonialsByCourse: { [key: number]: Testimonial[] } = {
  // Course 1: Career Program in Accounting & Taxation
  1: [
    {
      id: 1,
      quote:
        "I recently completed SAP from Route Academy. It was a really great experience. The syllabus and way of teaching is nice. It was fully practical oriented classes. The classes I got really engaging. Thank you dearest Teachers Harsha Ma'am, Aditya Ma'am, Suhail sir, and Route Academy.",
      name: "Shanoos",
      title: "CPAT Student",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes.png",
    },
    {
      id: 2,
      quote:
        "I learned Tally from here and the training was very clear. I recommended Route Upskill Academy to others. Best academy. Thanks to our tutors Adithya Ma'am and Harsha Ma'am.",
      name: "Muhammed Jifan",
      title: "CPAT Student",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes2.png",
    },
  ],

  // Course 2: Career Program in Accounting & Taxation (GCC CPAT)
  2: [],

  // Course 3: AI Integrated Data Analytics & BI Specialist (1 Year)
  3: [
    {
      id: 1,
      quote:
        "I completed data analytics course at Route Academy, nice experience. Faculties are very nice and they are available anytime to clear your doubts.",
      name: "Fathima Zahra",
      title: "Data Analytics Student",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes.png",
    },
    {
      id: 2,
      quote:
        "I recently completed the AI Integrated Data Analytics course at Route Upskill Academy in Calicut. The course covered Excel & AI, Power BI, Tableau, SQL, Python, statistics, and machine learning. The trainers are Microsoft certified trainers and very supportive. Highly recommended for students who want practical data skills.",
      name: "Anan Nisar",
      title: "Data Analytics Student",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes2.png",
    },
    {
      id: 3,
      quote:
        "As a working professional, I joined Route Upskill Academy to upgrade my skills in Excel, Power BI, SQL, and Python. Their AI integrated courses helped me understand modern data analytics tools. The teachers are very knowledgeable. I strongly recommend this academy.",
      name: "Sameer Ali",
      title: "Working Professional",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes3.png",
    },
  ],

  // Course 4: AI Integrated Data Analytics & BI Specialist (6 Months)
  4: [
    {
      id: 1,
      quote:
        "My son completed a data analysis course from Route Upskill Academy. He changed a lot and is now working as a business analyst in Bangalore. During admission, Suhail sir said they could make him a perfect professional, and it was true. He got extremely good classes and practical experiences. Mentors are supportive. The word 'upskill' really means full in Route Upskill Academy. Thank you to everyone who helped my son grow.",
      name: "Suresh Sureshpt",
      title: "Parent",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes.png",
    },
    {
      id: 2,
      quote:
        "Wonderful place for learning and personal development. Highly recommend this institution to anyone looking for quality education!",
      name: "Asna Ayoob",
      title: "Student",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes2.png",
    },
    {
      id: 3,
      quote:
        "Currently learning the Data Analytics and BI course here. The classes are simple and helpful, especially for beginners. I feel this is one of the best academies for skill development. Thank you for the support and guidance. I would definitely recommend this academy.",
      name: "Fathima Fidha",
      title: "Student",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes3.png",
    },
  ],

  // Course 5: AI Integrated Excel with Power BI & SQL
  5: [
    {
      id: 1,
      quote:
        "I studied advanced MS Excel from Routes Academy. The class was excellent, especially my lecturer Aadhitya. She was such a good and talented one, she helped me a lot. She cleared any doubts at any time. Thank you Aadhitya and Route's Academy.",
      name: "Preethu Prasad",
      title: "Excel Student",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes.png",
    },
    {
      id: 2,
      quote:
        "I recently completed the online Excel training from Route Upskill Academy, and I'm extremely happy with the experience. The classes were well-structured, easy to follow, and perfect for both beginners and working professionals. The instructor Ms. Adithtya explained every concept clearly with practical examples, which made learning much easier. Thanks team, great support.",
      name: "Sandeep MS",
      title: "Excel Student",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes2.png",
    },
    {
      id: 3,
      quote:
        "I got best experience in Route Academy Calicut, Kerala. I completed advanced Excel with AI integrated.",
      name: "Shameema Shame",
      title: "Excel Student",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes3.png",
    },
  ],

  // Course 6: AI Integrated Certified Business & Financial Analyst - CBFA (1 Year)
  6: [
    {
      id: 1,
      quote:
        "The upskilling program really helped me build a strong foundation. The classes were clear and easy to understand. The campus experience at Hilite Business Park was also great - professional environment, good facilities, and a comfortable place to learn. Overall, it was a very positive and helpful experience for improving my accounting skills.",
      name: "Soorya Satheesh",
      title: "CBFA Student",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes.png",
    },
    {
      id: 2,
      quote:
        "I got best experience at Route Upskill Academy Calicut. I completed accounting courses at Route Academy.",
      name: "Nainu Vanus",
      title: "CBFA Student",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes2.png",
    },
  ],

  // Course 7: AI Integrated Logistics & Supply Chain Management (1 Year)
  7: [
    {
      id: 1,
      quote:
        "Logistics training was excellent with real industry examples. Route Upskill Academy is highly recommended.",
      name: "Muhammed Shahal",
      title: "Logistics Student",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes.png",
    },
    {
      id: 2,
      quote:
        "I learned SAP MM from Route Upskill Academy and placed as Receiver incharge at Nesto Group. Thank you Route Upskill Academy. The best upskilling academy in Kerala.",
      name: "Sabith Sabith",
      title: "SAP MM Student",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes2.png",
    },
    {
      id: 3,
      quote:
        "I completed SAP MM course at Route Upskill Academy, and I placed after the course at Nandilath G-Mart. I strongly recommend Route Upskill Academy for your future courses. Best upskilling academy in Kerala.",
      name: "Sreedhul Sree",
      title: "SAP MM Student",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes3.png",
    },
  ],

  // Course 8: AI Integrated Data Science & Agentic AI
  8: [],

  // Course 9: Certified Business Analyst (CBA)
  9: [
    {
      id: 1,
      quote:
        "Power BI sessions were the best. I created three dashboards and got placed as a reporting analyst.",
      name: "Mishal N.",
      title: "Reporting Analyst",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes.png",
    },
    {
      id: 2,
      quote:
        "AI-integrated Excel made everything easier. The course is very practical and job-focused.",
      name: "Akhila S.",
      title: "Business Analyst",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes2.png",
    },
    {
      id: 3,
      quote:
        "Route Academy's BA program gave me confidence to work in a data environment for the first time.",
      name: "Arjun P.",
      title: "Data Analyst",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes3.png",
    },
  ],

  // Course 10: Human Resource Business Program (HR BP)
  10: [
    {
      id: 1,
      quote:
        "The Excel and HRMS modules gave me confidence in handling real HR tasks.",
      name: "Rasna M.",
      title: "HR Executive",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes.png",
    },
    {
      id: 2,
      quote:
        "Perfect course for HR beginners. Recruitment, payroll, and compliance were taught with real examples.",
      name: "Shruthi R.",
      title: "HR Coordinator",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes2.png",
    },
    {
      id: 3,
      quote:
        "Route Academy helped me switch to HR successfully. Practical training was excellent.",
      name: "Nithin K.",
      title: "HR Associate",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes3.png",
    },
  ],
  11: [
    {
      id: 1,
      quote:
        "This course transformed my digital marketing career with AI tools. Highly recommended!",
      name: "Ameena Y.",
      title: "Social Media Executive",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes2.png",
    },
    {
      id: 2,
      quote:
        "AI-powered strategies helped me 3x my ROI in just 3 months. Amazing course!",
      name: "Afsal R.",
      title: "Performance Marketer",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes2.png",
    },
    {
      id: 3,
      quote:
        "Practical AI tools and live projects made all the difference in my marketing career.",
      name: "Aleena Z.",
      title: "Digital Marketer",
      avatarSrc: "https://routesacademy.b-cdn.net/images/succes3.png",
    },
  ],
};

export const getTestimonialsForCourse = (courseId: number): Testimonial[] =>
  testimonialsByCourse[courseId] ?? [];

const SuccessStories = ({ courseId }: { courseId: number }) => {
  const testimonialsData = getTestimonialsForCourse(courseId);

  if (testimonialsData.length === 0) {
    return null;
  }
  return (
    <section className="bg-[#F2F5FF] py-16 lg:py-24 3xl:py-32 w-full">
      {/* Container to constrain text*/}
      <div className="max-w-7xl 3xl:max-w-screen-3xl mx-auto px-6 lg:px-12">
        {/* 2. Enhanced Typography for Impact */}
        <div className="text-left md:text-center mb-12 lg:mb-20">
          <h2 className="text-5xl font-semibold font-sans 3xl:text-8xl 3xl:tracking-wider">
            200 + Success stories Proven Results, Guaranteed Impact.
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 3xl:text-xl">
            From classroom to boardroom - our 200+ placement record isn&apos;t
            just a number, it&apos;s a testament to excellence. Our
            industry-aligned curriculum and dedicated career support have helped
            thousands land their dream jobs at top companies. Your next career
            breakthrough awaits.
          </p>
        </div>

        {/* 3. The Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 3xl:gap-12 items-start">
          {testimonialsData.map((testimonial: Testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Testimonial Card Component ---
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  const { quote, name, title, avatarSrc, className } = testimonial;

  return (
    // Base styles (rounded, padding, shadow) applied to all
    <div
      className={`
      bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out
      transform hover:-translate-y-1 h-full flex flex-col justify-between
      3xl:p-12 3xl:rounded-3xl 3xl:shadow-2xl 3xl:hover:shadow-4xl
      ${className}
    `}
    >
      <p className="text-gray-700 italic mb-6 text-base 3xl:text-2xl 3xl:leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="flex items-center mt-auto">
        {/* 4. Larger Image/Avatar */}
        <div className="relative w-16 h-16 3xl:w-24 3xl:h-24 mr-4 3xl:mr-6">
          <Image
            src={avatarSrc}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-white shadow-md"
          />
        </div>

        <div className={className ? "text-white" : "text-gray-900"}>
          <h3 className="font-bold text-lg 3xl:text-3xl">{name}</h3>
          <p
            className={`text-sm 3xl:text-xl ${
              className ? "text-white/80" : "text-gray-500"
            }`}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
