import './MainDiv.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MainDiv = (props) => {
    const { pos } = props
    
    function defPos(pos){
        switch(pos){
            case 'right':
                return 'mainDivLeft';
            case 'l-top':
                return 'mainDivRightTop';
            case 'l-bottom':
                return 'mainDivRightBottom';
        }

    }
    function defContent(pos){
        if(pos === 'right'){

            return (


            <div>
                <div className='title'>
                    <FontAwesomeIcon icon={faCircle} className='circle'/>
                    Live
                </div>
                <div className='contentLeft'>
                    content
                </div>
                <div className='more'>
                    <Link to='/live' className='link'>More</Link>
                    <FontAwesomeIcon icon={faChevronRight} className='chevron'/>
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
                    content
                </div>
                <div className='more'>
                    <Link to='/live' className='link'>More</Link>
                    <FontAwesomeIcon icon={faChevronRight} className='chevron'/>
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
                <div className='more'>
                    <Link to='/live' className='link'>More</Link>
                    <FontAwesomeIcon icon={faChevronRight} className='chevron'/>
                </div>
            </div>
            )

        }
    }

    
    return (
        <div className='boxes'>
            <div className={`box ${defPos(pos)}`}>
                { defContent(pos) }
            </div>
        </div>
    )
}
export default MainDiv;