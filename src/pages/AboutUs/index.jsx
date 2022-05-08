import './AboutUs.css';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AboutUs = () => {
    return (
        <div>
            <Navbar/>
            <div className='aboutUs'>
                <div className='titleAboutUs line-1 anim-typewriter'>
                    {'// -> About Us //'}
                </div>
                <div className='contentAboutUs'>
                    <div className='contentLeft'>
                        <div className='titleAboutUs'>
                            {'// Who are we ?'}
                        </div>
                        <div className='contentAboutUs'>
                            We are a team of students who wants to create a platform where you can play with your friends.
                        </div>
                        <div className='titleAboutUs'>
                            {'// What are we doing ?'}
                        </div>
                        <div className='contentAboutUs'>
                            We are currently working on a platform where you can play with your friends and bet on matchs outcomes on a variety of sport, from traditionnal ones to esports !.
                        </div>
                        <div className='titleAboutUs'>
                            {'// How do we do it ?'}
                        </div>
                        <div className='contentAboutUs'>
                            We are currently using and learning a few technologies to create this platform like ReactJS for the web part, ReactJS Native for the mobile part, as well as NodeJS for the backend part.
                        </div>
                        <div className='titleAboutUs'>
                            {'// What did we do ?'}
                        </div>
                        <div className='contentDo'>
                            <div className='content1'>
                            Gauthier Duffier  
                        <div  className='oui'>
                        <p className='contentP'> Back-end - Mobile assistant</p>
                        <a href='https://github.com/gaut123456'><img src='https://i.imgur.com/vGLgJsD.png' alt="GithubIcon" className='GithubIconAboutUs' /></a>
                        </div>
                        </div>
                        <div className='content1 content2'>
                            Mathis Oudjane  
                            <div className='oui'>
                        <p className='contentP'> Mobile development - Design & features</p>
                        <a href='https://github.com/moudjane'><img src='https://i.imgur.com/vGLgJsD.png' alt="GithubIcon" className='GithubIconAboutUs' /></a>  
                        </div>
                        </div>
                        <div className='content1 content2'>
                            Guillaume Maugin 
                            <div className='oui'>
                        <p className='contentP'> Web development - Mobile assistant</p>
                        <a href='https://github.com/AngrySquirrell'><img src='https://i.imgur.com/vGLgJsD.png' alt="GithubIcon" className='GithubIconAboutUs' /></a>
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
export default AboutUs;