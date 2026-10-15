import React from 'react'
import Hero from '../Components/aboutcomponents/Hero'
import AboutMe from '../Components/aboutcomponents/AboutMe'
import Vision from '../Components/aboutcomponents/Vision'
import Values from '../Components/aboutcomponents/Values'
import Timeline from '../Components/aboutcomponents/Timeline'
import Technology from '../Components/aboutcomponents/Technology'
import Cta from '../Components/HeroComponent/Cta'
import GlobalPresence from '../Components/aboutcomponents/GlobalPresence'
import Reviews from '../Components/aboutcomponents/Reviews'


const About = () => {
  return (
   <>
   <Hero/>
   <AboutMe/>
   <Vision/>
   <Values/>
   <Timeline/>
   <Technology/>
   <GlobalPresence/>
    <Reviews/>
   <Cta/>
   </>
  )
}

export default About