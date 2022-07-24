import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import { motion } from 'framer-motion';
export const Container=styled.div`
min-height: 692px;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: #000;
color: #fff;`;

export const Navbar=styled.div`
background: #000;
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;`

export const NavMenu=styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin: -22px;`

export const NavItem=styled.li`
height: 80px;
`;

export const NavLinks=styled(LinkR)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active{
    border-bottom: 3px solid #01bf71;
}`;

export const Logo=styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;`

export const TeamInfoContainer=styled(motion.div)`
display: flex;
flex-direction: row;
align-items: center;
height: 200px;
width: 600px;
border-radius: 40px;
margin-left: 20px;
margin-right: 20px;
margin-top: 20px;
background: #01bf71;
color: #010606;`;

// export const TeamLogo=styled.img`
// margin-left: 20px;
// height: 200px;
// width: 200px;`;

export const TeamLogo=styled.img`
margin-left: 20px;
height: 160px;
max-width: 100%;`;

export const TeamName=styled.h1`
font-size: 30px;
margin-left: 30px;
margin-top: 10px;`;

export const TeamTableContainer=styled.div`
margin-top: 15px;
margin-left: 30px;
margin-right: 30px;
margin-bottom: 50px;`

export const TeamTable=styled(motion.table)`
table-layout: auto;
width: 100%;
border-collapse: collapse;`;

export const TeamTableHead=styled.thead``;

export const TeamTableRow=styled.tr`
line-height: 2.5rem;
border-bottom: solid #000 1px;`;

export const TeamTableBody=styled.tbody``;

export const TeamTableHeaderContent=styled.th`
font-size: 20px;
font-weight: 100;`;

export const TeamTableRowContent=styled.td`
font-size: 20px;
text-align: center;
background: #01bf71;
color: #000;`;

export const TeamTableHeaderRow=styled.tr`
line-height: 2.5rem;`;