import './Upcomming.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


const Upcomming = () => {
    return (
            <div className='Upcomming'>
                <Navbar current={`Upcomming`}/>
                Upcomming
                <Footer />
            </div>
    )
}
export default Upcomming;