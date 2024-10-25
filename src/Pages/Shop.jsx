import React from 'react'
import Hero from '../Components/Assets/Hero/Hero'
import Main from '../Components/Main/Main'
import LastSection from '../Components/section/LastSection'
import PromotionalBanners from '../Components/Promotion/PromotionalBanners'
import Footer from '../Components/section/Footer/Footer'

const Shop = () => {
  return (
    <div>
      <PromotionalBanners />
      <Hero/>
      <Main/>
      <LastSection/>
      <Footer />
      
    </div>
  )
}

export default Shop