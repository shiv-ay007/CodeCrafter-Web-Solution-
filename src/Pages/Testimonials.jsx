import React from 'react'
import TestHero from '../Components/TestimonialsComponents/TestHero'
import Story from '../Components/TestimonialsComponents/Story'
import ClientProcess from '../Components/TestimonialsComponents/ClientsProcess'
import Reviews from '../Components/aboutcomponents/Reviews'
import Cta from '../Components/HeroComponent/Cta'

const testimonials = () => {
  return (
   <>
   <TestHero/>
    <Reviews/>
   <Story/>
   <ClientProcess/>
   <Cta/>
   
   </>
  )
}

export default testimonials