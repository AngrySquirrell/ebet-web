import './MainDiv.css';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


const MainDiv = (props) => {
    const { pos, content } = props

    function defContent(pos){
        if(pos === 'right'){

            return (
            <div>
                <div className='title'>
                    <FontAwesomeIcon icon={faCircle} className='circle'/>
                    Live
                </div>
                <div className='contentLeft'>
                {
                content.map(element => (
                    <div className='contentLive'>
                        {element}
                    </div>
                ))
                }
                </div>
            </div>

            )

        }
        else if(pos === 'l-top'){
            return (
            <div>
                <div className='title'>
                    Upcomming
                </div>
                <div className='contentRight'>
                </div>
            </div>
            )

        }
        else if(pos === 'l-bottom'){

            return (
            <div>
                <div className='title'>
                    Leaderboard
                </div>
                <div className='contentRight'>
                    content
                </div>
            </div>
            )

        }
    }

    
    return (
        <div className='boxes'>
            <div className={`box ${''}`}>
                { defContent(pos) }
            </div>
        </div>
    )
}
export default MainDiv;