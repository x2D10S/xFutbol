import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import Epl from '../images/BGEPL.jpg'
import Bund from '../images/BGBundesliga.jpg'
import LaLg from '../images/BGLaLiga.jpg'
import Lig1 from '../images/BGLigue1.jpg'
import SerA from '../images/BGSerieA.jpg'
import { PremierLeagueContainer, LaLigaContainer,  SerieAContainer, Ligue1Container, BundesligaContainer } from './Data';
import {motion} from 'framer-motion'
export const Container=styled.div`
min-height: 692px;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: url(${({id})=>id===2021? Epl : id===2014? LaLg : id===2002? Bund: id===2019? SerA: Lig1});
background-size: cover;
background-repeat: no-repeat;`;

export const Navbar=styled.div`
background: 'transparent';
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

// export const Search=styled.input`
// margin-right: 30px;
// border-radius: 10px;
// height: 30px;
// width: 250px;`

export const LeagueInfoContainer=styled(motion.div)`
background: ${({id})=>id===2021? PremierLeagueContainer.color1 : id===2014? LaLigaContainer.color1 : id===2002? BundesligaContainer.color1 : id===2019? SerieAContainer.color1 : Ligue1Container.color1};
${'' /* background: #fff; */}
display: flex;
flex-direction: row;
align-items: center;
height: 200px;
width: 600px;
border-radius: 40px;
margin-left: 20px;
margin-right: 20px;
margin-top: 20px;`

export const LeagueIcon=styled.img`
${'' /* margin-top: 12px; */}
margin-left: 20px;
height: 160px;
width: 160px;`

export const LeagueInfo=styled.div`
${'' /* display: flex;
flex-direction: column; */}
margin-left: 30px;
margin-top: 10px;`

export const LeagueName=styled.h1`
font-size: 30px;
color: ${({id})=>id===2021? PremierLeagueContainer.infoFont : id===2014? LaLigaContainer.infoFont: id===2002? BundesligaContainer.infoFont: id===2019? SerieAContainer.infoFont : Ligue1Container.infoFont };`

export const LeagueTableContainer=styled.div`
${'' /* background: rgb(233,0,82); */}
margin-top: 15px;
margin-left: 30px;
margin-right: 30px;
margin-bottom: 50px;`

export const LeagueTable=styled(motion.table)`
table-layout: auto;
width: 100%;
border-collapse: collapse;`

export const LeagueTableHeader=styled.thead``;

export const LeagueTableHeaderRow=styled.tr`
line-height: 2.5rem;
;
`

export const LeagueTableRow=styled.tr`
line-height: 2.5rem;
background: ${({id})=>id===2021? PremierLeagueContainer.color3: id===2014?LaLigaContainer.color3: id===2002? BundesligaContainer.color3: id===2019? SerieAContainer.color3: Ligue1Container.color3 };
border-bottom: solid #000 1px;
transition: all 0.2s ease-in-out; 
&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
}`

export const LeagueTableHeaderContent=styled.th`
font-size: 20px;
font-weight: 100;
color: ${({id})=>id===2021? PremierLeagueContainer.font2: id===2014? LaLigaContainer.font2: id===2002? BundesligaContainer.font2: id===2019? SerieAContainer.font2: Ligue1Container.font2};`

export const LeagueTableBody=styled.tbody`
box-shadow: 3px 0px 8px 0px #000;`;

export const LeagueTableRowContent=styled.td`
font-size: 20px;
text-align: center;
color: ${({id})=>id===2021? PremierLeagueContainer.font1: id===2014? LaLigaContainer.font1: id===2002? BundesligaContainer.font1: id===2019? SerieAContainer.font1: Ligue1Container.font1};
`
export const TeamName=styled(LinkR)`
text-decoration: none;
color: ${({id})=>id===2021?PremierLeagueContainer.font1: id===2014? LaLigaContainer.font1: id===2002? BundesligaContainer.font1: id===2019? SerieAContainer.font1: Ligue1Container.font1};`

export const TeamLogo=styled.img`
height: 20px;
max-width: 100%;`