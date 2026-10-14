import React from 'react'
import HeroYouTubeMarketing from '../Components/DigitalGrowthComponents/YouTubeMarketing/HeroYouTubeMarketing'
import YouTubeMarketingGrid from '../Components/DigitalGrowthComponents/YouTubeMarketing/YouTubeMarketingGrid'
import YouTubeMarketingSteps from '../Components/DigitalGrowthComponents/YouTubeMarketing/YouTubeMarketingSteps'
import YouTubeChannelShowcase from '../Components/DigitalGrowthComponents/YouTubeMarketing/YouTubeChannelShowcase'
import YouTubeMarketingFaq from '../Components/DigitalGrowthComponents/YouTubeMarketing/YouTubeMarketingFaq'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'

const YouTubeMarketing = () => {
  return (
    <>
      <HeroYouTubeMarketing />
      <YouTubeMarketingGrid />
      <YouTubeMarketingSteps />
      <YouTubeChannelShowcase />
      <YouTubeMarketingFaq />
      <Contactus />
      <Cta />
    </>
  )
}

export default YouTubeMarketing
