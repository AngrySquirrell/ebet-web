import './DivLeaderboard.css';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faFutbol, faTableTennis, faBasketball, faPersonRifle, faFootball, faBan, faBaseball } from '@fortawesome/free-solid-svg-icons';

const DivLeaderboard = (props) => {
    const {pos} = props
    const [leaderboard, SetLeaderboard] = useState([])

    useEffect(() => {
        // Traitement de Live
        axios.get(`http://109.205.56.69:4000/leaderboard`)
            .then(res => {
                console.log(res.data);
                SetLeaderboard(res.data)
            })
            .catch(err => {
                console.log(err);
            })
        console.clear()
    }, [])

    return (
        <div className='boxes'>
            <div className={`box ${pos}`}>
                <div className='title'>
                    Leaderboard
                </div>
                <div className='mainDivRightTop'>
                    {
                    leaderboard.map((element,index) => {
                        if (index < 5) {
                            console.log(`Index : ${index}`)
                            console.log(`Element : ${element.creation_date}`)
                            let dateObject = new Date(element.creation_date)
                            let pos = index+1;
                            return (
                                <div className={`contentLeaderboard pos${pos}`}>
                                    <div className='inLine'>
                                        <div className='place data'>{pos}</div>
                                        <div className='username data'> {element.username} </div>
                                        <div className='creationDate data'>{dateObject.toLocaleString()}</div>
                                        <div className='score data'>{element.points}</div>
                                    </div>
                                </div>
                            )}
                        })
                    }
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default DivLeaderboard;