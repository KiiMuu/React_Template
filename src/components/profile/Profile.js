import React from 'react';
import './Profile.scss';

const Profile = () => {
    return (
        <div className="profile">
            <div className="uk-container">
                <div className="profile-heading uk-text-center">
                    <div className="profile-title">
                        <h2 className="uk-text-capitalize">My Profile</h2>
                    </div>
                    <div className="profile-desc">
                        <p className="uk-text-muted">my profile information</p>
                    </div>
                </div>
                <div className="profile-content">
                    <div className="uk-child-width-1-3@m" data-uk-grid uk-height-match="target: div > .uk-card">
                        <div>
                            <div className="uk-card uk-card-default uk-card-body">
                                <div className="uk-card-badge uk-label"><span>90%</span></div>
                                <h3 className="uk-card-title">Programming</h3>
                                <p className="uk-text-muted">lorem ipusm lorem ipusm lorem ipusm lorem ipusmlorem ipusm lorem ipusm lorem ipusm</p>
                            </div>
                        </div>
                        <div>
                            <div className="uk-card uk-card-default uk-card-body">
                                <div className="uk-card-badge uk-label"><span>70%</span></div>
                                <h3 className="uk-card-title">Presentation</h3>
                                <p className="uk-text-muted">lorem ipusm lorem ipusm lorem ipusm lorem ipusmlorem ipusm lorem ipusm lorem ipusm</p>
                            </div>
                        </div>
                        <div>
                            <div className="uk-card uk-card-default uk-card-body">
                                <div className="uk-card-badge uk-label"><span>80%</span></div>
                                <h3 className="uk-card-title">Communication</h3>
                                <p className="uk-text-muted">lorem ipusm lorem ipusm lorem ipusm lorem ipusmlorem ipusm lorem ipusm lorem ipusm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;