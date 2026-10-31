import React from 'react'
import TestHero from '../Components/TestimonialsComponents/TestHero'
import ClientProcess from '../Components/TestimonialsComponents/ClientsProcess'
import Reviews from '../Components/aboutcomponents/Reviews'
import Cta from '../Components/HeroComponent/Cta'

const testimonials = () => {
  return (
   <>
   <TestHero/>
    <Reviews/>
   
   <ClientProcess/>
   <Cta/>
   
   </>
  )
}

export default testimonials