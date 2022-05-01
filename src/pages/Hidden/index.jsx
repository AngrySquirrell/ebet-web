import './Hidden.css';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Hidden = () => {
    return (
        <div>
            <div className='hidden'>
                <Navbar current={`Hidden`} />
                <div>
                    <img src='https://i.imgur.com/eS7RU1j.png' alt='Easter Egg' />
                </div>
                <div>
                    <div className='hiddenText'>
                        This is a nice little egg you have here...
                    </div>
                    <div>
                        <a href='https://bit.ly/5269636b726f6c6c656421' > Let's find out what's your gift </a>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default Hidden;