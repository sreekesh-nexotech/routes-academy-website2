'use client';
import React, { useState, useEffect } from 'react';
import TestimonialCard from '../../elements/TestimonialCard';

// Sample data for the testimonials
const testimonials = [
  {
    image: 'https://routesacademy.b-cdn.net/images/pics.png',
    name: 'Anathu Krishna',
    role: 'Jr. Data Scientist @ Nexotech',
    courses: [
      { 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>,
        title: 'English Professional Communication' 
      },
      { 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>,
        title: 'Digital Marketing and Personal Branding' 
      },
    ],
    stats: [
      { value: '80%', label: 'Salary growth' },
      { value: '12+', label: 'Job Offers' },
      { value: '5/5', label: 'Course satisfaction' },
    ],
  },
  {
    image: 'https://routesacademy.b-cdn.net/images/pics.png',
    name: 'Priya Sharma',
    role: 'Frontend Developer @ Innovate Inc.',
    courses: [
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>, title: 'Advanced React' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19.2.7 11.5l11.3-7.7 11.3 7.7-3.6 2.5"></path><path d="m22.7 11.5-11.3 7.7-11.3-7.7"></path><path d="M12 22.5V14"></path></svg>, title: 'UI/UX Design Principles' },
    ],
    stats: [
      { value: '95%', label: 'Salary growth' },
      { value: '8+', label: 'Job Offers' },
      { value: '4.9/5', label: 'Course satisfaction' },
    ],
  },
  {
    image: 'https://routesacademy.b-cdn.net/images/pics.png',
    name: 'Anathu Krishna',
    role: 'Jr. Data Scientist @ Nexotech',
    courses: [
      { 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>,
        title: 'English Professional Communication' 
      },
      { 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>,
        title: 'Digital Marketing and Personal Branding' 
      },
    ],
    stats: [
      { value: '80%', label: 'Salary growth' },
      { value: '12+', label: 'Job Offers' },
      { value: '5/5', label: 'Course satisfaction' },
    ],
  },
  {
    image: 'https://routesacademy.b-cdn.net/images/pics.png',
    name: 'Priya Sharma',
    role: 'Frontend Developer @ Innovate Inc.',
    courses: [
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>, title: 'Advanced React' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19.2.7 11.5l11.3-7.7 11.3 7.7-3.6 2.5"></path><path d="m22.7 11.5-11.3 7.7-11.3-7.7"></path><path d="M12 22.5V14"></path></svg>, title: 'UI/UX Design Principles' },
    ],
    stats: [
      { value: '95%', label: 'Salary growth' },
      { value: '8+', label: 'Job Offers' },
      { value: '4.9/5', label: 'Course satisfaction' },
    ],
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardCount = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardCount);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [cardCount]);

  return (
    <section 
      className="relative py-16 md:py-24 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('https://routesacademy.b-cdn.net/images/testimonialbg.png')` }}
  >
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Carousel Wrapper  */}
          <div className="relative overflow-hidden min-h-0">
            
            {/* Inner Slider Container */}
            <div
              className="flex transition-transform duration-700 ease-in-out min-h-0"
              style={{ 
                width: `${cardCount * 100}%`,
                transform: `translateX(-${(activeIndex / cardCount) * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 min-h-0" 
                  style={{ width: `${100 / cardCount}%` }}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-15 sm:mt-10 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer w-2.5 h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-[#104EFF] w-8' : 'bg-white hover:bg-[#104EFF]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;