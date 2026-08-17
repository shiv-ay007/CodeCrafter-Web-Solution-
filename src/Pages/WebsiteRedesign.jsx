import React from 'react'
import HeroRedesign from '../Components/WebSolution/WebsiteRedesign/HeroRedesign'
import BeforeAfterShowcase from '../Components/WebSolution/WebsiteRedesign/BeforeAfterShowcase'
import RedesignProcess from '../Components/WebSolution/WebsiteRedesign/RedesignProcess'
import RedesignFaq from '../Components/WebSolution/WebsiteRedesign/RedesignFaq'
import Cta from '../Components/HeroComponent/Cta'

const WebsiteRedesign = () => {
  return (
    <>
      <HeroRedesign />
      <BeforeAfterShowcase />
      <RedesignProcess />
      <RedesignFaq />
      <Cta />
    </>
  )
}

export default WebsiteRedesign
