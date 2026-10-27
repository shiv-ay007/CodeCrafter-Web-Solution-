import React from 'react'
import HeroHrms from '../Components/OurWorkComponents/EnterPriseComponets/HeroHrms'
import HrmsFeatures from '../Components/OurWorkComponents/EnterPriseComponets/HrmsFeatures'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'
import HrmsWorkflow from '../Components/OurWorkComponents/EnterPriseComponets/HrmsWorkflow'
import HrmsDashboardPreview from '../Components/OurWorkComponents/EnterPriseComponets/Hrms DashboardPreview'
import HrmsEmployeePortal from '../Components/OurWorkComponents/EnterPriseComponets/HrmsEmployeePortal'

const HrmsSoftware = () => {
  return (
    <>
      <HeroHrms />
      <HrmsDashboardPreview/>
      <HrmsFeatures />
      <HrmsWorkflow/>
      <HrmsEmployeePortal/>
      <Contactus />
      <Cta />
    </>
  )
}

export default HrmsSoftware
