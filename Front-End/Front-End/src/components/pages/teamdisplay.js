import React from 'react'
import PlayerDisplay from '../PlayerDisplay'
const TeamDisplayPage = ({team_id, team_name, logIn, isAdmin}) => {
    return (
        <div>
            <PlayerDisplay logIn={logIn} team_name={team_name} team_id={team_id} isAdmin={isAdmin} />
        </div>
    )
}

export default TeamDisplayPage
