import './Live.css';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


const Live = () => {
    return (
            <div className='live'>
                <Navbar current={`Live`}/>
                    <div className='contentLivePage'>
                        Live
                    </div>
                <Footer />
            </div>
    )
}
export default Live;