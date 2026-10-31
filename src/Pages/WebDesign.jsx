import React from 'react'
import HeroWeb from '../Components/WebSolution/WebDesign/HeroWeb'
import Trusted from '../Components/WebSolution/WebDesign/Trusted'
import WebDesignProjects from '../Components/WebSolution/WebDesign/WebDesignProjects'
import DesignProcess from '../Components/WebSolution/WebDesign/DesignProcess'
import Cta from '../Components/HeroComponent/Cta'

const WebDesign = () => {
  return (
    <>
      <HeroWeb />
      <Trusted />
      <WebDesignProjects />
      <DesignProcess />
      
      <Cta />
    </>
  )
}

export default WebDesign
