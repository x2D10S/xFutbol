import React, {useEffect} from 'react'
import Transfers from '../Transfer'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
const TransferPage = ({isAdmin}) => {
    let navigate=useNavigate();
    let cookies=new Cookies();
    useEffect(()=>{
        if(cookies.get('isAdmin')==='0'||cookies.get('isAdmin')===undefined)
        navigate('/', {replace: true})
    }, [])
    return (
        <div>
            <Transfers/>
        </div>
    )
}

export default TransferPage
