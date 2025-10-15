import React from 'react'
import HeroHome from './HeroHome'
import TestimonialVideo from './TestimonialVideo'
import Courses from './TopCourses'
import Faq from './Faq'
import Alumni from './Alumini'
import Metrices from "./Metrics"
import Companies from './Companies'

const HomeMain = () => {
  return (
    <div>
        <HeroHome/>
        <TestimonialVideo />
        <Alumni />
        <Metrices />
        <Companies />
        <Courses />
        <Faq />
    </div>
  )
}

export default HomeMain