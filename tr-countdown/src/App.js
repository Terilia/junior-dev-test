import React, { Component } from 'react';
import Header from './JS/Header.js'
import Body from './JS/Body.js'
import Footer from './JS/Footer.js'

class App extends Component {
  render() {
	return (
	  <div className="App">
		<Header/>
		<Body/>
		<Footer/>
	  </div>
	);
  }
}

export default App;
