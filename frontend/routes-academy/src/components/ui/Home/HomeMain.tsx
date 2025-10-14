import React from 'react'
import HeroHome from './HeroHome'
import TestimonialVideo from './TestimonialVideo'
import Courses from './Courses'
import FaqItem from '@/components/elements/FaqItem'

const HomeMain = () => {
  return (
    <div>
        <HeroHome/>
        <TestimonialVideo />
        <Courses />
        <FaqItem />
    </div>
  )
}

export default HomeMain