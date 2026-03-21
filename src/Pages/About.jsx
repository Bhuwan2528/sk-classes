import React from 'react'
import './Page.css'
import Banner from '../Components/Banner/Banner'
import Header from '../Components/Header/Header'
import DetailPage from '../Components/DetailPage/DetailPage'
import CtaFooter from '../Components/CtaFooter/CtaFooter'
import AboutSection from '../Components/AboutSection/AboutSection'

const About = () => {
  return (
    <div>
        <Header bg={true}/>
        <Banner title="About Us"/>
        <AboutSection/>
        <div className="space"></div>
        <CtaFooter/>
    </div>
  )
}

export default About