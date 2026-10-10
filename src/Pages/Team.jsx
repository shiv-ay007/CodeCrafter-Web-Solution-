import React from 'react'
import TeamHero from '../Components/TeamComponents/TeamHero'
import CEOSpotlight from '../Components/TeamComponents/CEOSpotlight'
import Teams from '../Components/TeamComponents/Teams'
import Glimps from '../Components/TeamComponents/Glimps'
import Cta from '../Components/HeroComponent/Cta'

const Team = () => {
  return (
    <>
      <TeamHero />
      <CEOSpotlight />
      <Teams />
      <Glimps />
      <Cta />
    </>
  )
}

export default Team