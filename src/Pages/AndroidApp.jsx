import React from 'react'
import HeroAndroid from '../Components/AppComponents/AndroidComponents/HeroAndroid'
import AndroidCapabilities from '../Components/AppComponents/AndroidComponents/AndroidCapabilities'
import AndroidTechStack from '../Components/AppComponents/AndroidComponents/AndroidTechStack'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'
import AndroidProjects from '../Components/AppComponents/AndroidComponents/AndroidProjects'
import AndroidUIShowcase from '../Components/AppComponents/AndroidComponents/AndroidUIShowcase'
import AndroidDevelopmentProcess from '../Components/AppComponents/AndroidComponents/AndroidDevelopmentProcess'

const AndroidApp = () => {
  return (
    <>
      <HeroAndroid />
      <AndroidProjects/>
      <AndroidUIShowcase/>
      <AndroidDevelopmentProcess/>
      <AndroidCapabilities />
      <AndroidTechStack />
      <Contactus />
      <Cta />
    </>
  )
}

export default AndroidApp
