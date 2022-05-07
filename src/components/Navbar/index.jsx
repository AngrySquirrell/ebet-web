import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
    const { current } = props;
    return(
        <div className='navbar'>
            <div className='Left'>
                <div className='logo'>
                    <FontAwesomeIcon icon={faCoins} className='coin'/>
                    <p className='logoName'>E-BET</p>
                </div>
                <p className='separator'></p>
                <Link to='/' className={`LeftButtons ${(current==='Home')? 'Selected':''}`}>Home</Link>
                <Link to='/upcomming' className={`LeftButtons ${(current==='Upcomming')? 'Selected':''}`}>Upcomming</Link>
                <Link to='/live' className={`LeftButtons ${(current==='Live')? 'Selected':''}`}>Live</Link>
                <Link to='/leadoard' className={`LeftButtons ${(current==='Live')? 'Selected':''}`}>Leaderboard</Link>
            </div>
            <div className='Right'>
                <div className='RightSide'>
                    <Link to='/login' className={`RightButtons ${(current==='Login')? 'Selected':''}`}>Login</Link>
                    <Link to='/signup' className={`RightButtons ${(current==='Signup')? 'Selected':''}`}>Signup</Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar;