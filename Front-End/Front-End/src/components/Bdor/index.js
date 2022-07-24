import React, {useState, useEffect} from 'react'
import {Container, Wrapper, Icon, Content, Table, Thead, TheadRow, TheadData,
Tbody, Trow, Tdata, Image, Description, BodyContent, HeaderContent, TableContainer,
ImageContent} from './BdorElements'
import axios from 'axios';
import Footer from '../Footer';
import { images } from '../LeagueDisplay/Data';
const Bdor = () => {
    const [array, setArray]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/bdor')
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
                       >Ballon d'Or</HeaderContent>
                       <Description
                       initial={{scale: 0.7, opacity: 0.8}}
                       animate={{scale: 1, opacity: 1}}
                       transition={{duration: 0.4}}
                       >The best players of 2021. The winner of this award is considered to be one of all-time greats. To win it <b>7 times</b> is otherworldly. The only man to ever do so, Lionel Messi, has done it again!</Description>
                   </Content>
                   <BodyContent>
                   <ImageContent
                   initial={{x: '-100vw'}}
                   animate={{x: 0}}
                   transition={{duration: 0.6}}
                   >
                   <Image src={require('../images/bdor2.svg').default} />
                   <Description>Ballon d'Or 2021 winner: Lionel Messi</Description>
                   </ImageContent>
                   <TableContainer>
                   <Table
                    initial={{x: '100vw'}}
                   animate={{x: 0}}
                   transition={{duration: 0.6}}
                   >
                       <Thead>
                           <TheadRow isSticky={{}}>
                               <TheadData>Ranking</TheadData>
                               <TheadData>Name</TheadData>
                               <TheadData>Team</TheadData>
                               <TheadData>Age</TheadData>
                               <TheadData>Position</TheadData>
                               <TheadData>Nationality</TheadData>
                               <TheadData>FIFA Rating</TheadData>
                               <TheadData>Market Value</TheadData>
                           </TheadRow>
                       </Thead>
                       <Tbody>
                       {
                               array.map((obj)=>{
                                   return(
                                       <>
                                       <Trow>
                               <Tdata>{obj.bdor_ranking}</Tdata>
                               <Tdata>{obj.name}</Tdata>
                               <Tdata><img src={images[obj.team_id]} style={{height: 45, marginTop: 5}} /></Tdata>
                               <Tdata>{obj.age}</Tdata>
                               <Tdata>{obj.position}</Tdata>
                               <Tdata>{obj.nationality}</Tdata>
                               <Tdata>{obj.fifa_rating}</Tdata>
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

export default Bdor