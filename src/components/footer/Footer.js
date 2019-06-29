import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer uk-text-center">
            <div className="uk-container">
                <p>Copyright &copy; { new Date().getFullYear() } by Portfolio</p>
            </div>
        </div>
    )
}

export default Footer;