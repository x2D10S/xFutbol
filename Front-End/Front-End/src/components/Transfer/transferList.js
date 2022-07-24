import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import axios from 'axios';
import {images} from '../LeagueDisplay/Data'
const Container=styled.div`
min-height: 692px;
position: relative;
display: flex;
flex-direction: column;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(108deg, rgba(1, 147, 86,1) 0%, rgba(10, 201,122,1) 100%);`;

const Icon=styled(LinkR)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
}
`;

const TransferList = () => {
    const [tData, setTData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/transferlist')
        .then(res=>{setTData(res.data)})
        .catch(err=>console.log(err))
    }, [])
    return (
        <div>
        <Container>
            <Icon to='/'>xFutbol</Icon>
            <h1 style={{fontSize: '25px', textAlign: 'center'}}>Transfer List</h1>
            <TableContainer>
                <Table>
                    <Thead>
                        <TheadRow>
                            <TheadData>PlayerID</TheadData>
                            <TheadData>Name</TheadData>
                            <TheadData>From</TheadData>
                            <TheadData>To</TheadData>
                            <TheadData>Fee</TheadData>
                        </TheadRow>
                    </Thead>
                    <Tbody>
                    {
                        tData.map((obj, i)=>{
                            return(
                                <>
                                <TbodyRow>
                            <TData>{obj.player_id}</TData>
                            <TData>{obj.name}</TData>
                            <TData><Logo to={`/team/${obj.from_team}`}>
                                <img alt={`${obj.from_team}`}  src={(obj.from_team===109)?images[109.1]: images[obj.from_team]} />
                                </Logo>
                            </TData>
                            <TData><Logo to={`/team/${obj.to_team}`} src={images[obj.to_team]} >
                            {/* <img alt={`${obj.to_team}`} src={images[obj.to_team]} /> */}
                            <img alt={`${obj.to_team}`} src={(obj.to_team===109)?images[109.1]: images[obj.to_team]} />
                                </Logo>
                            </TData>
                            <TData>€{obj.fee}m</TData>
                        </TbodyRow>
                                </>
                            )
                        })
                    }
                    </Tbody>
                </Table>
            </TableContainer>
        </Container>
        </div>
    )
}

export default TransferList

const Logo=styled(LinkR)`
height: 80px;
max-width: auto;
margin-top: 10px;
& img{
    height: 80px;
    margin-top: 10px;
}
`;

const TableContainer=styled.div`
margin-top: 10%;
margin-left: 30px;
margin-right: 30px;
`;

const Table=styled.table`
table-layout: auto;
width: 100%;
border-collapse: collapse;
max-height: 600px;
overflow: hidden;
overflow-y: scroll;
overflow-x: scroll;
`;

const Thead=styled.thead``;

const TheadRow=styled.tr`
line-height: 2.5rem;
background: transparent;
`;

const TheadData=styled.th`
font-size: 20px;
font-weight: bold;
color: #000;
`;

const Tbody=styled.tbody``;


const TbodyRow=styled.tr`
line-height: 2.5rem;
border-bottom: solid #01bf71 1px;
background: #000;
`;

const TData=styled.td`
font-size: 20px;
text-align: center;
color: #fff;
`;