import React from 'react'
import HeroHome from './HeroHome'
import TestimonialVideo from './TestimonialVideo'
import FaqItem from '@/components/elements/FaqItem'
import Testimonial from './Testimonial'
import TopCourses from './TopCourses'
import Contact from './Contact'

const HomeMain = () => {
  return (
    <div>
        <HeroHome/>
        <TestimonialVideo />
        <TopCourses />
        <Testimonial/>
        <FaqItem />
        <Contact/>
    </div>
  )
}

export default HomeMain