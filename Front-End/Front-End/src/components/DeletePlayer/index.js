import React, {useState} from 'react'
import Axios from 'axios'
import {Container, FormWrap, Icon, FormContent, FormH1, Form, FormLabel, FormInput, FormButton} from '../Signin/SigninElements'


const DeletePlayer = () => {
    const [status, setStatus]=useState('');
    const [player_id, setPlayer_id]=useState();
    const deletePlayer=()=>{
        Axios.post('http://localhost:5000/deleteplayer', {player_id: player_id})
        .then((res)=>{console.log(res.data)
        setStatus('Player deleted.')})
    }
    return (
        <div>
          <Container>
                <FormWrap>
                    <Icon to='/'>
                        xFutbol
                    </Icon>
                    <FormContent>
                    <h2 style={{textAlign: 'center'}}>{status}</h2>
                        <Form>
                            <FormH1>Delete Player</FormH1>
                            <FormLabel htmlFor='for'>PlayerID</FormLabel>
                            <FormInput type='number' required  onChange={(e)=>{setPlayer_id(e.target.value)}}/>
                            <FormButton onClick={deletePlayer}>Delete</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </div>
    )
}

export default DeletePlayer