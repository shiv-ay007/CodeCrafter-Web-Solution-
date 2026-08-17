import React from 'react'
import HeroAndroid from '../Components/AppComponents/AndroidComponents/HeroAndroid'
import AndroidCapabilities from '../Components/AppComponents/AndroidComponents/AndroidCapabilities'
import AndroidTechStack from '../Components/AppComponents/AndroidComponents/AndroidTechStack'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'

const AndroidApp = () => {
  return (
    <>
      <HeroAndroid />
      <AndroidCapabilities />
      <AndroidTechStack />
      <Contactus />
      <Cta />
    </>
  )
}

export default AndroidApp
