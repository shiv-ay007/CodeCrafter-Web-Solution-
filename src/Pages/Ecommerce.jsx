import React from 'react'
import HeroEcommerce from '../Components/WebSolution/Ecommerce/HeroEcommerce'
import EcommerceFeatures from '../Components/WebSolution/Ecommerce/EcommerceFeatures'
import EcommerceTechStack from '../Components/WebSolution/Ecommerce/EcommerceTechStack'
import EcommercePricing from '../Components/WebSolution/Ecommerce/EcommercePricing'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'

const Ecommerce = () => {
  return (
    <>
      <HeroEcommerce />
      <EcommerceFeatures />
      <EcommerceTechStack />
      <EcommercePricing />
      <Contactus />
      <Cta />
    </>
  )
}

export default Ecommerce
