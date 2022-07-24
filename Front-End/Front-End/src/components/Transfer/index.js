import React, {useState} from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Container, FormWrap, Icon, FormContent, FormH1, Form, FormLabel, FormInput} from '../Signin/SigninElements'
import Select from 'react-select';
import { teamNames } from '../HeroSection/Data'
const Transfers = () => {
    const [toTeam, setToteam]=useState();
    const [player_id, setPlayer_id]=useState();
    const [fee, setFee]=useState(0);
    const transferPlayer=()=>{
        var data={
            player_id:player_id,
            team_id: toTeam, 
            fee: fee
        }
        Axios.post('http://localhost:5000/transfer', data)
        .then((res)=>{console.log(res.data)})
    }

    return (
        <div>
            <Container>
                <FormWrap>
                    <Icon to='/'>xFutbol</Icon>
                    <FormContent>
                        <Form action='POST'>
                        <FormH1>Transfer Page</FormH1>
                            <FormLabel htmlFor='for'>PlayerID</FormLabel>
                            <FormInput type='number' required onChange={(e)=>{setPlayer_id(e.target.value)}} />
                            <FormLabel htmlFor='for'>To Team</FormLabel>
                            <FormSelect placeholder={'e.g. FC Barcelona'} classNamePrefix='Select' onChange={(e)=>{setToteam(e.value)}} options={teamNames.map((obj, i)=>{return {value: obj.team_id, label: obj.name}})} />
                            <FormLabel htmlFor='for'>Fee</FormLabel>
                            <FormInput type='number' onChange={(e)=>{setFee(e.target.value)}} />
                            <FormButton to={'/transferlist'} type='submit' onClick={transferPlayer}>Transfer</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </div>
    )
}

export default Transfers

export const FormButton=styled(LinkR)`
background: #01bf71;
text-decoration: none;
text-align: center;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;`

const FormSelect=styled(Select)`
margin-bottom: 32px;
& .Select__control{
  height: 50px;
  width: auto;
border: none;
border-radius: 4px;
}

& .Select__menu{
  max-height: 180px;
  overflow: hidden;
}
`