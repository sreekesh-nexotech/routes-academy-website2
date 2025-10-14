import PageIllustration from '../../elements/PageIllustration'
import React from 'react'
import ButtonLink from '../../elements/ButtonLink'

const HeroHome = () => {
  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center min-h-screen">
      {/* Page Illustration */}
      <PageIllustration/>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6">
        {/* Top Text */}
        <p className="text-blue-600 font-medium mb-4 tex-xl md:text-2xl">
          Learn. <span className="text-gray-900">Build.</span> Expand
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
          Industry Built Programs That Turn Learning Into Hiring
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We build a four-stage journey—Learn, Apply, Experience, Launch, so graduates contribute from day one in real roles.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row   justify-center gap-4">
          <ButtonLink href="#" label="See Courses" variant="primary" />
          <ButtonLink href="#" label="Contact us" variant="secondary"  className='bg-white'/>
        </div>
      </div>
    </div>
  )
}

export default HeroHome

