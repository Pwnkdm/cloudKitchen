import React from 'react'
import Hero from './Hero'
import WorkProcess from './WorkProcess'
import Benefits from './Benefits'
import Testimonials from './Testimonials'
import Footer from './Footer'

const Homepage = () => {
  return (
    <div className='w-full'>
        <Hero/>
        <WorkProcess/>
        <Benefits/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Homepage