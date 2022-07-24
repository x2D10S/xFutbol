import Axios from 'axios';
import React, {useState} from 'react'
import {Container, FormWrap, Icon, FormContent, FormH1, Form, FormLabel, FormInput, FormButton} from '../Signin/SigninElements'
import Select from 'react-select';
import styled from 'styled-components';
import { teamNames } from '../HeroSection/Data';
import { useNavigate } from 'react-router-dom';
const PlayerCreation = () => {
    const [name, setName]=useState('');
    const [age, setAge]=useState(null);
    const [nationality, setNationality]=useState(null);
    const [position, setPosition]=useState(null);
    const [fifa_rating, setFifa_rating]=useState(null);
    const [potential, setPotential]=useState(null);
    const [bdor_ranking, setBdor_ranking]=useState(null);
    const [team_id, setTeam_id]=useState();
    const [goals, setGoals]=useState(null);
    const [games, setGames]=useState(null);
    const [assists, setAssists]=useState(null);
    const [cs, setCs]=useState(null);
    const [status, setStatus]=useState('')
    let navigate=useNavigate();
    const addPlayer=()=>{
        var data={
            team_id: team_id,
            name: name, 
            age: age, 
            nationality: nationality,
            position: position,
            fifa_rating: fifa_rating,
            potential: potential,
            g_played: games,
            goals: goals,
            assists: assists,
            clean_sheets: cs,
            bdor_ranking: bdor_ranking
        };
        Axios.post('http://localhost:5000/createplayer', data)
        .then((res)=>{
        setStatus(res.data)
        if(res.data=="Player Created.")
        navigate(`/team/${team_id}`, {replace: true});
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
                    <h2 style={{textAlign: 'center'}}>{status}</h2>
                        <Form style={{maxHeight: 650, overflow: 'hidden', overflowY: 'scroll'}}>
                            <FormH1>Create Player</FormH1>
                            <FormLabel htmlFor='for'>Name</FormLabel>
                            <FormInput type='text' required onChange={(e)=>{setName(e.target.value)}}/>
                            <FormLabel htmlFor='for'>Age</FormLabel>
                            <FormInput type='number' onChange={(e)=>{setAge(e.target.value)}}/>
                            <FormLabel htmlFor='for'>Nationality</FormLabel>
                            <FormInput type='text' onChange={(e)=>{setNationality(e.target.value)}} />
                            <FormLabel htmlFor='for'>Position</FormLabel>
                            <FormInput type='text' onChange={(e)=>{setPosition(e.target.value)}} />
                            <FormLabel htmlFor='for'>Team</FormLabel>
                            <FormSelect placeholder={'e.g. FC Barcelona'} classNamePrefix='Select' onChange={(e)=>{setTeam_id(e.value)}} options={teamNames.map((obj, i)=>{return {value: obj.team_id, label: obj.name}})} />
                            <FormLabel htmlFor='for'>FIFA Rating</FormLabel>
                            <FormInput type='number'  onChange={(e)=>{setFifa_rating(e.target.value)}}/>
                            <FormLabel htmlFor='for'>Potential</FormLabel>
                            <FormInput type='number'  onChange={(e)=>{setPotential(e.target.value)}}/>
                            <FormLabel htmlFor='for'>Games Played</FormLabel>
                            <FormInput type='number' onChange={(e)=>{setGames(e.target.value)}} />
                            <FormLabel htmlFor='for'>Goals</FormLabel>
                            <FormInput type='number' onChange={(e)=>{setGoals(e.target.value)}} />
                            <FormLabel htmlFor='for'>Assists</FormLabel>
                            <FormInput type='number' onChange={(e)=>{setAssists(e.target.value)}} />
                            <FormLabel htmlFor='for'>Clean Sheets</FormLabel>
                            <FormInput type='number' onChange={(e)=>{setCs(e.target.value)}} />
                            <FormLabel htmlFor='for'>Ballon d'Or Ranking</FormLabel>
                            <FormInput type='number'  onChange={(e)=>{setBdor_ranking(e.target.value)}}/>
                            <FormButton type='submit' onClick={addPlayer}>Create</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </div>
    )
}

export default PlayerCreation

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
