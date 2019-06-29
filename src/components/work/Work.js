import React, { Component } from 'react';
import './Work.scss';
import axios from 'axios';

class Work extends Component {

    state = {
        works: []
    }

    componentDidMount() {
        axios.get('js/data.json').then(res => {
            this.setState({
                works: res.data.works
            });
        })
    }

    render() {
        const { works } = this.state;
        const worksList = works.map((workItem) => {
            return(
                <div className="uk-width-1-3@m" key={workItem.id}>
                    <div className="uk-card uk-card-default uk-card-body">
                        <div className="uk-card-badge uk-label"><i className={workItem.icon_name}></i></div>
                        <h3 className="uk-card-title">{workItem.title}</h3>
                        <p className="uk-text-muted">{workItem.body}</p>
                    </div>
                </div>
            )
        })
        return (
            <div className="work">
                <div className="uk-container">
                    <div className="work-heading uk-text-center">
                        <div className="work-title">
                            <h2 className="uk-text-capitalize">My Work</h2>
                        </div>
                        <div className="work-desc">
                            <p className="uk-text-muted">what i'm doing?</p>
                        </div>
                    </div>
                    <div data-uk-grid uk-height-match="target: div > .uk-card">
                        {worksList}
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;