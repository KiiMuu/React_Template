import React, { useState, useEffect } from 'react';
import './Portfolio.scss';
import axios from 'axios';

const Portfolio = () => {

    const [ imgs, setImgs ] = useState([]);

    useEffect(() => {
        axios.get('js/data.json').then(res => {
            setImgs(res.data.portfolio);
        })
    }, []);

    const portfolioImages = imgs.map((imageItem) => {
        return(
            <div className="uk-width-1-2@s uk-width-1-4@l uk-text-center" key={imageItem.id}>
                <div className="port-content">
                    <div className="uk-text-center">
                        <div className="uk-inline-clip uk-transition-toggle uk-light" tabIndex="0">
                            <img src={imageItem.image} alt="" />
                            <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                <p className="uk-h5 uk-margin-remove">Ui/Ux Design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="portfolio">
            <div>
                <div className="portfolio-heading uk-text-center">
                    <div className="portfolio-title">
                        <h2 className="uk-text-capitalize">My Portfolio</h2>
                    </div>
                    <div className="portfolio-desc">
                        <p className="uk-text-muted">here are my recent works</p>
                    </div>
                </div>
                <div className="uk-grid-collapse" data-uk-grid>
                    {portfolioImages}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;