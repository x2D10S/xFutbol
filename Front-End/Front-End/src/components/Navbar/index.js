import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem
, NavBtn, NavBtnLink, NavLinks1  } from './NavbarElements'
import Cookies from 'universal-cookie'
import {animateScroll as scroll} from 'react-scroll';
const Navbar = ({toggle, logIn}) => {

    const [scrollNav, setScrollNav]=useState(false);

    const changeNav=()=>{
        if(window.scrollY>=80){
            setScrollNav(true);
        }
        else
        {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const toggleHome=()=>{
        scroll.scrollToTop();
    }
    let cookies=new Cookies();
    return (
        <>
            <Nav scrollNav={scrollNav}>
            <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome} scrollNav={scrollNav}>xFutbol</NavLogo>
            <MobileIcon scrollNav={scrollNav} onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="discover"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    scrollNav={scrollNav}>Discover</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="leagues"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    scrollNav={scrollNav}>Leagues</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    scrollNav={scrollNav}>About</NavLinks>
                </NavItem>
               {logIn ? <NavItem>
                    <NavLinks1 to="/transferlist"
                    // smooth={true}
                    duration={500}
                    // spy={true}
                    exact='true'
                    offset={-80}
                    scrollNav={scrollNav} >Transfers</NavLinks1>
                </NavItem> :
                <NavItem>
                    <NavLinks to="signup"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    scrollNav={scrollNav}>Sign Up</NavLinks>
                </NavItem> }
            </NavMenu>
           {logIn? <ul style={{listStyle: 'none'}}>
            <NavItem>
                    <NavLinks to="user"
                    style={{}}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    scrollNav={scrollNav}>{cookies.get('user')}</NavLinks>
                </NavItem> </ul>
            : 
            <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>

            }
            </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
