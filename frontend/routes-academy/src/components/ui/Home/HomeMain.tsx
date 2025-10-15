import React from 'react'
import HeroHome from './HeroHome'
import TestimonialVideo from './TestimonialVideo'
import Courses from './Courses'
import FaqItem from '@/components/elements/FaqItem'
import Testimonial from './Testimonial'

const HomeMain = () => {
  return (
    <div>
        <HeroHome/>
        <TestimonialVideo />
        <Courses />
        <FaqItem />
        <Testimonial/>
    </div>
  )
}

export default HomeMain