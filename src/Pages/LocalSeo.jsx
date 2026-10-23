import React from 'react'
import HeroLocalSeo from '../Components/DigitalGrowthComponents/SeoOptimization/HeroLocalSeo'
import LocalSeoServicesGrid from '../Components/DigitalGrowthComponents/SeoOptimization/LocalSeoServicesGrid'
import LocalSeoSteps from '../Components/DigitalGrowthComponents/SeoOptimization/LocalSeoSteps'
import LocalSeoComparison from '../Components/DigitalGrowthComponents/SeoOptimization/LocalSeoComparison'
import LocalSeoFaq from '../Components/DigitalGrowthComponents/SeoOptimization/LocalSeoFaq'
import Cta from '../Components/HeroComponent/Cta'

const LocalSeo = () => {
  return (
    <>
      <HeroLocalSeo />
      <LocalSeoServicesGrid />
      <LocalSeoSteps />
      <LocalSeoComparison />
      <LocalSeoFaq />
     
      <Cta />
    </>
  )
}

export default LocalSeo
