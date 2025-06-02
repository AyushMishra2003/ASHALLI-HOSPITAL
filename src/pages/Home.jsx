// import React from 'react'
import AboutSection from '../components/AboutSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlide'
import SpecialtiesSection from '../components/SpecialtiesSection'
import TeamSection from '../components/TeamSection'

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSlider/>
    <AboutSection/>
    <SpecialtiesSection/>
    <CTASection/>
    <TeamSection/>
    <Footer/>
    </>
  )
}
