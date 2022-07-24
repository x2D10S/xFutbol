import React, {useState} from 'react'
import Axios from 'axios';
import { FormButton, FormContent, Container, FormWrap, Icon, Form, FormH1,
FormLabel, FormInput} from './SignupElements'
import {useNavigate} from 'react-router-dom'
import Select from 'react-select'
import styled from 'styled-components';
import {teamNames} from '../HeroSection/Data'
const SignUp = () => {
    const [username, setUsername]=useState('');
    const [fav_team, setFav_team]=useState();
    const [password, setPassword]=useState('');
    const [status, setStatus]=useState('');
    let navigate=useNavigate(); 
    Axios.defaults.withCredentials=true;
    const register=()=>{
        Axios.post('http://localhost:5000/signup', {username: username,  password: password, fav_team: fav_team, is_admin: false}).then((response)=>{
        console.log(response.status)    
        if(response.status===201)
            {
                setStatus('User Registered...');
                navigate(0);
            }
        }).catch((err)=>{
            if(err.response.status===412){
                setStatus('Username already exists...')
            }
        })
    }

    return (
        <div>
            <Container>
                <FormWrap>
                    <Icon to='/'>
                        xFutbol
                    </Icon>
                    <h2 style={{textAlign: 'center'}}>{status}</h2>
                    <FormContent>
                        <Form>
                            <FormH1>Join Us!</FormH1>
                            <FormLabel htmlFor='for'>Username</FormLabel>
                            <FormInput type='text' required  onChange={(e)=>{setUsername(e.target.value)}}/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required  onChange={(e)=>{setPassword(e.target.value)}}/>
                            <FormLabel htmlFor='for'>Favourite Team</FormLabel>
                            {/* <FormInput type='number' required onChange={(e)=>{setFav_team(e.target.value)}} /> */}
                            <FormSelect placeholder={'e.g. FC Barcelona'} classNamePrefix='Select' onChange={(e)=>{setFav_team(e.value)}} options={teamNames.map((obj, i)=>{return {value: obj.team_id, label: obj.name}})} />
                            <FormButton onClick={register}>Sign Up!</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </div>
    )
}

export default SignUp

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