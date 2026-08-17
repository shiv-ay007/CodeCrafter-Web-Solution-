import React from 'react'
import HeroFlutter from '../Components/AppComponents/FlutterAppComponents/HeroFlutter'
import FlutterFeatures from '../Components/AppComponents/FlutterAppComponents/FlutterFeatures'
import FlutterPerformance from '../Components/AppComponents/FlutterAppComponents/FlutterPerformance'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'

const FlutterApp = () => {
  return (
    <>
      <HeroFlutter />
      <FlutterFeatures />
      <FlutterPerformance />
      <Contactus />
      <Cta />
    </>
  )
}

export default FlutterApp
