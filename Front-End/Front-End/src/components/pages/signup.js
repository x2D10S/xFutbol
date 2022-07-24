import React, {useEffect} from 'react'
import SignUp from '../Signup';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie'
const SignUpPage = ({logIn}) => {
    let cookies=new Cookies();
   let navigate=useNavigate();
    useEffect(()=>{
        if(cookies.get('loggedIn')==='1')
        navigate('/', {replace: true})
    }, [logIn]);
    return (
        <div>
           <SignUp />
        </div>
    )
}

export default SignUpPage;
