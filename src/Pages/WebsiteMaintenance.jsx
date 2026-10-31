import React from 'react'
import HeroMaintenance from '../Components/WebSolution/WebsiteMaintance/HeroMaintenance'
import MaintenancePlans from '../Components/WebSolution/WebsiteMaintance/MaintenancePlans'
import SecurityAudit from '../Components/WebSolution/WebsiteMaintance/SecurityAudit'
import MaintenanceFaq from '../Components/WebSolution/WebsiteMaintance/MaintenanceFaq'
import Cta from '../Components/HeroComponent/Cta'

const WebsiteMaintenance = () => {
  return (
    <>
      <HeroMaintenance />
      <MaintenancePlans />
      <SecurityAudit />
      <MaintenanceFaq />
    
      <Cta />
    </>
  )
}

export default WebsiteMaintenance
