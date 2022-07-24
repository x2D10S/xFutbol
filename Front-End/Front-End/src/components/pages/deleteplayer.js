import React, {useEffect} from 'react'
import DeletePlayer from '../DeletePlayer'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
const DeletePlayerPage = () => {
    let cookies=new Cookies();
    let navigate=useNavigate();
    useEffect(()=>{
        if(cookies.get('isAdmin')==='0'||cookies.get('isAdmin')===undefined)
        navigate('/', {replace: true})
    })
    return (
        <div>
            <DeletePlayer />
        </div>
    )
}

export default DeletePlayerPage
