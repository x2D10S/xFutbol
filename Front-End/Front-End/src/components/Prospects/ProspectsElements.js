import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';
import {motion} from 'framer-motion'
export const Container=styled.div`
min-height: 692px;
position: relative;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: #000;
color: #fff;`;

export const HeaderContent=styled(motion.h1)`
line-height: 2.5rem;
margin-bottom: 10px;
color: #01bf71;
`;

export const Wrapper=styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width:400px ){
    height: 80%;
}`;

export const BodyContent=styled.div`
margin-top: 40px;
display: grid;
grid-template-columns: auto 1fr;
grid-column-gap: 40px;`;

export const Icon=styled(LinkR)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
}`;

export const Content=styled.div`
display: flex;
flex-direction: column;
margin-top: 70px;
margin-left: 30px;
width: 600px;
`;

export const Image=styled.img`
margin-left: 20px;
height: 600px;
max-width: auto;
`

export const Table=styled(motion.table)`
margin-top: 30px;
table-layout: auto;
width: 97%;
border-collapse: collapse;
overflow-x: scroll;`;

export const Thead=styled.thead``;

export const TheadRow=styled.tr`
line-height: 2.5rem;`;

export const TheadData=styled.th`
font-size: 20px;
font-weight: 100;
position: sticky;
background: black;
top: 0;`;

export const Tbody=styled.tbody``

export const Trow=styled.tr`
line-height: 2.5rem;
background: #01bf71;
color: black;
border-bottom: solid #000 1px;`

export const Tdata=styled.td`
font-size: 20px;
text-align: center;`;

export const Description=styled(motion.p)`
font-size: 20px;
grid-area: 2;`

export const TableContainer=styled.div`
 overflow: auto;
  max-height: 600px;
`;

export const ImageContent=styled(motion.div)`
display: flex;
flex-direction: column;
align-items: center;`;