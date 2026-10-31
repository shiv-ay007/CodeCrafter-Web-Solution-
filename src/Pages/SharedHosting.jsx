import React from 'react'
import HeroSharedHosting from '../Components/HostingComponents/SharedComonents/HeroSharedHosting'
import SharedHostingPlans from '../Components/HostingComponents/SharedComonents/SharedHostingPlans'
import SharedFeatures from '../Components/HostingComponents/SharedComonents/SharedFeatures'
import Cta from '../Components/HeroComponent/Cta'

const SharedHosting = () => {
  return (
    <>
      <HeroSharedHosting />
      <SharedHostingPlans />
      <SharedFeatures />
     
      <Cta />
    </>
  )
}

export default SharedHosting
