import React from 'react'
import HeroVps from '../Components/HostingComponents/VpsComonents/HeroVps'
import VpsConfigurator from '../Components/HostingComponents/VpsComonents/VpsConfigurator'
import VpsFeatures from '../Components/HostingComponents/VpsComonents/VpsFeatures'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'

const VpsHosting = () => {
  return (
    <>
      <HeroVps />
      <VpsConfigurator />
      <VpsFeatures />
      <Contactus />
      <Cta />
    </>
  )
}

export default VpsHosting
