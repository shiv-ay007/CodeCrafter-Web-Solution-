import React from 'react'
import HeroDevelopMent from '../Components/WebSolution/WebDevelopment/HeroDevelopMent'
import WebDevProcess from '../Components/WebSolution/WebDevelopment/WebDevProcess'
import WebDevTechStack from '../Components/WebSolution/WebDevelopment/WebDevTechStack'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'
import FeaturedProjects from '../Components/WebSolution/WebDevelopment/FeaturedProjects'
import WhatWeBuild from '../Components/WebSolution/WebDevelopment/WhatWeBuild'

const WebDevelopment = () => {
  return (
    <>
      <HeroDevelopMent />
      <WhatWeBuild/>
      <FeaturedProjects/>
      <WebDevProcess />
      <WebDevTechStack />
      <Contactus />
      <Cta />
    </>
  )
}

export default WebDevelopment