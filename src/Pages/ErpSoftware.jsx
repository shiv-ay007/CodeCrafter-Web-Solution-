import React from 'react'
import HeroErp from '../Components/OurWorkComponents/EnterPriseComponets/HeroErp'
import ErpModules from '../Components/OurWorkComponents/EnterPriseComponets/ErpModules'
import Cta from '../Components/HeroComponent/Cta'
import ErpDashboardPreview from '../Components/OurWorkComponents/EnterPriseComponets/ErpDashboardPreview'
import ErpEcosystem from '../Components/OurWorkComponents/EnterPriseComponets/ErpEcosystem'

const ErpSoftware = () => {
  return (
    <>
      <HeroErp />
      <ErpDashboardPreview/>
      <ErpModules />
      <ErpEcosystem/>
      
      <Cta />
    </>
  )
}

export default ErpSoftware
