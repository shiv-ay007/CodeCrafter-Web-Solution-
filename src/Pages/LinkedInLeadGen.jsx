import React from 'react'
import HeroLinkedInLeadGen from '../Components/DigitalGrowthComponents/LinkedInLeadGen/HeroLinkedInLeadGen'
import LinkedInLeadGenGrid from '../Components/DigitalGrowthComponents/LinkedInLeadGen/LinkedInLeadGenGrid'
import LinkedInLeadGenSteps from '../Components/DigitalGrowthComponents/LinkedInLeadGen/LinkedInLeadGenSteps'
import LinkedInCompanyFeed from '../Components/DigitalGrowthComponents/LinkedInLeadGen/LinkedInCompanyFeed'
import LinkedInLeadGenFaq from '../Components/DigitalGrowthComponents/LinkedInLeadGen/LinkedInLeadGenFaq'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'

const LinkedInLeadGen = () => {
  return (
    <>
      <HeroLinkedInLeadGen />
      <LinkedInLeadGenGrid />
      <LinkedInLeadGenSteps />
      <LinkedInCompanyFeed />
      <LinkedInLeadGenFaq />
      <Contactus />
      <Cta />
    </>
  )
}

export default LinkedInLeadGen
