import React from 'react'
import HeroSchool from '../Components/OurWorkComponents/IndustrialComponents/HeroSchool'
import SchoolModules from '../Components/OurWorkComponents/IndustrialComponents/SchoolModules'
import SchoolEcosystem from '../Components/OurWorkComponents/IndustrialComponents/SchoolEcosystem'
import SchoolWorkflow from '../Components/OurWorkComponents/IndustrialComponents/SchoolWorkflow'
import SchoolTransportAndSecurity from '../Components/OurWorkComponents/IndustrialComponents/SchoolTransportAndSecurity'
import Cta from '../Components/HeroComponent/Cta'

const SchoolManagement = () => {
  return (
    <>
      <HeroSchool />
      <SchoolModules />
      <SchoolEcosystem />
      <SchoolWorkflow />
      <SchoolTransportAndSecurity />
     
      <Cta />
    </>
  )
}

export default SchoolManagement
