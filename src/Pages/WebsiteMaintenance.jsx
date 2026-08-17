import React from 'react'
import HeroMaintenance from '../Components/WebSolution/WebsiteMaintance/HeroMaintenance'
import MaintenancePlans from '../Components/WebSolution/WebsiteMaintance/MaintenancePlans'
import SecurityAudit from '../Components/WebSolution/WebsiteMaintance/SecurityAudit'
import MaintenanceFaq from '../Components/WebSolution/WebsiteMaintance/MaintenanceFaq'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'

const WebsiteMaintenance = () => {
  return (
    <>
      <HeroMaintenance />
      <MaintenancePlans />
      <SecurityAudit />
      <MaintenanceFaq />
      <Contactus />
      <Cta />
    </>
  )
}

export default WebsiteMaintenance
