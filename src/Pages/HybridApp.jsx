import React from 'react'
import HeroHybrid from '../Components/AppComponents/HybridAppComponents/HeroHybrid'
import HybridBenefits from '../Components/AppComponents/HybridAppComponents/HybridBenefits'
import HybridShowcase from '../Components/AppComponents/HybridAppComponents/HybridShowcase'
import Cta from '../Components/HeroComponent/Cta'
import HybridProjects from '../Components/AppComponents/HybridAppComponents/HybridProjects'
import HybridDevelopmentProcess from '../Components/AppComponents/HybridAppComponents/HybridDevelopmentProcess'

const HybridApp = () => {
  return (
    <>
      <HeroHybrid />
      <HybridBenefits />
      <HybridShowcase />
      <HybridProjects/>
      <HybridDevelopmentProcess/>
     
      <Cta />
    </>
  )
}

export default HybridApp
