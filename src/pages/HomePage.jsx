import React from 'react'
import Heades from '../components/Heades'
import MainContent from '../components/MainContent'
import BrowserCategories from '../components/BrowserCategories'
import Invitation from '../components/Invitation'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen overflow-y-auto'>
    <Heades/>
    <MainContent/>
    <BrowserCategories/>
    <Invitation/>
    <Footer/>
    </div>
  )
}

export default Home