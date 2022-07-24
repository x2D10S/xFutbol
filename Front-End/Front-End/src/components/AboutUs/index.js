import React, {useState} from 'react'
import { Container } from './AboutUsElements'
import Navbar from './AboutUsNav'
import Sidebar from './AboutUsSidebar'
import InfoSection from './AboutUsInfoSection'
import {aboutObj1, aboutObj2} from '../InfoSection/Data'
import Footer from './AboutUsFooter'
const AboutUs = ({logIn}) => {
    const [isOpen, setIsOpen]= useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Container>
            <Sidebar logIn={logIn} isOpen={isOpen} toggle={toggle} />
               <Navbar logIn={logIn} toggle={toggle} />
               <InfoSection {...aboutObj1} />
               <InfoSection {...aboutObj2} />
               <Footer />

            </Container>
        </div>
    )
}

export default AboutUs
