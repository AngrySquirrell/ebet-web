import './DivLive.css';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const DivLive = (props) => {
    const {pos} = props
    const [live, SetLive] = useState([])

    useEffect(() => {
        // Traitement de Live
        axios.get(`http://109.205.56.69:4000/sports`)
            .then(res => {
                SetLive(res.data)
            })
    }, [])

    function generateLinks(live) {
        for(let i = 0; i < 8; i++){
            return (
            <div className='contentLive'>
                <Link to={`/live`} className={`contentLiveLink`}>
                    {live[i]}
                </Link>
                <div className='horizontalSeparator'></div>
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
                        { generateLinks(live) }
                    </div>
            </div>
        </div>
    )
}
export default DivLive;