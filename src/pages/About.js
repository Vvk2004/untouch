import React from 'react'
import Navbar from './global/Navbar'
import AboutMedPic from '../components/AboutMedPic'
import AboutDec from '../components/AboutDec'
import AboutExperience from '../components/AboutExperience'
import AboutHistory from '../components/AboutHistory'
import Footer from '../pages/global/Footer'

function About() {
    return (
        <>
            <Navbar />
            <AboutMedPic />
            <AboutDec />
            <AboutExperience />
            <AboutHistory />
            <Footer />
        </>
    )
}

export default About
