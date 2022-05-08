import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = (props) => {
    const { specialText } = props;
    return (
        <div>
            <div className='footer'>
                <div className="footerLiens">
                <Link to='/aboutus' className={`footerLiensAboutUs`}>About Us !</Link>
                </div>
                <div className="footerSpecialText">
                    {specialText}
                </div>
            </div>
        </div>
    )
}
export default Footer;