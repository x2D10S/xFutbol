import React from 'react'
import styled from 'styled-components'
import Cookies from 'universal-cookie'
import {images} from '../LeagueDisplay/Data'
import {Link as LinkR, useNavigate} from 'react-router-dom'
const InfoLoggedIn = ({isAdmin}) => {
    let cookies=new Cookies();
    let navigate=useNavigate();
    const logOut=()=>{
        cookies.remove('user');
        cookies.remove('loggedIn');
        cookies.remove('isAdmin');
        cookies.remove('team');
        cookies.remove('name');
        cookies.remove('standings');
        cookies.remove('points')
        window.scrollTo(0,0)
        navigate(0);
    }
    return (
        <div>
            <Container id='user'>
            <Wrapper>
                <Column1>
                <TextWrapper>
                <TopLine>Welcome</TopLine>
                <Heading>{cookies.get('user')}</Heading>
                {
                    isAdmin?
                    <AdminButtons>
                    <Button style={{width: 95 }} onClick={logOut}>Logout</Button>
                        <ButtonLink to='/createplayer' >Create Player</ButtonLink>
                        <ButtonLink to='/transfer' >Transfer Player</ButtonLink>
                        <ButtonLink to='/deleteplayer' >Delete Player</ButtonLink>
                    </AdminButtons>
                    :
                    <Button onClick={logOut}>Logout</Button>

                }
                </TextWrapper>
                </Column1>
                <Column2>
                <FavTeamContainer>
                <Logo to={`/team/${Number(cookies.get('team'))}`}>
                    <img alt={`${cookies.get('team')}`} style={{height: 250, marginBottom: 20}} src={images[Number(cookies.get('team'))]} />
                </Logo>
               <TeamTextContainer>
               <TeamTextWrapper>
               <TopLine>Standings: </TopLine>
                <Heading>{cookies.get('standings')}</Heading>
               </TeamTextWrapper>
               <TeamTextWrapper>
               <TopLine>Points: </TopLine>
                <Heading>{cookies.get('points')}</Heading>
               </TeamTextWrapper>
               <TeamTextWrapper>
               <TopLine>Best Player: </TopLine>
                <Heading>{cookies.get('name')}</Heading>
               </TeamTextWrapper>
               </TeamTextContainer>
                </FavTeamContainer>
                </Column2>
            </Wrapper>
            </Container>
        </div>
    )
}

export default InfoLoggedIn


const Container=styled.div`
background-color: #010606;
color: #fff;

@media screen and (max-width: 768px){
    padding: 100px 0;
};`;

const Wrapper=styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: 'col1 col2';
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;`;


const TopLine=styled.p`
color: #01bf71;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`;

const Heading=styled.h1`
margin-bottom: 24px;
font-size: 40px;
line-height: 1.1;
font-weight: 600;
color: #f7f8fa;

@media screen and (max-width: 480px){
    font-size: 32px;
}
`;

const Column1=styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;`;


const Column2=styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;`;

const TextWrapper=styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;`;


const FavTeamContainer=styled.div`
max-width: 555px;
height: 100%;
display: flex;
flex-direction: column;
`;

const Logo=styled(LinkR)`
`;

const TeamTextContainer=styled.div`
display: flex;
justify-content: space-between;
`;
const TeamTextWrapper=styled.div`
margin-left: 10px;
margin-right: 10px;
`;

const Button=styled.button`
border-radius: 50px;
margin-bottom: 10px;
background: #fff;
text-decoration: none;
padding: 12px 30px;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out; 
&:hover{
    transition: all 0.2s ease-in-out;
    background:  #01BF71;
}
`;

const ButtonLink=styled(LinkR)`
border-radius: 50px;
margin-bottom: 10px;
color: #000;
background: #fff;
text-decoration: none; 
width: 95px;
font-size: 13px;
padding: 12px 30px;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out; 
&:hover{
    transition: all 0.2s ease-in-out;
    background:  #01BF71;
}
`;

const AdminButtons=styled.div`
display: grid;
grid-template-columns: 1fr 1fr;`;