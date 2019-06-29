import React from 'react';
import './Home.scss';
import header_img1 from '../../imgs/slider1.jpg';
import header_img2 from '../../imgs/slider2.jpeg';
import header_img3 from '../../imgs/slider3.jpg';

const Home = () => {
    return (
        <div className="header">
            <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slideshow="min-height: 400; max-height: 650; animation: push; autoplay: true; pause-on-hover: false">
                <ul className="uk-slideshow-items">
                    <li>
                        <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                            <img className="uk-background-fixed" src={header_img1} alt="Header" data-uk-cover />
                        </div>
                        <div className="uk-overlay-primary uk-position-cover"></div>
                        <div className="uk-position-center uk-position-small uk-text-center">
                            <div className="header-content">
                                <h2 className="uk-text-uppercase">Jhon Doe</h2>
                                <p>Creative Designer</p>
                                <span>i'm a professional UI/UX Designer and Frontend Developer</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                            <img className="uk-background-fixed" src={header_img2} alt="Header" data-uk-cover />
                        </div>
                        <div className="uk-overlay-primary uk-position-cover"></div>
                        <div className="uk-position-center uk-position-small uk-text-center">
                            <div className="header-content">
                                <div className="header-content">
                                    <h2 className="uk-text-uppercase">Jhon Doe</h2>
                                    <p>Creative Designer</p>
                                    <span>i'm a professional UI/UX Designer and Frontend Developer</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                            <img className="uk-background-fixed" src={header_img3} alt="Header" data-uk-cover />
                        </div>
                        <div className="uk-overlay-primary uk-position-cover"></div>
                        <div className="uk-position-center uk-position-small uk-text-center">
                            <div className="header-content">
                                <div className="header-content">
                                    <h2 className="uk-text-uppercase">Jhon Doe</h2>
                                    <p>Creative Designer</p>
                                    <span>i'm a professional UI/UX Designer and Frontend Developer</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;