import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const { current } = props;
    return(
        <div className='navbar'>
            <div className='Left'>
                <Link to='/' className={`LeftButtons ${(current==='Home')? 'Selected':''}`}>Home</Link>
                <Link to='/upcomming' className={`LeftButtons ${(current==='Upcomming')? 'Selected':''}`}>Upcomming</Link>
                <Link to='/live' className={`LeftButtons ${(current==='Live')? 'Selected':''}`}>Live</Link>
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