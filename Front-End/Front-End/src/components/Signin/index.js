import React, {useState} from 'react'
import { FormButton, FormContent, Container, FormWrap, Icon, Form, FormH1,
FormLabel, FormInput, Text } from './SigninElements'
import Axios from 'axios';
import {useNavigate} from 'react-router-dom'

const SignIn = () => {
    const [loginStatus, setLoginStatus]=useState('');
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    Axios.defaults.withCredentials=true;
    let navigate=useNavigate(); 
    const login=()=>{
        Axios.post('http://localhost:5000/signin', {username: username, password: password})
        .then((response)=>{console.log(response.status)
        if(response.status===202){
            setLoginStatus('Login Successful')
            navigate(0);
        }}).catch((err)=>{
            if(err.response.status===412)
            setLoginStatus('Wrong password...')
            else{
                setLoginStatus('Username not found...');
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
                    <FormContent>
                    <h1 style={{textAlign: 'center'}}>{loginStatus}</h1>
                        <Form>
                            <FormH1>Sign in to your account.</FormH1>
                            <FormLabel htmlFor='for'>Username</FormLabel>
                            <FormInput type='text' required onChange={(e)=>{setUsername(e.target.value)}}/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required onChange={(e)=>{setPassword(e.target.value)}} />
                            <FormButton onClick={login}>Sign In</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </div>
    )
}

export default SignIn
