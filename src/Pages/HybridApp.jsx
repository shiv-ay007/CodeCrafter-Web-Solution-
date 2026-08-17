import React from 'react'
import HeroHybrid from '../Components/AppComponents/HybridAppComponents/HeroHybrid'
import HybridBenefits from '../Components/AppComponents/HybridAppComponents/HybridBenefits'
import HybridShowcase from '../Components/AppComponents/HybridAppComponents/HybridShowcase'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'

const HybridApp = () => {
  return (
    <>
      <HeroHybrid />
      <HybridBenefits />
      <HybridShowcase />
      <Contactus />
      <Cta />
    </>
  )
}

export default HybridApp
