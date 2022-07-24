import React, {useState, useEffect} from 'react'
import {NavMenu, NavItem, NavBtn, NavBtnLink} from '../Navbar/NavbarElements';
import {Navbar, NavLinks, Logo, Container, TeamInfoContainer, TeamLogo, TeamName, TeamTableContainer, 
TeamTable, TeamTableHead, TeamTableRow, TeamTableHeaderContent, TeamTableRowContent, TeamTableBody,
TeamTableHeaderRow} from './PlayerDisplayElement'
import Footer from '../Footer'
import axios from 'axios';
import {images} from '../LeagueDisplay/Data'
import Cookies from 'universal-cookie'
import styled from 'styled-components';
import {Link as LinkR, useNavigate} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useClickOutside } from "react-click-outside-hook";
import {FiUser} from 'react-icons/fi'
const PlayerDisplay = ({team_id, team_name, logIn, isAdmin}) => {
 const [pData, setPData]=useState([]);
 useEffect(()=>{
     axios.get(`http://localhost:5000/team?id=${team_id}`)
     .then(res=>{
         setPData(res.data)})
     .catch(error=>console.log(error))
 }, [team_id])
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
        cookies.remove('points');
        navigate(0, {exact: true});
    }
 let cookies= new Cookies();
    return (

        <Container>
            <Navbar style={{marginTop: '0'}}>
                    <Logo to='/'>xFutbol</Logo>
                    <NavMenu>
                <NavItem>
                    <NavLinks to="/discover"
                    smooth={true}
                    duration={500}
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
                <NavItem>
                    <NavLinks to="/aboutus"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}>About</NavLinks>
                </NavItem>
                {logIn ? <NavItem>
                    <NavLinks to="/transferlist"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Transfers</NavLinks>
                </NavItem> :
                <NavItem>
                    <NavLinks to="/signup"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Sign Up</NavLinks>
                </NavItem> }
            </NavMenu>
            {logIn?<ul style={{listStyle: 'none'}}>
            <MenuItems style={{marginRight: 40}} ref={refUser} onClick={()=>{setOpenUser(!openUser)}}>
            <FiUser style={{marginRight: 5}} />{cookies.get('user')}
                    {
                        openUser&&<Menu
                        initial={{y: '-15%', opacity: 0}}
                        animate={{y:0, opacity: 1}}
                        transition={{ ease: 'easeInOut'}}
                        exit={{y: '-15%',opacity: 0 }}
                        style={{height: '14%'}}
                        >
                        <MenuLinks to={`/team/${Number(cookies.get('team'))}`}>Favourite Team</MenuLinks>
                        <MenuLinks to='/' onClick={logout}>Logout</MenuLinks>
                        </Menu>
                    }
                </MenuItems> </ul>
            : 
            <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>

            }
                    {/* <Search type='text' /> */}
                </Navbar>
                <TeamInfoContainer initial={{scale: 0.6, opacity: 0.7}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 0.4}}
                >
                    <TeamLogo src={images[team_id]} alt={team_name}/>
                    <TeamName>{team_name}</TeamName>
                </TeamInfoContainer>
                <TeamTableContainer>
                <TeamTable initial={{y: '100vw'}}
                animate={{y: 0}}
                transition={{duration: 1}}>
                    <TeamTableHead>
                        <TeamTableHeaderRow>
                       {isAdmin&&<TeamTableHeaderContent>PlayerID</TeamTableHeaderContent>}
                            <TeamTableHeaderContent>Name</TeamTableHeaderContent>
                            <TeamTableHeaderContent>Age</TeamTableHeaderContent>
                            <TeamTableHeaderContent>Nationality</TeamTableHeaderContent>
                            <TeamTableHeaderContent>Position</TeamTableHeaderContent>
                            <TeamTableHeaderContent>FIFA Rating</TeamTableHeaderContent>
                            <TeamTableHeaderContent>Played</TeamTableHeaderContent>
                            <TeamTableHeaderContent>Goals</TeamTableHeaderContent>
                            <TeamTableHeaderContent>Assists</TeamTableHeaderContent>
                        </TeamTableHeaderRow>
                    </TeamTableHead>
                    <TeamTableBody>
                    {pData.map((obj, i)=>{
                        return(<>
                            <TeamTableRow>
                            {isAdmin&&<TeamTableRowContent>{obj.player_id}</TeamTableRowContent>}
                            <TeamTableRowContent>{obj.name}</TeamTableRowContent>
                            <TeamTableRowContent>{obj.age}</TeamTableRowContent>
                            <TeamTableRowContent>{obj.nationality}</TeamTableRowContent>
                            <TeamTableRowContent>{obj.position}</TeamTableRowContent>
                            <TeamTableRowContent>{obj.fifa_rating}</TeamTableRowContent>
                            <TeamTableRowContent>{obj.g_played}</TeamTableRowContent>
                            <TeamTableRowContent>{obj.goals}</TeamTableRowContent>
                            <TeamTableRowContent>{obj.assists}</TeamTableRowContent>
                        </TeamTableRow>
                        </>)
                    })}   
                    </TeamTableBody>
                </TeamTable>
                </TeamTableContainer>
                <Footer />
        </Container>
    )
}

export default PlayerDisplay

const MenuItems=styled.li`
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
color: #fff;
`;


const Menu=styled(motion.div)`
position: absolute;
top: 68px;
height:33%;
width: 150px;
background-color: #01BF71;
color: #000;
transform: translateX(-10%);
${'' /* padding: 1rem; */}
overflow: hidden;
display: flex;
flex-direction: column;
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
`;
