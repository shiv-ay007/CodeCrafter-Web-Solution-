import React from 'react'
import HeroHospital from '../Components/OurWorkComponents/HealthCareComponents/HeroHospital'
import HospitalProjects from '../Components/OurWorkComponents/HealthCareComponents/HospitalProjects'
import HospitalModules from '../Components/OurWorkComponents/HealthCareComponents/HospitalModules'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'

const HospitalManagement = () => {
  return (
    <>
      <HeroHospital />
      <HospitalProjects />
      <HospitalModules />
      <Contactus />
      <Cta />
    </>
  )
}

export default HospitalManagement
