import React from 'react'
import HeroEcommerce from '../Components/WebSolution/Ecommerce/HeroEcommerce'
import EcommerceFeatures from '../Components/WebSolution/Ecommerce/EcommerceFeatures'
import EcommerceProjects from '../Components/WebSolution/Ecommerce/EcommerceProjects'
import EcommerceTechStack from '../Components/WebSolution/Ecommerce/EcommerceTechStack'
import EcommercePricing from '../Components/WebSolution/Ecommerce/EcommercePricing'
import Cta from '../Components/HeroComponent/Cta'

const Ecommerce = () => {
  return (
    <>
      <HeroEcommerce />
      <EcommerceFeatures />
      <EcommerceProjects />
      <EcommerceTechStack />
      <EcommercePricing />
    
      <Cta />
    </>
  )
}

export default Ecommerce
