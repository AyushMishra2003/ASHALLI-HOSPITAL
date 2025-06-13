// import React from 'react'
import AboutSection from '../components/AboutSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlide'
import SpecialtiesSection from '../components/SpecialtiesSection'
import TeamSection from '../components/TeamSection'
import ClinicStats from '../components/ClientStat'
import WhyChooseUs from '../components/WhyChooseUs'
import CTA from '../components/CTA'
import HowWeWork from '../components/HowWeWork'
import Testinomial from '../components/Testonomial'
import HomeBlogSlider from './Home/HomeBlogSlider'
import HospitalFacilities from './Home/Facilites'
import StatsComponent from '../components/StatsComponent'
import HomeFeatures from './Home/HomeFeature'
import HospitalDoctorsCTA from './Home/HomeCta'

export default function Home() {
  return (
    <div className=''>
      <HeroSlider />
      <HomeFeatures />
      <AboutSection />
      <StatsComponent />
      <SpecialtiesSection />
      <WhyChooseUs />
      {/* <CTASection/> */}
       <HospitalDoctorsCTA/>
      <HospitalFacilities />

      {/* <CTA/> */}
      {/* <HowWeWork/> */}
      <Testinomial />
      <HomeBlogSlider />
      {/* <TeamSection/> */}

    </div>
  )
}
