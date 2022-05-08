import './Upcomming.css';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { faFutbol, faTableTennis, faBasketball, faPersonRifle, faFootball, faBan, faBaseball, faHockeyPuck, faPoo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


const Upcomming = () => {

    const [matchsData, setMatchsData] = useState({ name: [], players: [], odds: [] });
    const config = {
        headers: {"Access-Control-Allow-Origin": "*"} 
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        //console.log(query)//"app=article&act=news_content&aid=160990"
        var vars = query.split("&");
        //console.log(vars) //[ 'app=article', 'act=news_content', 'aid=160990' ]
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            //console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ] 
            if (pair[0] === variable) { return pair[1]; }
        }
        return (false);
    }

    const getTournamentList = (selected) => {
        if (selected === null) return '';
        axios.get(`http://109.205.56.69:4000/upcoming/:${selected}/:50/:30`, config)
            .then((response) => {
                setMatchsData({ name: [], players: [], odds: [] });
                console.log(response.data)
                let name = [];
                let players = [];
                let odds = [];
                response.data.slugSport.tournamentList.map((element, index) => {
                    name.push(element.name);
                    players.push(element.fixtureList[0].data.competitors);
                    //odds.push(element.fixtureList[0].groups[0].templates[0].markets[0]);
                    return ''
                });
                setMatchsData({ name: name, players: players, odds: odds });
                console.log(matchsData)
            });
    }

    let selected = getQueryVariable('sport');

    useEffect(() => {
        // Traitement de Live
        axios.get(`http://109.205.56.69:4000/livecount`, config)
            .then(res => {
                //SetLive(res.data.sportList.map(element => [element.slug, element.fixtureCount]))
            })
            .catch(err => {
                console.log(err);
            })

        console.clear()
        console.log(getQueryVariable('sport'))
        if (selected !== false) { getTournamentList(selected) }
        
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const makeDivNameUpcomming = (name, amount, selectedSport) => {
        switch (name) {
            case 'soccer':
                return (
                    <div className='sportDivLive'>
                        <FontAwesomeIcon icon={faFutbol} className="sportIconLive" />
                        <div className='sportsLiveContentLive'>
                            <p className={`sportsNameLive ${(selectedSport === 'soccer') ? 'SelectedSport' : ''}`}>Soccer</p>
                            <div className='sportsAmountLive'>{amount}</div>
                        </div>
                    </div>
                )
            case 'table-tennis':
                return (
                    <div className='sportDivLive'>
                        <FontAwesomeIcon icon={faTableTennis} className="sportIconLive" />
                        <div className='sportsLiveContentLive'>
                            <p className={`sportsNameLive ${(selectedSport === 'table-tennis') ? 'SelectedSport' : ''}`}>Table Tennis</p>
                            <div className='sportsAmountLive'>{amount}</div>
                        </div>
                    </div>
                )
            case 'tennis':
                return (
                    <div className='sportDivLive'>
                        <img src='https://i.imgur.com/k6vcguB.png' alt="tennis ball" className='sportIconLive' />
                        <div className='sportsLiveContentLive'>
                            <p className={`sportsNameLive ${(selectedSport === 'tennis') ? 'SelectedSport' : ''}`}>Tennis</p>
                            <div className='sportsAmountLive'>{amount}</div>
                        </div>
                    </div>
                )
            case 'basketball':
                return (
                    <div className='sportDivLive'>
                        <FontAwesomeIcon icon={faBasketball} className="sportIconLive" />
                        <div className='sportsLiveContentLive'>
                            <p className={`sportsNameLive ${(selectedSport === 'basketball') ? 'SelectedSport' : ''}`}>Basketball</p>
                            <div className='sportsAmountLive'>{amount}</div>
                        </div>
                    </div>
                )
            case 'cricket':
                return (
                    <div className='sportDivLive'>
                        <img src='https://i.imgur.com/YlV3fRF.png' alt="cricket" className='sportIconLive' />
                        <div className='sportsLiveContentLive'>
                            <p className={`sportsNameLive ${(selectedSport === 'cricket') ? 'SelectedSport' : ''}`}>Cricket</p>
                            <div className='sportsAmountLive'>{amount}</div>
                        </div>
                    </div>
                )
            case 'counter-strike':
                return (
                    <div className='sportDivLive'>
                        <FontAwesomeIcon icon={faPersonRifle} className="sportIconLive" />
                        <div className='sportsLiveContentLive'>
                            <p className={`sportsNameLive ${(selectedSport === 'counter-strike') ? 'SelectedSport' : ''}`}>CS : GO</p>
                            <div className='sportsAmountLive'>{amount}</div>
                        </div>
                    </div>
                )
            case 'rugby':
                return (
                    <div className='sportDivLive'>
                        <FontAwesomeIcon icon={faFootball} className="sportIconLive" />
                        <div className='sportsLiveContentLive'>
                            <p className={`sportsNameLive ${(selectedSport === 'rugby') ? 'SelectedSport' : ''}`}>Rugby</p>
                            <div className='sportsAmountLive'>{amount}</div>
                        </div>
                    </div>
                )
            case 'baseball':
                return (
                    <div className='sportDivLive'>
                        <FontAwesomeIcon icon={faBaseball} className="sportIconLive" />
                        <div className='sportsLiveContentLive'>
                            <p className={`sportsNameLive ${(selectedSport === 'baseball') ? 'SelectedSport' : ''}`}>Baseball</p>
                            <div className='sportsAmountLive'>{amount}</div>
                        </div>
                    </div>
                )
            case 'badminton':
                return (
                    <div className='sportDivLive'>
                        <img src='https://i.imgur.com/4zlTrjv.png' alt="badminton" className='sportIconLive' />
                        <div className='sportsLiveContentLive'>
                            <p className={`sportsNameLive ${(selectedSport === 'badminton') ? 'SelectedSport' : ''}`}>Badminton</p>
                            <div className='sportsAmountLive'>{amount}</div>
                        </div>
                    </div>
                )
            case 'dota-2':
                return (
                    <div className='sportDivLive'>
                        <img src='https://i.imgur.com/MZpsR2Z.png' alt="dota2" className='sportIconLive' />
                        <div className='sportsLiveContentLive'>
                            <p className={`sportsNameLive ${(selectedSport === 'dota-2') ? 'SelectedSport' : ''}`}>Dota 2</p>
                            <div className='sportsAmountLive'>{amount}</div>
                        </div>
                    </div>
                )
            case 'league-of-legends':
                return (
                    <div className='sportDivLive'>
                        <FontAwesomeIcon icon={faPoo} className="sportIconLive" />
                        <div className='sportsLiveContentLive'>
                            <p className={`sportsNameLive ${(selectedSport === 'league-of-legends') ? 'SelectedSport' : ''}`}>Lol</p>
                            <div className='sportsAmountLive'>{amount}</div>
                        </div>
                    </div>
                )
            case 'ice-hockey':
                return (
                    <div className='sportDivLive'>
                        <FontAwesomeIcon icon={faHockeyPuck} className="sportIconLive" />
                        <div className='sportsLiveContentLive'>
                            <p className={`sportsNameLive ${(selectedSport === 'ice-hockey') ? 'SelectedSport' : ''}`}>Ice-hockey</p>
                            <div className='sportsAmountLive'>{amount}</div>
                        </div>
                    </div>
                )
            default:
                return (
                    <div className='sportDivLive'>
                        <FontAwesomeIcon icon={faBan} className="sportIconLive" />
                        <div className='sportsLiveContentLive'>
                            <p className={`sportsNameLive ${(selectedSport === name) ? 'SelectedSport' : ''}`}>{name}</p>
                            <div className='sportsAmountLive'>{amount}</div>
                        </div>
                    </div>
                )
        }
    }
    makeDivNameUpcomming(null, null, null)
    getTournamentList(null)
    return (
        <div className='live'>
            <Navbar current={`Upcomming`} />
            <div className='contentLivePage'>
                <p className='wip'>WORK IN PROGRESS</p>
                <div class="stage">
                    <div class="dot-elastic"></div>
                </div>
                    {/* <div className='selectSportBar'>
                    {
                        live.map(element => {
                            return (
                                <Link className='sportLiveButtons' to={`/upcomming?sport=${element[0]}`} onClick={() => getTournamentList(element[0])}>
                                    {makeDivNameUpcomming(element[0], element[1], selected)}
                                </Link>
                            )
                        }
                        )}
                </div>
                <div className='containerContentLive'>
                    <div className='containerContainingMatches'>
                        {matchsData.name.map((element, index) => {
                            return (
                                <div className="match">
                                    <div key={element+index} className="match-name">
                                        {element}
                                    </div>
                                    <div className="match-players">
                                        {matchsData.players[index].map((element, index) => {
                                            return (
                                                <div key={element+index} className="player">
                                                    {element.name}
                                                </div>
                                            )
                                        }
                                        )}
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div> */}
                </div>

                <Footer specialText="If you see an amount of matches bigger than displayed, it means there is more than one match in a specific tournament. Sorry for that bug, it's just too annoying to fix :)" />
            </div>
            )
}
            export default Upcomming;