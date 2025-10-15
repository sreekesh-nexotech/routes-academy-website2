import React from 'react'
import HeroHome from './HeroHome'
import TestimonialVideo from './TestimonialVideo'
import FaqItem from '@/components/elements/FaqItem'
import Testimonial from './Testimonial'
import TopCourses from './TopCourses'

const HomeMain = () => {
  return (
    <div>
        <HeroHome/>
        <TestimonialVideo />
        <TopCourses />
        <FaqItem />
        <Testimonial/>
    </div>
  )
}

export default HomeMain