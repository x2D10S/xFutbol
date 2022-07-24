import React, {useState} from 'react'
import { Container } from './DiscoverElements'
import Navbar from './DiscoverNav'
import Sidebar from './DiscoverSidebar'
import InfoSection from './DiscoverInfoSection'
import {discoverObj1, discoverObj2} from '../InfoSection/Data'
import Footer from './DiscoverFooter'
const Discover = ({logIn}) => {
    const [isOpen, setIsOpen]= useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Container>
            <Sidebar logIn={logIn}  isOpen={isOpen} toggle={toggle} />
               <Navbar logIn={logIn} toggle={toggle} />
               <InfoSection {...discoverObj1} />
               <InfoSection {...discoverObj2} />
               <Footer />

            </Container>
        </div>
    )
}

export default Discover
