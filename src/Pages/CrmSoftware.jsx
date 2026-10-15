import React from 'react'
import HeroCrm from '../Components/OurWorkComponents/EnterPriseComponets/HeroCrm'
import CrmFeatures from '../Components/OurWorkComponents/EnterPriseComponets/CrmFeatures'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'
import CrmGrowthSections from '../Components/OurWorkComponents/EnterPriseComponets/CrmGrowthSections'

const CrmSoftware = () => {
  return (
    <>
      <HeroCrm />
      <CrmFeatures />
      <CrmGrowthSections/>
      <Contactus />
      <Cta />
    </>
  )
}

export default CrmSoftware
