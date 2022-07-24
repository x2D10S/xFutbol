import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem
, NavBtn, NavBtnLink } from './AboutUsElements'
import Cookies from 'universal-cookie';
import {Link as LinkR, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {FiUser} from 'react-icons/fi'
import { useClickOutside } from "react-click-outside-hook";
import { motion, AnimatePresence } from 'framer-motion';
const Navbar = ({toggle, logIn}) => {
let cookies=new Cookies();
    // const [scrollNav, setScrollNav]=useState(false);

    // const changeNav=()=>{
    //     if(window.scrollY>=80){
    //         setScrollNav(true);
    //     }
    //     else
    //     {
    //         setScrollNav(false);
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', changeNav);
    // }, [])

    const [ref, isClickOutside]=useClickOutside();
    const collapseContainer=()=>{
        setOpen(false);
    }
    const collapseContainerUser=()=>{
        setOpenUser(false);
    }
    const [open, setOpen]=useState(false);
    const [openUser, setOpenUser]=useState(false);
    const [refUser, isClickOutsideUser]=useClickOutside();
    useEffect(()=>{
        if(isClickOutside)collapseContainer();
    }, [isClickOutside])
    useEffect(()=>{
        if(isClickOutsideUser)collapseContainerUser();
    }, [isClickOutsideUser])
    let navigate=useNavigate();
    const logout=()=>{
        cookies.remove('user');
        cookies.remove('loggedIn');
        cookies.remove('isAdmin');
        cookies.remove('team');
        cookies.remove('name');
        cookies.remove('standings');
        cookies.remove('points')
        navigate(0);
    }
   
    return (
        <>
            <Nav>
            <NavbarContainer>
            <NavLogo to="/" >xFutbol</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
            <NavItem>
                    <NavLinks to="/"
                    // smooth={true}
                    duration={500}
                    // spy={true}
                    exact='true'
                    offset={-80}>Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/discover"
                    // smooth={true}
                    duration={500}
                    // spy={true}
                    exact='true'
                    offset={-80}>Discover</NavLinks>
                </NavItem>
                <NavItem>
                    {/* <NavLinks to="/"
                    // smooth={true}
                    duration={500}
                    // spy={true}
                    exact='true'
                    offset={-80}>Leagues</NavLinks> */}
                    <MenuItems ref={ref} onClick={()=>{setOpen(!open)}}>
                        Leagues
                        {open&&
                        <AnimatePresence>
                        <Menu initial={{y: '-15%', opacity: 0}}
                        animate={{y:0, opacity: 1}}
                        transition={{ ease: 'easeInOut'}}
                        exit={{y: '-15%',opacity: 0 }}
                        >
                        <MenuLinks to='/league/2021'>Premier League</MenuLinks>
                        <MenuLinks to='/league/2014'>La Liga</MenuLinks>
                        <MenuLinks to='/league/2002'>Bundesliga</MenuLinks>
                        <MenuLinks to='/league/2019'>Serie A</MenuLinks>
                        <MenuLinks to='/league/2021'>Ligue 1</MenuLinks>
                        </Menu>
                        </AnimatePresence>
                        }
                    </MenuItems>
                </NavItem>
              
              {logIn? 
                <NavItem>
                    <NavLinks to="/transferlist"
                    // smooth={true}
                    duration={500}
                    // spy={true}
                    exact='true'
                    offset={-80}>Transfers</NavLinks>
                </NavItem>
              
              :  <NavItem>
                    <NavLinks to="/signup"
                    // smooth={true}
                    duration={500}
                    // spy={true}
                    exact='true'
                    offset={-80}>Sign Up</NavLinks>
                </NavItem>}
            </NavMenu>
            {
                logIn? <MenuUl style={{listStyle: 'none'}}>
            <MenuItems ref={refUser} onClick={()=>{setOpenUser(!openUser)}}>
            <FiUser style={{marginRight: 5}} />{cookies.get('user')}
                    {
                        openUser&&<Menu
                        initial={{y: '-15%', opacity: 0}}
                        animate={{y:0, opacity: 1}}
                        transition={{ ease: 'easeInOut'}}
                        exit={{y: '-15%',opacity: 0 }}
                        >
                        <MenuLinks to={`/team/${Number(cookies.get('team'))}`}>Favourite Team</MenuLinks>
                        <MenuLinks to='/' onClick={logout}>Logout</MenuLinks>
                        </Menu>
                    }
                </MenuItems> </MenuUl>
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

const MenuUl=styled.ul`
list-style: none;
@media screen and (max-width: 768px){
    display: none;
}
`
const MenuItems=styled.li`
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
color: #fff;
@media screen and (max-width: 768px){
    display: none;
}
`;


const Menu=styled(motion.div)`
position: absolute;
top: 75px;
width: 150px;
background-color: #01BF71;
color: #000;
transform: translateX(-10%);
${'' /* padding: 1rem; */}
overflow: hidden;
display: flex;
flex-direction: column;
@media screen and (max-width: 768px){
    display: none;
}
`;

const MenuLinks=styled(LinkR)`
text-decoration: none;
text-align: left;
color: #000;
${'' /* padding: 0.3rem; */}
padding: 1rem;
font-weight: bold;
transition: ease-in-out;
&:hover{
    transform: scale(1.05);
    transition: ease-in-out;
    background: #00b369;
}
@media screen and (max-width: 768px){
    display: none;
}
`;
