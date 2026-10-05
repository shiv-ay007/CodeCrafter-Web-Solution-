import React from 'react'
import HeroCompetitorAnalysis from '../Components/DigitalGrowthComponents/CompetitorAnalysis/HeroCompetitorAnalysis'
import CompetitorAnalysisGrid from '../Components/DigitalGrowthComponents/CompetitorAnalysis/CompetitorAnalysisGrid'
import CompetitorAnalysisSteps from '../Components/DigitalGrowthComponents/CompetitorAnalysis/CompetitorAnalysisSteps'
import CompetitorAnalysisFaq from '../Components/DigitalGrowthComponents/CompetitorAnalysis/CompetitorAnalysisFaq'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'

const CompetitorAnalysis = () => {
  return (
    <>
      <HeroCompetitorAnalysis />
      <CompetitorAnalysisGrid />
      <CompetitorAnalysisSteps />
      <CompetitorAnalysisFaq />
      <Contactus />
      <Cta />
    </>
  )
}

export default CompetitorAnalysis
