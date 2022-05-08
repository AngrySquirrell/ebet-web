import './Home.css';
import React from 'react';


import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DivLive from '../../components/DivLive';
import DivLeaderboard from '../../components/DivLeaderboard';

const Home = () => {
    return (
        <div className='all'>
            <Navbar current={`Home`} />
            <div className='home'>
                <div className='horizontal'>

                                        {/* Live */}

                    <DivLive pos='mainDivLeft' className={`responsiveHome`} />

                    <div className='vertical'>

                                        {/* Leaderboard */}

                        <DivLeaderboard pos='mainDivRightTop' className={`responsiveHome`} />

                                        {/* Upcomming */}

                        <div className='responsiveHome'>
                            <div className='boxes'>
                                <div className={`box ${'mainDivRightBottom'}`}>
                                    <div>
                                        <div className='title'>
                                            Upcomming
                                        </div>
                                        <div className='contentRight'>
                                            WIP
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Home;