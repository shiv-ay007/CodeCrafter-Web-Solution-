import React from 'react'
import HeroDomain from '../Components/HostingComponents/DomainRegisterComponents/HeroDomain'
import DomainPricingTable from '../Components/HostingComponents/DomainRegisterComponents/DomainPricingTable'
import DomainPerks from '../Components/HostingComponents/DomainRegisterComponents/DomainPerks'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'

const DomainRegistration = () => {
  return (
    <>
      <HeroDomain />
      <DomainPricingTable />
      <DomainPerks />
      <Contactus />
      <Cta />
    </>
  )
}

export default DomainRegistration
