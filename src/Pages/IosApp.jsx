import React from 'react'
import HeroIos from '../Components/AppComponents/IosAppcComponets/HeroIos'
import IosFeatures from '../Components/AppComponents/IosAppcComponets/IosFeatures'
import IosArchitecture from '../Components/AppComponents/IosAppcComponets/IosArchitecture'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'

const IosApp = () => {
  return (
    <>
      <HeroIos />
      <IosFeatures />
      <IosArchitecture />
      <Contactus />
      <Cta />
    </>
  )
}

export default IosApp
