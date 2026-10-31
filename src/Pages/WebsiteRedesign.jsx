import React from 'react'
import HeroRedesign from '../Components/WebSolution/WebsiteRedesign/HeroRedesign'
import BeforeAfterShowcase from '../Components/WebSolution/WebsiteRedesign/BeforeAfterShowcase'
import RedesignProcess from '../Components/WebSolution/WebsiteRedesign/RedesignProcess'
import RedesignFaq from '../Components/WebSolution/WebsiteRedesign/RedesignFaq'
import Cta from '../Components/HeroComponent/Cta'

const WebsiteRedesign = () => {
  return (
    <main className="w-full overflow-hidden bg-white text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      <HeroRedesign />
      <BeforeAfterShowcase />
      <RedesignProcess />
      <RedesignFaq />
      <Cta />
    </main>
  )
}

export default WebsiteRedesign
