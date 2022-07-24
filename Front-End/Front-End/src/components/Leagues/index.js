import React, {useEffect} from 'react'
import { LeaguesContainer, LeaguesH1, LeaguesWrapper, LeaguesCard, LeaguesIcon,
LeaguesH2, LeaguesP } from './LeaguesElements'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const leagueArray=[{id: 1, icon: require('../images/champions-league.svg').default, h2: 'Champions League', p: 'The most prestigious football tournament in Europe and the world.'}, 
{id: 2021, icon: require('../images/premier-league-1.svg').default , h2: 'Premier League', p: 'Most watched league in the world, the English Premier League.'},
{id: 2014, icon: require('../images/la-liga.svg').default , h2: 'LaLiga Santander', p: 'Spanish league. Considered as one of the best leagues in the world.'},
{id: 2002, icon: require('../images/bundesliga-2.svg').default , h2: 'Bundesliga', p: 'German league. Home to some of the most dominant teams in Europe.'},
{id: 2019, icon: require('../images/serie-a-logo.svg').default , h2: 'Serie A', p: 'Italian league. The most defensive-minded league in the world.'},
{id: 2015, icon: require('../images/ligue1.svg').default , h2: 'Ligue 1 Uber Eats', p: 'French league. Home to some of the most iconic and richest teams in the world.'}
]
const Leagues = () => {
    const {ref, inView}=useInView();
    const animation=useAnimation();
    useEffect(()=>{
        if(inView){
            animation.start({
                scale: 1, opacity: 1, transition: {duration: 0.9}
            })
        }
        if(!inView){
            animation.start({
                opacity: 0.8, scale: 0.7
            })
        }
    }, [inView, animation])
    return (
        <div>
            <LeaguesContainer ref={ref} id= "leagues">
                <LeaguesH1>Leagues</LeaguesH1>
                 <LeaguesWrapper animate={animation}>
                 {leagueArray.map((obj, i)=>{
                     return(
                         <>
                         <LeaguesCard key={obj.id} to={`/league/${obj.id}`}>
                         <LeaguesIcon key={`${obj.id}Icon`} src={obj.icon} />
                         <LeaguesH2 key={`${obj.id}H2`}>{obj.h2}</LeaguesH2>
                         <LeaguesP key={`${obj.id}P`}>{obj.p}</LeaguesP>
                     </LeaguesCard> 
                         </>
                     )
                 })}             
                    </LeaguesWrapper>
            </LeaguesContainer>
        </div>
    )
}

export default Leagues
