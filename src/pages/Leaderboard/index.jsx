import './Leaderboard.css';
import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


const Leaderboard = () => {

    const [leaderboard, SetLeaderboard] = useState([]);
    
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
        }  
    }


    useEffect(() => {
        console.clear()
        // Traitement de Live
        axios.get(`http://109.205.56.69:4000/leaderboard`, config)
            .then(res => {
                SetLeaderboard(res.data)
                console.log(leaderboard)
            })
            .catch(err => {
                console.log(err);
            })

    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className='leaderboard'>
            <Navbar current={`Leaderboard`} />
            <div className='contentLeaderboardPage'>
                <div className='leaderboardContent'>
                    <div className='leaderboardDiv'>
                        <div className='leaderboardTitle'>
                            <div className='leaderboardDivPlace'>Place</div>
                            <div className='leaderboardDivUsername'>Username</div>
                            <div className='leaderboardDivDate'>Creation Date</div>
                            <div className='leaderboardDivScore'>Score</div>
                        </div>
                        <div className='leaderboardDivContent'>
                        {
                        leaderboard.map((element,index) => {
                            console.log(`Index : ${index}`)
                            console.log(`Element : ${element.creation_date}`)
                            let dateObject = new Date(element.creation_date)
                            let pos = index+1;
                            return (
                                <div className={`contentLeaderboard pos${pos} `}>
                                    <div className='inLine'>
                                        <div className='place data'>{pos}</div>
                                        <div className='verticalSeparatorLeaderboard'></div>
                                        <div className='username data'> {element.username} </div>
                                        <div className='verticalSeparatorLeaderboard'></div>
                                        <div className='creationDate data'>{dateObject.toLocaleString()}</div>
                                        <div className='verticalSeparatorLeaderboard'></div>
                                        <div className='score data'>{element.points}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                        </div>
                    </div>
                </div>
            </div>
            <Footer specialText=""/>
        </div>
    )
}
export default Leaderboard;