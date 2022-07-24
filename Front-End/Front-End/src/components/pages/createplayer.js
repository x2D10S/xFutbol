import React, {useEffect} from 'react'
import PlayerCreation from '../PlayerCreation'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'
const PlayerCreationPage = () => {
let navigate=useNavigate();
let cookies=new Cookies();
    useEffect(()=>{
        if(cookies.get('isAdmin')==='0' ||cookies.get('isAdmin')===undefined)
        navigate('/', {replace: true});
})
    return (
        <div>
            <PlayerCreation />
        </div>
    )
}

export default PlayerCreationPage
