import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';
import { motion } from 'framer-motion';
export const Container=styled.div`
min-height: 692px;
${'' /* position: fixed; */}
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: #fff/*linear-gradient(108deg, rgba(1, 147, 86,1) 0%, rgba(10, 201,122,1) 100%)*/;
`;

export const Nav = styled.nav`
background: #000;
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width){
    transition: 0.8s all ease;
}
`;

export const NavbarContainer=styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;`;

export const NavLogo=styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`;
export const MobileIcon=styled.div`
display: none;
@media screen and (max-width: 768px){
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;  
}`;

export const NavMenu=styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin: -22px;

@media screen and (max-width: 768px){
    display: none;
}`;

export const NavItem=styled.li`
height: 80px;
@media screen and (max-width: 768px){
    display: none;
}
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
export const NavBtn=styled.nav`
display: flex;
align-items: center;
@media screen and (max-width: 768px){
    display: none;
}`;
export const NavBtnLink=styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border:none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`;
export const SidebarContainer=styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen})=>(isOpen?'100%': '0')};
top: ${({isOpen})=>(isOpen? '0': '-100%')};
`;

export const CloseIcon=styled(FaTimes)`
color: #fff`;

export const Icon=styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;`;

export const SidebarWrapper=styled.div`
color: #fff;`

export const SidebarMenu=styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;


@media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
}`;


export const SidebarLink= styled(LinkR)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer;

&:hover{
    color: #01bf71;
    transition: 0.2s ease-in-out;
}`;

export const SideBtnWrap=styled.div`
display: flex;
justify-content: center;`;

export const SidebarRoute = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}`
export const InfoContainer = styled.div`
color: #fff;
background: ${({lightBg})=>(lightBg? '#f9f9f9': '#010606')};

@media screen and (max-width: 768px){
    padding: 100px 0;
};`;

export const InfoWrapper=styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;`;

export const InfoRow=styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart})=> imgStart? `'col2 col1'`: `'col1 col2'` };

@media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart})=>imgStart? `'col1' 'col2'`: `'col1 col1' 'col2 col2'`};
}`;

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;`;

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;`;

export const TextWrapper=styled(motion.div)`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;`;

export const TopLine=styled.p`
color: #01bf71;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;`;

export const Heading=styled.h1`
margin-bottom: 24px;
font-size: 40px;
line-height: 1.1;
font-weight: 600;
color: ${({lightText})=>(lightText?'#f7f8fa': '#010606')};

@media screen and (max-width: 480px){
    font-size: 32px;
}`;

export const Subtitle=styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({darkText})=>(darkText?'#010606': '#fff')};`;

export const BtnWrap=styled.div`
display: flex;
justify-content: flex-start;`;

export const ImgWrap=styled(motion.div)`
max-width: 555px;
height: 100%;`;

export const Img=styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;`;

export const FooterContainer=styled.footer`
background-color: #101522;`

export const FooterWrap=styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;`;

export const FooterLinksContainer=styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px){
    padding-top: 32px;
}`;

export const FooterLinksWrapper=styled.div`
display: flex;

@media screen and (max-width: 820px){
    flex-direction: column;
}`;

export const FooterLinkItems=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
}`;

export const FooterLinkTitle=styled.h1`
font-size: 14px;
margin-bottom: 16px`;

export const FooterLink=styled(LinkR)`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;

&:hover{
    color: #01bf71;
    transition: 0.3s ease-out;
}`;

export const FinalView=styled.section`
max-width: 1000px;
width: 100%;`;

export const FinalViewWrap=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px){
    flex-direction: column;
}`;

export const FinalLogo=styled(LinkR)`
color: #fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;`;

export const WebsiteRights=styled.small`
color: #fff;
margin-bottom: 16px;
`;

export const SocialIcons=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;`;

export const SocialIconLinks=styled.a`
color: #fff;
font-size: 24px;`;