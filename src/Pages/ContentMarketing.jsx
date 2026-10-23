import React from 'react'
import HeroContentMarketing from '../Components/DigitalGrowthComponents/BrandComponets/HeroContentMarketing'
import ContentFunnel from '../Components/DigitalGrowthComponents/BrandComponets/ContentFunnel'
import Cta from '../Components/HeroComponent/Cta'
import ContentPerformanceStrip from '../Components/DigitalGrowthComponents/BrandComponets/ContentPerformanceStrip'
import ContentServicesShowcase from '../Components/DigitalGrowthComponents/BrandComponets/ContentServicesShowcase'
import ContentWorkflow from '../Components/DigitalGrowthComponents/BrandComponets/ContentWorkFlow'
import ContentAnalytics from '../Components/DigitalGrowthComponents/BrandComponets/ContentAnalytics'

const ContentMarketing = () => {
  return (
    <>
      <HeroContentMarketing />
      <ContentPerformanceStrip/>
      <ContentFunnel />
      <ContentServicesShowcase/>
      <ContentWorkflow/>
      <ContentAnalytics/>
      <Cta />
    </>
  )
}

export default ContentMarketing
