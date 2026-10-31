import React from 'react'
import HeroSocialMedia from '../Components/DigitalGrowthComponents/BrandComponets/HeroSocialMedia'
import SocialGrowthProcess from '../Components/DigitalGrowthComponents/BrandComponets/SocialGrowthProcess'
import InstagramFeed from '../Components/ScrollPage/InstagramFeed'
import LinkedInFeed from '../Components/ScrollPage/LinkedInFeed'
import Cta from '../Components/HeroComponent/Cta'

const SocialMedia = () => {
  return (
    <>
      <HeroSocialMedia />
      <SocialGrowthProcess />
      <InstagramFeed />
      <LinkedInFeed />
     
      <Cta />
    </>
  )
}

export default SocialMedia
