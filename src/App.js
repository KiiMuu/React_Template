import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';

// import components
import Index from './components/index/Index'
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';

class App extends Component {
	render() {
		return(
			<BrowserRouter>
				<Navbar />
				<Route exact path="/" component={Index} />
				<Route path="/contact" component={Contact} />
			</BrowserRouter>
		);
	}
}

export default App;
