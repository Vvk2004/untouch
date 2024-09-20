import React from 'react'
import Navbar from './global/Navbar'
import HomeSlider from '../components/HomeSlider'
import HomeExperience from '../components/HomeExperience'
import HomeHighlight from '../components/HomeHighlight'
import HomeAchieved from '../components/HomeAchieved'
import HomeOverview from '../components/HomeOverview'
import HomeFounders from '../components/HomeFounders'
import HomeContact from '../components/HomeContact'
import Footer from './global/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <HomeSlider />
            <HomeExperience />
            <HomeHighlight />
            <HomeAchieved />
            <HomeOverview />
            <HomeFounders />
            <HomeContact/>
            <Footer />
        </>
    )
}

export default Home
