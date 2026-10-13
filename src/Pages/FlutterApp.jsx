import React from 'react'
import HeroFlutter from '../Components/AppComponents/FlutterAppComponents/HeroFlutter'
import FlutterFeatures from '../Components/AppComponents/FlutterAppComponents/FlutterFeatures'
import FlutterPerformance from '../Components/AppComponents/FlutterAppComponents/FlutterPerformance'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'
import FlutterProjects from '../Components/AppComponents/FlutterAppComponents/FlutterProjects'

const FlutterApp = () => {
  return (
    <>
      <HeroFlutter />
      <FlutterFeatures />
      <FlutterProjects/>
      <FlutterPerformance />
      <Contactus />
      <Cta />
    </>
  )
}

export default FlutterApp
