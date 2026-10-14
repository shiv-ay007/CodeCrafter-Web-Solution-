import React from 'react'
import HeroBranding from '../Components/DigitalGrowthComponents/BrandComponets/HeroBranding'
import BrandingDeliverables from '../Components/DigitalGrowthComponents/BrandComponets/BrandingDeliverables'
import BrandDesignProcess from '../Components/DigitalGrowthComponents/BrandComponets/BrandDesignProcess'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'

const BrandIdentity = () => {
  return (
    <>
      <HeroBranding />
      <BrandingDeliverables />
      <BrandDesignProcess />
      <Contactus />
      <Cta />
    </>
  )
}

export default BrandIdentity
