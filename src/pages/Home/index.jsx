import './Home.css';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MainDiv from '../../components/MainDiv';

const Home = () => {

    return (
        <div className=''>
            <Navbar/>
            <div className='home'>
                <div className='horizontal'>
                <MainDiv pos='right'/>
                    <div className='vertical'>
                        <MainDiv pos='l-top'/>
                        <MainDiv pos='l-bottom'/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home;