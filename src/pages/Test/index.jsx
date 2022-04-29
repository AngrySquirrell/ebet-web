import './Test.css';
import {useEffect, useState} from "react";
import axios from 'axios';

function Test() {
    let count = 0;
    const [Gamemodes, SetGamemodes] = useState([])
    const [Tournaments, SetTournaments] = useState([])
    useEffect(() => {
        axios.get(`http://109.205.56.69:4000/sports`)
            .then(res => {
                SetGamemodes(res.data)
            })
    }, [count])
        function LiveList(ActiveGamemode) {
            axios.get(`http://109.205.56.69:4000/live/:${ActiveGamemode}/:10/:10`)
                .then(res => {
                    SetTournaments(res.data.slugSport.tournamentList)
                    console.log(res.data.slugSport.tournamentList)
                })
    }
    return (
    <div className="App">
        <h1 className='white'>Live Events</h1>
        <div className="Gamemodes">
        {Gamemodes.map(element => (
            <button key={element} onClick={() => LiveList(element)}>{element}</button>
        ))}
        </div>
        <div className="EventList">
            {Tournaments.map(element => (
                <div key={element.name} className="white">
                    <p key={element.name}>{element.name}</p>
                    <p key={element.name}>{element.fixtureCount}</p>
                </div>
            ))}
        </div>
    </div>
    )}

export default Test;