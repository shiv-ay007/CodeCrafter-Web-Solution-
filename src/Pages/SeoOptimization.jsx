import React from 'react'
import HeroSeo from '../Components/DigitalGrowthComponents/SeoOptimization/HeroSeo'
import SeoAuditProcess from '../Components/DigitalGrowthComponents/SeoOptimization/SeoAuditProcess'
import Cta from '../Components/HeroComponent/Cta'
import SeoGrowthSections from '../Components/DigitalGrowthComponents/SeoOptimization/SeoGrowthSections'

const SeoOptimization = () => {
  return (
    <>
      <HeroSeo />
      <SeoAuditProcess />
      <SeoGrowthSections/>
     
      <Cta />
    </>
  )
}

export default SeoOptimization
