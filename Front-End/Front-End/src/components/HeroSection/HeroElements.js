import styled from 'styled-components'
import {motion} from 'framer-motion';
import {Link as LinkR} from 'react-router-dom'
export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
paddding: 0 30px;
height: 800px;
position: relative;
z-index: 1;

:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0,0.2) 0%,
    rgba(0,0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%,
    transparent 100%);
    z-index: 2;
}`;

export const HeroBg=styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;`;

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`;

export const HeroContent=styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
${'' /* background: rgba(1, 191, 113, 0.9); */}
border-radius: 50px;
`

export const HeroP=styled(motion.h1)`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;
@media screen and (max-width: 768px){
    font-size: 24px;
}
@media screen and (max-width: 480px){
    font-size: 18px;
}`;

export const HeroSearchContainer=styled(motion.div)`
 margin-top: 10px;
 display: flex;
  flex-direction: column;
  width: 30em;
  height: 3.8em;
  background-color: rgba(1, 191, 113, 1);
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
overflow: hidden;
`;

export const HeroSearchInputContainer=styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 15px;
`;

export const HeroInput=styled.input`
 width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 21px;
  color: #12112e;
  font-weight: 500;
  border-radius: 6px;
  background-color: transparent;
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    color: #000;
    transition: all 250ms ease-in-out;
  }`;

export const SearchIcon=styled.span`
 color: #000;
  font-size: 27px;
  margin-right: 10px;
  margin-top: 6px;
  vertical-align: middle;
`;

export const CloseIcon=styled(motion.span)`
 color: #000;
  font-size: 23px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #dfdfdf;
  }`;

export const HeroSearchContent = styled(LinkR)`
  width: 100%;
  ${'' /* height: 100%; */}
  display: flex;
  flex-direction: column;
  padding: 15px;
  ${'' /* overflow-y: auto; */}
  text-decoration: none;
  color: #000;
`;

export const LineSeperator = styled.span`
  display: flex;
  min-width: 100%;
  min-height: 2px;
  background-color: #000;
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
