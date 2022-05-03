import './Home.css';
import React from 'react';


import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DivLive from '../../components/DivLive';

const Home = () => {
    return (
        <div className='all'>
            <Navbar current={`Home`} />
            <div className='home'>
                <div className='horizontal'>

                                        {/* Live */}

                    <DivLive pos='mainDivLeft' className={`responsiveHome`} />

                    <div className='vertical'>

                                        {/* Upcomming */}

                        <div className='responsiveHome'>
                            <div className='boxes'>
                                <div className={`box ${'mainDivRightTop'}`}>
                                    <div>
                                        <div className='title'>
                                            Upcomming
                                        </div>
                                        <div className='contentRight'>
                                            content
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                                        {/* Leaderboard */}

                        <div className='responsiveHome'>
                            <div className='boxes'>
                                <div className={`box ${'mainDivRightBottom'}`}>
                                    <div>
                                        <div className='title'>
                                            Leaderboard
                                        </div>
                                        <div className='contentRight'>
                                            content
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