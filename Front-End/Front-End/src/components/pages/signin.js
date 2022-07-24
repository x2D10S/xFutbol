import React, {useEffect} from 'react'
import SignIn from '../Signin';
import {useNavigate} from 'react-router-dom'
const SignInPage = ({logIn}) => {
    let navigate=useNavigate();
    useEffect(()=>{
        if(logIn)
        navigate('/', {replace: true});
    }, [logIn])
    
    return (
        <div>
         <SignIn />
        </div>
    )
}

export default SignInPage;
