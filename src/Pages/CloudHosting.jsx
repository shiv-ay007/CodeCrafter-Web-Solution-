import React from 'react'
import HeroCloud from '../Components/HostingComponents/CloudComponents/HeroCloud'
import CloudArchitecture from '../Components/HostingComponents/CloudComponents/CloudArchitecture'
import CloudBenefits from '../Components/HostingComponents/CloudComponents/CloudBenefits'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'

const CloudHosting = () => {
  return (
    <>
      <HeroCloud />
      <CloudArchitecture />
      <CloudBenefits />
      <Contactus />
      <Cta />
    </>
  )
}

export default CloudHosting
