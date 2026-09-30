import React from 'react'
import HeroDevelopMent from '../Components/WebSolution/WebDevelopment/HeroDevelopMent'
import WebDevProcess from '../Components/WebSolution/WebDevelopment/WebDevProcess'
import WebDevTechStack from '../Components/WebSolution/WebDevelopment/WebDevTechStack'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'
import FeaturedProjects from '../Components/WebSolution/WebDevelopment/FeaturedProjects'

const WebDevelopment = () => {
  return (
    <>
      <HeroDevelopMent />
      <FeaturedProjects/>
      <WebDevProcess />
      <WebDevTechStack />
      <Contactus />
      <Cta />
    </>
  )
}

export default WebDevelopment