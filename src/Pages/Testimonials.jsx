import React from 'react'
import TestHero from '../Components/TestimonialsComponents/TestHero'
import Story from '../Components/TestimonialsComponents/Story'
import GoogleRews from '../Components/ScrollPage/GoogleRews'
import InstagramFeed from '../Components/ScrollPage/InstagramFeed'
import LinkedInFeed from '../Components/ScrollPage/LinkedInFeed'

const testimonials = () => {
  return (
   <>
   <TestHero/>
   <Story/>
   <GoogleRews/>
   <InstagramFeed/>
   <LinkedInFeed/>

   </>
  )
}

export default testimonials