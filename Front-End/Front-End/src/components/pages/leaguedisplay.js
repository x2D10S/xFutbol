import React from 'react'
import LeagueDisplay from '../LeagueDisplay'
const LeagueDisplayPage = ({id, icon, name, color1, color2, color3, font1, font2, infoFont, logIn }) => {
    return (
        <div>
            <LeagueDisplay logIn={logIn} id={id} icon={icon} name={name} color1={color1} color2={color2} color3={color3} font1={font1} font2={font2} infoFont={infoFont}/>
        </div>
    )
}

export default LeagueDisplayPage
