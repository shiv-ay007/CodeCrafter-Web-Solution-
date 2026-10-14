import React from 'react'
import HeroSeo from '../Components/DigitalGrowthComponents/SeoOptimization/HeroSeo'
import SeoAuditProcess from '../Components/DigitalGrowthComponents/SeoOptimization/SeoAuditProcess'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'
import SeoGrowthSections from '../Components/DigitalGrowthComponents/SeoOptimization/SeoGrowthSections'

const SeoOptimization = () => {
  return (
    <>
      <HeroSeo />
      <SeoAuditProcess />
      <SeoGrowthSections/>
      <Contactus />
      <Cta />
    </>
  )
}

export default SeoOptimization
