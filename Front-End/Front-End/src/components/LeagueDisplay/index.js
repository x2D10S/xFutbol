import React, {useState, useEffect} from 'react'
import { Container, Navbar, NavLinks, Logo, /*Search,*/ LeagueInfoContainer, LeagueIcon, LeagueInfo,
     LeagueName, LeagueTableContainer, LeagueTable, LeagueTableHeader,
LeagueTableRow, LeagueTableHeaderContent, LeagueTableBody, LeagueTableRowContent, TeamName, LeagueTableHeaderRow, TeamLogo} from './LeagueDisplayElements'
import Footer from '../Footer'
import {NavMenu, NavItem, NavBtn, NavBtnLink} from '../Navbar/NavbarElements'
import axios from 'axios'
import { images } from './Data'
import Cookies from 'universal-cookie'
import {Link as LinkR, useNavigate} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useClickOutside } from "react-click-outside-hook";
import {FiUser} from 'react-icons/fi'
import styled from 'styled-components'
const LeagueDisplay = ({id, icon, name, color1, color2, color3, font1, font2, infoFont, logIn }) => {
  const [array, setArray]= useState([]);
  useEffect(()=>{
      axios.get(`http://localhost:5000/league?id=${id}`)
      .then(res=>
    setArray(res.data))
      .catch(err=>{console.log(err)})
  }, [id])
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
  let cookies=new Cookies();
    return (
        <>
            <Container id={id}>
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
                    <NavLinks to="/aboutus"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}>About</NavLinks>
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
                    <NavLinks to="signup"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Sign Up</NavLinks>
                </NavItem> }
            </NavMenu>
            {logIn?  <ul style={{listStyle: 'none'}}>
            <MenuItems style={{marginRight: 50}} ref={refUser} onClick={()=>{setOpenUser(!openUser)}}>
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
                </MenuItems> </ul>
            : 
            <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>

            }
                    {/* <Search type='text' /> */}
                </Navbar>
                <LeagueInfoContainer
                initial={{scale: 0.6, opacity: 0.7}} 
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 0.4}}
                id={id}>
                    <LeagueIcon src={icon} />
                    <LeagueInfo>
                    <LeagueName id={id}>
                    {name}
                    </LeagueName>
                    </LeagueInfo>                    
                </LeagueInfoContainer>
                <LeagueTableContainer>
                    <LeagueTable initial={{y: '100vw'}}
                    animate={{y: 0}}
                    transition={{duration: 0.5, ease: 'easeIn'}}>
                        <LeagueTableHeader id={id}>
                            <LeagueTableHeaderRow font1={font1} color3={color3}>
                            <LeagueTableHeaderContent id={id}>Pos</LeagueTableHeaderContent>
                            <LeagueTableHeaderContent id={id}>Name</LeagueTableHeaderContent>
                            <LeagueTableHeaderContent id={id}>G</LeagueTableHeaderContent>
                            <LeagueTableHeaderContent id={id}>W</LeagueTableHeaderContent>
                            <LeagueTableHeaderContent id={id}>D</LeagueTableHeaderContent>
                            <LeagueTableHeaderContent id={id}>L</LeagueTableHeaderContent>
                            <LeagueTableHeaderContent id={id}>GF</LeagueTableHeaderContent>
                            <LeagueTableHeaderContent id={id}>GA</LeagueTableHeaderContent>
                            <LeagueTableHeaderContent id={id}>GD</LeagueTableHeaderContent>
                            <LeagueTableHeaderContent id={id}>Pts</LeagueTableHeaderContent>
                            </LeagueTableHeaderRow>
                        </LeagueTableHeader>
                        <LeagueTableBody>
                        {array.map((obj)=>{
                            return(<>
                            <LeagueTableRow id={id} font2={font2}>
                            <LeagueTableRowContent id={id}>{obj.standings}</LeagueTableRowContent>
                            <LeagueTableRowContent id={id} style={{textAlign: 'left'}}><TeamLogo src={images[obj.team_id]} /><TeamName style={{marginLeft: '15px'}} id={id} team_id={obj.team_id} to={`/team/${obj.team_id}`}>{obj.name}</TeamName></LeagueTableRowContent>
                            <LeagueTableRowContent id={id}>{obj.played}</LeagueTableRowContent>
                            <LeagueTableRowContent id={id}>{obj.won}</LeagueTableRowContent>
                            <LeagueTableRowContent id={id}>{obj.drawn}</LeagueTableRowContent>
                            <LeagueTableRowContent id={id}>{obj.lost}</LeagueTableRowContent>
                            <LeagueTableRowContent id={id}>{obj.gf}</LeagueTableRowContent>
                            <LeagueTableRowContent id={id}>{obj.ga}</LeagueTableRowContent>
                            <LeagueTableRowContent id={id}>{obj.gd}</LeagueTableRowContent>
                            <LeagueTableRowContent id={id}>{obj.points}</LeagueTableRowContent>
                            </LeagueTableRow>
                            </>
                            )}
                            )}
                            
                        </LeagueTableBody>
                    </LeagueTable>
                </LeagueTableContainer>
                <Footer></Footer>
            </Container>
        </>
    )
}

export default LeagueDisplay


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
top: 75px;
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
