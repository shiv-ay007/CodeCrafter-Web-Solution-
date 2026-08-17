import React from 'react'
import HeroSharedHosting from '../Components/HostingComponents/SharedComonents/HeroSharedHosting'
import SharedHostingPlans from '../Components/HostingComponents/SharedComonents/SharedHostingPlans'
import SharedFeatures from '../Components/HostingComponents/SharedComonents/SharedFeatures'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'

const SharedHosting = () => {
  return (
    <>
      <HeroSharedHosting />
      <SharedHostingPlans />
      <SharedFeatures />
      <Contactus />
      <Cta />
    </>
  )
}

export default SharedHosting
