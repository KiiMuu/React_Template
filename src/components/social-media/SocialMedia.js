import React, { useState, useEffect } from 'react';
import './SocialMedia.scss';
import axios from 'axios';

const SocialMedia = () => {

    const [ social, setSocial ] = useState([]);

    useEffect(() => {
        axios.get('js/data.json').then(res => {
            setSocial(res.data.social);
        })
    }, [])

    const socialList = social.map((socialItem) => {
        return(
            <div className="uk-grid-collapse uk-width-expand@m uk-text-center main" key={socialItem.id}>
                <section className="uk-box-shadow-medium">
                    <div className="social-content uk-padding-large">
                        <div className="social-icon">
                            <i className={socialItem.icon}></i>
                        </div>
                        <div className="social-desc">
                            <span>{socialItem.title}</span>
                        </div>
                    </div>
                </section>
            </div>
        )
    })

    return (
        <div className="social-media">
            <div className="uk-grid-collapse" data-uk-grid>
                {socialList}
            </div>
        </div>
    )
}

export default SocialMedia;