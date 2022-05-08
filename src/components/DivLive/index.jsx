import './DivLive.css';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faFutbol, faTableTennis, faBasketball, faPersonRifle, faFootball, faBan, faBaseball, faHockeyPuck, faPoo, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const DivLive = (props) => {
    const {pos} = props
    const [live, SetLive] = useState([])
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json'
        }  
    }

    useEffect(() => {
        // Traitement de Live
        axios.get(`http://109.205.56.69:4000/livecount`, config)
            .then(res => {
                SetLive(res.data.sportList.map(element => [element.slug, element.fixtureCount]))
            })
            .catch(err => {
                console.log(err);
            })
        console.clear()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const madeDivName = (name, amount) => {
        switch (name) {
            case 'soccer':
                return (
                    <div className='sportDiv'>
                        <FontAwesomeIcon icon={faFutbol} className="sportIcon"/>
                        <div className='sportsLiveContent'>
                            <p className='sportsName'>Soccer</p>
                            <div className='sportsAmount'>{amount} <FontAwesomeIcon icon={faChevronRight} className="chevronRight"/> </div>
                        </div>
                    </div>
                )
            case 'table-tennis':
                return (
                    <div className='sportDiv'>
                        <FontAwesomeIcon icon={faTableTennis} className="sportIcon"/>
                        <div className='sportsLiveContent'>
                            <p className='sportsName'>Table Tennis</p>
                            <div className='sportsAmount'>{amount} <FontAwesomeIcon icon={faChevronRight} className="chevronRight"/> </div>
                        </div>
                    </div>
                )
            case 'tennis':
                return (
                    <div className='sportDiv'>
                        <img src='https://i.imgur.com/k6vcguB.png' alt="tennis ball"className='sportIcon'/>
                        <div className='sportsLiveContent'>
                            <p className='sportsName'>Tennis</p>
                            <div className='sportsAmount'>{amount} <FontAwesomeIcon icon={faChevronRight} className="chevronRight"/> </div>
                        </div>
                    </div>
                )
            case 'basketball':
                return (
                    <div className='sportDiv'>
                        <FontAwesomeIcon icon={faBasketball} className="sportIcon"/>
                        <div className='sportsLiveContent'>
                            <p className='sportsName'>Basketball</p>
                            <div className='sportsAmount'>{amount} <FontAwesomeIcon icon={faChevronRight} className="chevronRight"/> </div>
                        </div>
                    </div>
                )
            case 'cricket':
                return (
                    <div className='sportDiv'>
                        <img src='https://i.imgur.com/YlV3fRF.png' alt="cricket" className='sportIcon'/>
                        <div className='sportsLiveContent'>
                            <p className='sportsName'>Cricket</p>
                            <div className='sportsAmount'>{amount} <FontAwesomeIcon icon={faChevronRight} className="chevronRight"/> </div>
                        </div>
                    </div>
                )
            case 'counter-strike':
                return (
                    <div className='sportDiv'>
                        <FontAwesomeIcon icon={faPersonRifle} className="sportIcon"/>
                        <div className='sportsLiveContent'>
                            <p className='sportsName'>Counter Strike : Global Offensive</p>
                            <div className='sportsAmount'>{amount} <FontAwesomeIcon icon={faChevronRight} className="chevronRight"/> </div>
                        </div>
                    </div>
                )
            case 'rugby':
                return (
                    <div className='sportDiv'>
                        <FontAwesomeIcon icon={faFootball} className="sportIcon"/>
                        <div className='sportsLiveContent'>
                            <p className='sportsName'>Rugby</p>
                            <div className='sportsAmount'>{amount} <FontAwesomeIcon icon={faChevronRight} className="chevronRight"/> </div>
                        </div>
                    </div>
                )
            case 'baseball':
                return (
                    <div className='sportDiv'>
                        <FontAwesomeIcon icon={faBaseball} className="sportIcon"/>
                        <div className='sportsLiveContent'>
                            <p className='sportsName'>Baseball</p>
                            <div className='sportsAmount'>{amount} <FontAwesomeIcon icon={faChevronRight} className="chevronRight"/> </div>
                        </div>
                    </div>
                )
            case 'badminton':
                return (
                    <div className='sportDiv'>
                        <img src='https://i.imgur.com/4zlTrjv.png' alt="badminton" className='sportIcon'/>
                        <div className='sportsLiveContent'>
                            <p className='sportsName'>Badminton</p>
                            <div className='sportsAmount'>{amount} <FontAwesomeIcon icon={faChevronRight} className="chevronRight"/> </div>
                        </div>
                    </div>
                )
            case 'dota-2':
                return (
                    <div className='sportDiv'>
                        <img src='https://i.imgur.com/MZpsR2Z.png' alt="dota2" className='sportIcon'/>
                        <div className='sportsLiveContent'>
                            <p className='sportsName'>Dota 2</p>
                            <div className='sportsAmount'>{amount} <FontAwesomeIcon icon={faChevronRight} className="chevronRight"/> </div>
                        </div>
                    </div>
                )
            case 'league-of-legends':
                return (
                    <div className='sportDiv'>
                        <FontAwesomeIcon icon={faPoo} className="sportIcon"/>
                        <div className='sportsLiveContent'>
                            <p className='sportsName'>League of Legends</p>
                            <div className='sportsAmount'>{amount} <FontAwesomeIcon icon={faChevronRight} className="chevronRight"/> </div>
                        </div>
                    </div>
                )
            case 'ice-hockey':
                return (
                    <div className='sportDiv'>
                        <FontAwesomeIcon icon={faHockeyPuck} className="sportIcon"/>
                        <div className='sportsLiveContent'>
                            <p className='sportsName'>Ice-Hockey</p>
                            <div className='sportsAmount'>{amount} <FontAwesomeIcon icon={faChevronRight} className="chevronRight"/> </div>
                        </div>
                    </div>
                )
            default:
                return (
                <div className='sportDiv'>
                    <FontAwesomeIcon icon={faBan} className="sportIcon"/>
                    <div className='sportsLiveContent'>
                            <p className='sportsName'>{name}</p>
                            <div className='sportsAmount'>{amount} <FontAwesomeIcon icon={faChevronRight} className="chevronRight"/> </div>
                        </div>
                </div>
            )
        }
    }

    return (
        <div className='boxes'>
            <div className={`box ${pos}`}>
                    <div className='title'>
                        <FontAwesomeIcon icon={faCircle} className='circle' />
                        Live
                    </div>
                    <div className='contentLeft'>
                        {
                        live.map((element,index) => {
                            if (index < 8) {
                                console.log(live);
                                return (
                                    <div className='contentLive'>
                                        <Link to={`/live?sport=${element[0]}`} className={`contentLiveLink`}>
                                            {madeDivName(element[0], element[1])}
                                        </Link>
                                        <div className='horizontalSeparatorLive'/>
                                    </div>
                                )}
                                else return <div className='contentLive'/>
                            })
                        }
                    </div>
            </div>
        </div>
    )
}

export default DivLive;