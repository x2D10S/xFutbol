import React, {useState, useEffect} from 'react'
import {Container, Wrapper, Icon, Content, Table, Thead, TheadRow, TheadData,
Tbody, Trow, Tdata, Image, Description, BodyContent, HeaderContent, TableContainer,
ImageContent} from './ProspectsElements'
import axios from 'axios';
import Footer from '../Footer';
import { images } from '../LeagueDisplay/Data';
const Prospects = () => {
    const [array, setArray]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/prospects')
        .then(res=>{setArray(res.data)})
    }, [])

    return (
        <div>
           <Container>
               <Wrapper>
                   <Icon to='/'>xFutbol</Icon>
                   <Content>
                       <HeaderContent
                       initial={{scale: 0.7, opacity: 0.8}}
                       animate={{scale: 1, opacity: 1}}
                       transition={{duration: 0.4}}
                       >Prospects 2021</HeaderContent>
                       <Description
                       initial={{scale: 0.7, opacity: 0.8}}
                       animate={{scale: 1, opacity: 1}}
                       transition={{duration: 0.4}}
                       >The brightest talents and hidden gems discovered over the year 2021. Some of these players might dominate the world of football for years to come. Here's a list of the young talents that took the footballing universe by storm last year.</Description>
                   </Content>
                   <BodyContent>
                   <ImageContent
                   initial={{x: '-100vw'}}
                   animate={{x: 0}}
                   transition={{duration: 0.6}}
                   >
                   <Image src={require('../images/Prospect2.svg').default} />
                   <Description>Golden Boy 2021: Pedri</Description>
                   </ImageContent>
                   <TableContainer>
                   <Table
                   initial={{x: '100vw'}}
                   animate={{x: 0}}
                   transition={{duration: 0.6}}
                   >
                       <Thead>
                           <TheadRow>
                               <TheadData>Name</TheadData>
                               <TheadData>Team</TheadData>
                               <TheadData>Age</TheadData>
                               <TheadData>Position</TheadData>
                               <TheadData>Nationality</TheadData>
                               <TheadData>FIFA Rating</TheadData>
                               <TheadData>Potential</TheadData>
                               <TheadData>Market Value</TheadData>
                           </TheadRow>
                       </Thead>
                       <Tbody>
                       {
                               array.map((obj)=>{
                                   return(
                                       <>
                                       <Trow>
                               <Tdata>{obj.name}</Tdata>
                               <Tdata><img src={images[obj.team_id]} style={{height: 45, marginTop: 5}} /></Tdata>
                               <Tdata>{obj.age}</Tdata>
                               <Tdata>{obj.position}</Tdata>
                               <Tdata>{obj.nationality}</Tdata>
                               <Tdata>{obj.fifa_rating}</Tdata>
                               <Tdata>{obj.potential}</Tdata>
                               <Tdata>€{obj.market_value}m</Tdata>
                           </Trow>
                                       </>
                                   )
                               })
                           }
                       
                       </Tbody>
                   </Table>
                   </TableContainer>
                   </BodyContent>
               </Wrapper>
           </Container>
           <Footer />
        </div>
    )
}

export default Prospects
