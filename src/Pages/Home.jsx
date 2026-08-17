import React from 'react'
import Hero from '../Components/HeroComponent/Hero'
import Overview from '../Components/HeroComponent/Overview'
import Services from '../Components/HeroComponent/Services'
import Serve from '../Components/HeroComponent/Serve'
import AssembleTeam from '../Components/HeroComponent/AssembleTeam'
import TechMarquee from '../Components/HeroComponent/TechMarquee'
import LatestInsights from '../Components/HeroComponent/LatestInsights'
import GoogleReviews from '../Components/ScrollPage/GoogleRews'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'

const Home = () => {
  return (
    <>
      <Hero />
      <Overview />
      <Services />
      <Serve />
      <AssembleTeam />
      <TechMarquee />
      <LatestInsights />
      <GoogleReviews />
      <Contactus />
      <Cta />
    </>
  )
}

export default Home