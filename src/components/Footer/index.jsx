import React from "react";
import './Footer.css';

const Footer = (props) => {
    const { specialText } = props;
    return (
        <div>
            <div className='footer'>
                {specialText}
            </div>
        </div>
    )
}
export default Footer;