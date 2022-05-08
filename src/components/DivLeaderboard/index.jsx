import './DivLeaderboard.css';
import { React, useState, useEffect } from 'react';
import axios from 'axios';

const DivLeaderboard = (props) => {
    const {pos} = props
    const [leaderboard, SetLeaderboard] = useState([])
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
        }  
    }

    useEffect(() => {
        // Traitement de Live
        axios.get(`http://109.205.56.69:4000/leaderboard`, config)
            .then(res => {
                console.log(res.data);
                SetLeaderboard(res.data)
            })
            .catch(err => {
                console.log(err);
            })
        console.clear()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
                            else return ""
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