import React from 'react'
import HeroSearchIntentMapping from '../Components/DigitalGrowthComponents/SearchIntentMapping/HeroSearchIntentMapping'
import SearchIntentMappingGrid from '../Components/DigitalGrowthComponents/SearchIntentMapping/SearchIntentMappingGrid'
import SearchIntentMappingSteps from '../Components/DigitalGrowthComponents/SearchIntentMapping/SearchIntentMappingSteps'
import SearchIntentMappingFaq from '../Components/DigitalGrowthComponents/SearchIntentMapping/SearchIntentMappingFaq'
import Cta from '../Components/HeroComponent/Cta'

const SearchIntentMapping = () => {
  return (
    <>
      <HeroSearchIntentMapping />
      <SearchIntentMappingGrid />
      <SearchIntentMappingSteps />
      <SearchIntentMappingFaq />
     
      <Cta />
    </>
  )
}

export default SearchIntentMapping
