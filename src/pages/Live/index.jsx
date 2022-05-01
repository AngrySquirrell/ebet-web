import './Live.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


const Live = () => {
    return (
            <div className='live'>
                <Navbar current={`Live`}/>
                <div className='contentLive'>
                    Live
                </div>
                <Footer />
            </div>
    )
}
export default Live;