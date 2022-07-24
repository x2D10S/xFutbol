import React, {useState, useEffect, useRef} from 'react'
import Video from '../video/video1.mp4'
import {IoSearch, IoClose} from 'react-icons/io5'
import { HeroBg, HeroContainer, VideoBg, HeroContent,  HeroP, HeroSearchContainer, HeroSearchInputContainer, HeroInput,
SearchIcon, CloseIcon, HeroSearchContent, LineSeperator} from './HeroElements'
import { useClickOutside } from "react-click-outside-hook";
import {AnimatePresence} from 'framer-motion';
import { teamNames } from './Data';
const Hero = () => {

    const [searchQuery, setSearchQuery]=useState("");
const [isExpanded, setExpanded]=useState(false);
const [ref, isClickOutside]=useClickOutside();
const inputRef=useRef();
const expandContainer=()=>{
    setExpanded(true);
}
const collapseContainer=()=>{
    setExpanded(false);
    setSearchQuery("");
    if(inputRef.current)
    inputRef.current.value="";
}
const containerTransition={type: 'spring', damping: 22, stiffness: 150}
const containerVarients={
    expanded: {
height: "20em"
    },
    collapsed: {
height: "3.8em"
    }
}

useEffect(()=>{
    if(isClickOutside)collapseContainer();
}, [isClickOutside])
    return (
        <HeroContainer id="home">'
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
        </HeroBg>
        <HeroContent>
            <HeroP animate={{scale: 1.0, opacity:1}}
            initial={{scale:0.8, opacity: 0.3}}
            transition={{duration: 0.3}}>
                A revolutionary experience in the footballing world awaits you...
                <br />Search for your favourite team now!
            </HeroP>
            <HeroSearchContainer animate={isExpanded?"expanded": "collapsed"} variants={containerVarients}
            ref={ref}
            transition={containerTransition}>
                <HeroSearchInputContainer>
                <SearchIcon>
                <IoSearch />
                </SearchIcon>
                    <HeroInput placeholder="Your Favourite Team..." onFocus={expandContainer}   
                    ref={inputRef}
                    value={searchQuery}
                    onChange={e=>setSearchQuery(e.target.value)}
                     />
                    <AnimatePresence>
                  {isExpanded &&  <CloseIcon onClick={collapseContainer} key="close-icon"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}>
                    <IoClose />
                </CloseIcon>}
                    </AnimatePresence>
                </HeroSearchInputContainer>
                <LineSeperator />
                {teamNames.filter((val)=>{
                    if(searchQuery===""){
                        return val;
                    }
                    else if(val.name.toLowerCase().includes(searchQuery.toLowerCase())){
                        return val;
                    }
                }).map((val, key)=>{
                    return(
                        <HeroSearchContent key={val.team_id} to={`/team/${val.team_id}`}>
                {val.name}
                </HeroSearchContent>
                    )
                })
                    }
            </HeroSearchContainer>
        </HeroContent>
        </HeroContainer>
    )
}

export default Hero
