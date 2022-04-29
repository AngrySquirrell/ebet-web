import './Home.css';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MainDiv from '../../components/MainDiv';

const Home = () => {
    return (
        <div className='home'>
            <Navbar current={`Home`} />

            <div className='horizontal'>

                <MainDiv pos={"right"}/>
                <div className={'vertical'}>
                    <MainDiv pos={"l-top"}/>
                    <MainDiv pos={"l-bottom"}/>
                </div>

            </div>

            <Footer />
        </div>
    )
}
export default Home;