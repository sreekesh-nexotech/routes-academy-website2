import Image from 'next/image';


interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatarSrc: string;
  className?: string; // Optional class for unique styling (e.g., the offset card)
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote: "The mock interviews gave me confidence I never knew I had. When I got the call saying I landed my first BI Analyst role, I literally cried happy tears. My family couldn't believe it!",
    name: "Arjun Menon",
    title: "Business Intelligence Analyst",
    avatarSrc: "/images/succes.png", 
  },
  {
    id: 2,
    quote: "Coming from a small town, I felt so lost about digital marketing. The teachers here didn't just teach - they believed in me when I didn't believe in myself. Now I'm running campaigns for big brands and my parents are so proud. This place truly changed my life!",
    name: "Priya Sharma",
    title: "Digital Marketing Executive",
    avatarSrc: "/images/succes2.png",
  },
  {
    id: 3,
    quote: "I was just another HR admin before Route Academy. Now I sit in board meetings and executives actually listen to my insights! The hands-on training made me feel ready for anything. Best decision I ever made...",
    name: "Rohit Kumar",
    title: "HR Business Assistant",
    avatarSrc: "/images/succes3.png",
  },
];


const SuccessStories = () => {
  return (
    <section className="bg-[#F2F5FF] py-16 lg:py-24 3xl:py-32 w-full">
      
      {/* Container to constrain text, but allow layout to stretch */}
      <div className="max-w-7xl 3xl:max-w-screen-3xl mx-auto px-6 lg:px-12">
        
        {/* 2. Enhanced Typography for Impact */}
        <div className="text-left md:text-center mb-12 lg:mb-20">
          <h2 className="text-5xl font-semibold font-sans 3xl:text-8xl 3xl:tracking-wider">
            200 + Success stories
            Proven Results, Guaranteed Impact.
          </h2>
          
          <p className="max-w-3xl mx-auto mt-6 text-gray-600 3xl:text-xl">
            From classroom to boardroom - our 200+ placement record isn&apos;t just a number, it&apos;s a testament to excellence. Our industry-aligned curriculum and dedicated career support have helped thousands land their dream jobs at top companies. Your next career breakthrough awaits.
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
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const { quote, name, title, avatarSrc, className } = testimonial;

  return (
    // Base styles (rounded, padding, shadow) applied to all
    <div className={`
      bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out
      transform hover:-translate-y-1 h-full flex flex-col justify-between
      3xl:p-12 3xl:rounded-3xl 3xl:shadow-2xl 3xl:hover:shadow-4xl
      ${className}
    `}>
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

        <div className={className ? 'text-white' : 'text-gray-900'}>
          <h3 className="font-bold text-lg 3xl:text-3xl">{name}</h3>
          <p className={`text-sm 3xl:text-xl ${className ? 'text-white/80' : 'text-gray-500'}`}>
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;