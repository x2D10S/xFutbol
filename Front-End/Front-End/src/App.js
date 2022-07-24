import { useState, useEffect } from 'react';
import './App.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages'
import SignInPage from './components/pages/signin';
import SignUpPage from './components/pages/signup';
import AboutUsPage from './components/pages/aboutus';
import DiscoverPage from './components/pages/discover';
import ScrollToTop from './ScrollToTop';
import LeagueDisplayPage from './components/pages/leaguedisplay';
import {PremierLeagueContainer, LaLigaContainer, BundesligaContainer, SerieAContainer, Ligue1Container} from './components/LeagueDisplay/Data'
import TeamDisplayPage from './components/pages/teamdisplay';
import TransferPage from './components/pages/transfer';
import PlayerCreationPage from './components/pages/createplayer';
import DeletePlayerPage from './components/pages/deleteplayer';
import ProspectPage from './components/pages/prospects';
import BdorPage from './components/pages/bdor';
import TransferListPage from './components/pages/transferlist';
import Cookies from 'universal-cookie'
import UCL from './components/pages/UCL';
function App() {
  const [logIn, IsLogIn]=useState(false);
  const [isAdmin, setAdmin]=useState(false);
  useEffect(()=>{
      const cookies= new Cookies();
    IsLogIn(Boolean(Number(cookies.get('loggedIn'))));
    setAdmin(Boolean(Number(cookies.get('isAdmin'))));
    console.log(logIn);
    console.log(isAdmin);
  }, [logIn, isAdmin])
  return (
    <Router>
    <ScrollToTop />
    <Routes>
      <Route exact path='/' element={<Home logIn={logIn} isAdmin={isAdmin} />} />
      <Route path='/signup' element={<SignUpPage logIn={logIn} />} />
      <Route path='/signin' element={<SignInPage logIn={logIn} />} />
      <Route path='/aboutus' element={<AboutUsPage logIn={logIn} />} />
      <Route path='/discover' element={<DiscoverPage logIn={logIn}/>} />
      <Route path='/transfer' element ={<TransferPage logIn={logIn} isAdmin={isAdmin}/>} />
      <Route path='/transferlist' element ={<TransferListPage logIn={logIn} />} />
      <Route path='/createplayer' element={<PlayerCreationPage logIn={logIn} isAdmin={isAdmin} />} />
      <Route path='/deleteplayer' element={<DeletePlayerPage logIn={logIn} isAdmin={isAdmin} />} />
      <Route path='/prospects' element={<ProspectPage logIn={logIn} isAdmin={isAdmin} />} />
      <Route path='/bdor' element={<BdorPage logIn={logIn} isAdmin={isAdmin} />} />
      <Route path= {`/league/1`} element={<UCL id='1' logIn={logIn} />} />
      <Route path= {`/league/2021`} element={<LeagueDisplayPage logIn={logIn} {...PremierLeagueContainer} />} />
      <Route path= {`/league/2014`} element={<LeagueDisplayPage logIn={logIn} {...LaLigaContainer} />} />
      <Route path= {`/league/2002`} element={<LeagueDisplayPage logIn={logIn} {...BundesligaContainer} />} />
      <Route path= {`/league/2019`} element={<LeagueDisplayPage logIn={logIn} {...SerieAContainer} />} />
      <Route path= {`/league/2015`} element={<LeagueDisplayPage logIn={logIn} {...Ligue1Container} />} />
      <Route path={`/team/65`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Manchester City FC'} team_id={65} />} />
      <Route path={`/team/57`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Arsenal FC'} team_id={57} />} />
      <Route path={`/team/58`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Aston Villa FC'} team_id={58} />} />
      <Route path={`/team/61`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Chelsea FC'} team_id={61} />} />
      <Route path={`/team/62`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Everton FC'} team_id={62} />} />
      <Route path={`/team/64`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Liverpool FC'} team_id={64} />} />
      <Route path={`/team/66`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Manchester United FC'} team_id={66} />} />
      <Route path={`/team/67`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Newcastle United FC'} team_id={67} />} />
      <Route path={`/team/68`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Norwich City FC'} team_id={68} />} />
      <Route path={`/team/73`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Tottenham Hotspur FC'} team_id={73} />} />
      <Route path={`/team/76`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Wolverhampton Wanderers FC'} team_id={76} />} />
      <Route path={`/team/328`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Burnley FC'} team_id={328} />} />
      <Route path={`/team/338`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Leicester City FC'} team_id={338} />} />
      <Route path={`/team/340`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Southampton FC'} team_id={340} />} />
      <Route path={`/team/341`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Leeds United FC'} team_id={341} />} />
      <Route path={`/team/346`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Watford FC'} team_id={346} />} />
      <Route path={`/team/354`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Crystal Palace FC'} team_id={354} />} />
      <Route path={`/team/397`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Brighton & Hove Albion FC'} team_id={397} />} />
      <Route path={`/team/402`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Brentford FC'} team_id={402} />} />
      <Route path={`/team/563`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'West Ham United FC'} team_id={563} />} />
      <Route path={`/team/77`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Athletic Club'} team_id={77} />} />
      <Route path={`/team/78`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Club Atlético de Madrid'} team_id={78} />} />
      <Route path={`/team/79`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'CA Osasuna'} team_id={79} />} />
      <Route path={`/team/80`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'RCD Espanyol de Barcelona'} team_id={80} />} />
      <Route path={`/team/81`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'FC Barcelona'} team_id={81} />} />
      <Route path={`/team/82`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Getafe CF'} team_id={82} />} />
      <Route path={`/team/83`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Granada CF'} team_id={83} />} />
      <Route path={`/team/86`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Real Madrid CF'} team_id={86} />} />
      <Route path={`/team/87`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Rayo Vallecano de Madrid'} team_id={87} />} />
      <Route path={`/team/88`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Levante UD'} team_id={88} />} />
      <Route path={`/team/89`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'RCD Mallorca'} team_id={89} />} />
      <Route path={`/team/90`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Real Betis Balompié'} team_id={90} />} />
      <Route path={`/team/92`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Real Sociedad de Fútbol'} team_id={92} />} />
      <Route path={`/team/94`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Villarreal CF'} team_id={94} />} />
      <Route path={`/team/95`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Valencia CF'} team_id={95} />} />
      <Route path={`/team/263`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Deportivo Alavés'} team_id={263} />} />
      <Route path={`/team/264`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Cádiz CF'} team_id={264} />} />
      <Route path={`/team/285`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Elche CF'} team_id={285} />} />
      <Route path={`/team/558`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'RC Celta de Vigo'} team_id={558} />} />
      <Route path={`/team/559`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Sevilla FC'} team_id={559} />} />
      <Route path={`/team/1`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'1. FC Köln'} team_id={1} />} />
      <Route path={`/team/2`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'TSG 1899 Hoffenheim'} team_id={2} />} />
      <Route path={`/team/3`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Bayer 04 Leverkusen'} team_id={3} />} />
      <Route path={`/team/4`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Borussia Dortmund'} team_id={4} />} />
      <Route path={`/team/5`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'FC Bayern München'} team_id={5} />} />
      <Route path={`/team/9`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Hertha BSC'} team_id={9} />} />
      <Route path={`/team/10`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'VfB Stuttgart'} team_id={10} />} />
      <Route path={`/team/11`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'VfL Wolfsburg'} team_id={11} />} />
      <Route path={`/team/15`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'1. FSV Mainz 05'} team_id={15} />} />
      <Route path={`/team/16`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'FC Augsburg'} team_id={16} />} />
      <Route path={`/team/17`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'SC Freiburg'} team_id={17} />} />
      <Route path={`/team/18`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Borussia Mönchengladbach'} team_id={18} />} />
      <Route path={`/team/19`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Eintracht Frankfurt'} team_id={19} />} />
      <Route path={`/team/21`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'SpVgg Greuther Fürth 1903'} team_id={21} />} />
      <Route path={`/team/28`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'1. FC Union Berlin'} team_id={28} />} />
      <Route path={`/team/36`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'VfL Bochum 1848'} team_id={36} />} />
      <Route path={`/team/38`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Arminia Bielefeld'} team_id={38} />} />
      <Route path={`/team/721`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'RB Leipzig'} team_id={721} />} />
      <Route path={`/team/98`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'AC Milan'} team_id={98} />} />
      <Route path={`/team/99`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'ACF Fiorentina'} team_id={99} />} />
      <Route path={`/team/100`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'AS Roma'} team_id={100} />} />
      <Route path={`/team/102`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Atalanta BC'} team_id={102} />} />
      <Route path={`/team/103`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Bologna FC 1909'} team_id={103} />} />
      <Route path={`/team/104`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Cagliari Calcio'} team_id={104} />} />
      <Route path={`/team/107`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Genoa CFC'} team_id={107} />} />
      <Route path={`/team/108`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'FC Internazionale Milano'} team_id={108} />} />
      <Route path={`/team/109`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Juventus FC'} team_id={109} />} />
      <Route path={`/team/110`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'SS Lazio'} team_id={110} />} />
      <Route path={`/team/113`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'SSC Napoli'} team_id={113} />} />
      <Route path={`/team/115`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Udinese Calcio'} team_id={115} />} />
      <Route path={`/team/445`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Empoli FC'} team_id={445} />} />
      <Route path={`/team/450`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Hellas Verona FC'} team_id={450} />} />
      <Route path={`/team/454`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Venezia FC'} team_id={454} />} />
      <Route path={`/team/455`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'US Salernitana 1919'} team_id={455} />} />
      <Route path={`/team/471`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'US Sassuolo Calcio'} team_id={471} />} />
      <Route path={`/team/488`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Spezia Calcio'} team_id={488} />} />
      <Route path={`/team/584`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'UC Sampdoria'} team_id={584} />} />
      <Route path={`/team/586`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Torino FC'} team_id={586} />} />
      <Route path={`/team/512`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Stade Brestois 29'} team_id={512} />} />
      <Route path={`/team/516`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Olympique de Marseille'} team_id={516} />} />
      <Route path={`/team/518`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Montpellier HSC'} team_id={518} />} />
      <Route path={`/team/521`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Lille OSC'} team_id={521} />} />
      <Route path={`/team/522`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'OGC Nice'} team_id={522} />} />
      <Route path={`/team/523`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Olympique Lyonnais'} team_id={523} />} />
      <Route path={`/team/524`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Paris Saint-Germain FC'} team_id={524} />} />
      <Route path={`/team/525`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'FC Lorient'} team_id={525} />} />
      <Route path={`/team/526`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'FC Girondins de Bordeaux'} team_id={526} />} />
      <Route path={`/team/527`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'AS Saint-Étienne'} team_id={527} />} />
      <Route path={`/team/529`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Stade Rennais FC 1901'} team_id={529} />} />
      <Route path={`/team/531`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'ES Troyes AC'} team_id={531} />} />
      <Route path={`/team/532`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Angers SCO'} team_id={532} />} />
      <Route path={`/team/541`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Clermont Foot 63'} team_id={541} />} />
      <Route path={`/team/543`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'FC Nantes'} team_id={543} />} />
      <Route path={`/team/545`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'FC Metz'} team_id={545} />} />
      <Route path={`/team/546`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Racing Club de Lens'} team_id={546} />} />
      <Route path={`/team/547`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'Stade de Reims'} team_id={547} />} />
      <Route path={`/team/548`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'AS Monaco FC'} team_id={548} />} />
      <Route path={`/team/576`} element={<TeamDisplayPage logIn={logIn} isAdmin={isAdmin} team_name={'RC Strasbourg Alsace'} team_id={576} />} />
    </Routes>
    </Router>
  );
}

export default App;
