import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'
import {motion} from 'framer-motion'
export const LeaguesContainer=styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;

@media screen and (max-width: 768px){
    height: 1100px;
}

@media screen and (max-width: 480px){
    height: 1300px;
}`;

export const LeaguesWrapper=styled(motion.div)`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr; 
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}`;

export const LeaguesCard=styled(LinkR)`
background: #fff;
color: #000;
text-decoration: none;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 20px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.08);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}`

export const LeaguesIcon=styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;`

export const LeaguesH1=styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px){
    font-size: 2rem;}`;

export const LeaguesH2=styled(motion.h2)`
font-size: 1rem;
margin-bottom: 10px;`;

export const LeaguesP=styled(motion.p)`
font-size: 1rem;
text-align: center;`