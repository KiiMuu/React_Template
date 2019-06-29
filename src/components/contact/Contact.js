import React from 'react';
import './Contact.scss';
import Footer from '../footer/Footer';

const Contact = () => {
    return (
        <React.Fragment>
            <div className="contact uk-text-center">
                <div className="uk-container">
                    <h1 className="uk-text-uppercase">Be in <span>Touch</span></h1>
                    <div className="form-content">
                        <form className="uk-grid-small" data-uk-grid>
                            <div className="uk-width-1-2@m">
                                <input className="uk-input" type="text" placeholder="Name" required />
                            </div>
                            <div className="uk-width-1-2@m">
                                <input className="uk-input" type="email" placeholder="Email" required />
                            </div>
                            <div className="uk-width-1-1@m">
                                <input className="uk-input" type="text" placeholder="Subject" required />
                            </div>
                            <div className="uk-width-1-1@m">
                                <div className="uk-margin">
                                    <textarea className="uk-textarea" rows="5" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Contact;