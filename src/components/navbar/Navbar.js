import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../logo.svg';

const Navbar = () => {
    return (
        <div className="fixed-nav-bar">
            <div className="navbar">
                <div className="navbar-content">
                    <div className="uk-container">
                        <div data-uk-grid>
                            <div className="uk-width-1-4">
                                <div className="my-logo uk-flex uk-flex-left">
                                    <Link to='/'>
                                        <img src={logo} alt="logo" draggable="false" />
                                    </Link>
                                </div>  
                            </div>
                            <div className="uk-width-3-4">
                                <div className="nav-content uk-text-right">
                                    <ul className="uk-list uk-visible@m">
                                        <li><NavLink to='/' className="uk-button uk-button-text">Home</NavLink></li>
                                        <li><NavLink to='/about' className="uk-button uk-button-text">Work</NavLink></li>
                                        <li><NavLink to='/' className="uk-button uk-button-text">Portfolio</NavLink></li>
                                        <li><NavLink to='/' className="uk-button uk-button-text">Resume</NavLink></li>
                                        <li><NavLink to='/' className="uk-button uk-button-text">About</NavLink></li>
                                        <li><NavLink to='/contact' className="uk-button uk-button-text">Contact</NavLink></li>
                                    </ul>
                                    {/* Show sidebar nav in small screens */}
                                    <div className="uk-hidden@m">
                                        <span className="uk-button uk-button-default uk-margin-small-right list-button" type="button" data-uk-toggle="target: #offcanvas-slide"><i className="fa fa-align-right" aria-hidden="true"></i></span>
                                        <div id="offcanvas-slide" uk-offcanvas="mode: slide; overlay: true">
                                            <div className="uk-offcanvas-bar">
                                                <button className="uk-offcanvas-close" type="button" data-uk-close></button>
                                                <h3 className="uk-text-uppercase"><NavLink to='/'><img src={logo} alt="logo" draggable="false" /></NavLink></h3>
                                                <ul className="uk-list">
                                                    <li><NavLink to='/' className="uk-button uk-button-text">Home</NavLink></li>
                                                    <li><NavLink to='/about' className="uk-button uk-button-text">Work</NavLink></li>
                                                    <li><NavLink to='/' className="uk-button uk-button-text">Portfolio</NavLink></li>
                                                    <li><NavLink to='/' className="uk-button uk-button-text">Resume</NavLink></li>
                                                    <li><NavLink to='/' className="uk-button uk-button-text">About</NavLink></li>
                                                    <li><NavLink to='/contact' className="uk-button uk-button-text">Contact</NavLink></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;