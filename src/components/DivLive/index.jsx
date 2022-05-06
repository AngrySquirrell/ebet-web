import './DivLive.css';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faFutbol,  } from '@fortawesome/free-solid-svg-icons';

const DivLive = (props) => {
    const {pos} = props
    const [live, SetLive] = useState([])

    useEffect(() => {
        // Traitement de Live
        axios.get(`http://109.205.56.69:4000/sports`)
            .then(res => {
                SetLive(res.data)
            })
            .catch(err => {
                console.log(err);
            })
        console.clear()
    }, [])

    const madeDivName = (name) => {
        switch (name) {
            case 'soccer':
                return (
                    <div className='soccer'>
                        <FontAwesomeIcon icon={faFutbol} />
                        <p className=''>Soccer</p>
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
                                console.log(`Index : ${index}`)
                                console.log(`Element : ${element}`)
                                return (
                                    <div className='contentLive'>
                                        <Link to={`/live?sport=${element}`} className={`contentLiveLink`}>
                                            {element}
                                        </Link>
                                        <div className='horizontalSeparator'></div>
                                    </div>
                                )}
                                else return (<div className='contentLive'>Empty</div>)
                            })
                        }
                    </div>
            </div>
        </div>
    )
}

export default DivLive;