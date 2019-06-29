import React, { Component } from 'react';

// import components
import Home from '../home/Home';
import About from '../about/About';
import Profile from '../profile/Profile';
import Portfolio from '../portfolio/Portfolio';
import SocialMedia from '../social-media/SocialMedia';
import Work from '../work/Work';
import Footer from '../footer/Footer';

class Index extends Component {
	render() {
		return(
			<React.Fragment>
				<Home />
				<Work />
				<Portfolio />
				<Profile />
				<About />
				<SocialMedia />
				<Footer />
			</React.Fragment>
		);
	}
}

export default Index;
