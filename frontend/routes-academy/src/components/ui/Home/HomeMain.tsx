import React from 'react'
import HeroHome from './HeroHome'
import TestimonialVideo from './TestimonialVideo'
import FaqItem from '@/components/elements/FaqItem'
import Testimonial from './Testimonial'
import TopCourses from './TopCourses'
import Contact from './Contact'
import Alumni from './Alumini'
import Statistics from './Metrics'
import Companies from './Companies'

const HomeMain = () => {
  return (
    <div className='w-full'>
        <HeroHome/>
        <TestimonialVideo />
        <Alumni/>
        <Statistics/>
        <Companies/>
        <Testimonial/>
        <TopCourses />
        <FaqItem />
        <Contact/>
    </div>
  );
};

export default HomeMain;
