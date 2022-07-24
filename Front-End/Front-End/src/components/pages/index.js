import React, {useState} from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import HeroSection from '../HeroSection'
import InfoSection from '../InfoSection'
import {aboutObj, discoverObj, signUpObj } from '../InfoSection/Data'
import Leagues from '../Leagues'
import InfoLoggedIn from '../InfoSection/loggedIn'
import Footer from '../Footer'
const Home = ({logIn, isAdmin}) => {
    const [isOpen, setIsOpen]= useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    };
    return (
        <>
          <Sidebar logIn={logIn} isOpen={isOpen} toggle={toggle}/>
          <Navbar logIn={logIn} toggle={toggle}/>  
          <HeroSection />
          <InfoSection {...discoverObj}/>
          <Leagues />
          <InfoSection {...aboutObj} />
          {logIn?
          <InfoLoggedIn isAdmin={isAdmin} />:
          <InfoSection {...signUpObj} />}
          <Footer />
          </>
    )
}

export default Home
