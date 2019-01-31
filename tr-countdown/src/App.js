import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Countdown from 'react-countdown-now';
import CssBaseline from '@material-ui/core/CssBaseline';
import buttonTeaser from './teaserbutton.png';
import { Button } from '@material-ui/core';



class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
        <CssBaseline />
          <img src={logo} className="App-logo" alt="logo" />
          <p><Countdown date={new Date("March 15 2019 17:00:00 GMT +1").getTime()}/></p>
          <p>Reveal Event April 27TH</p>
          <Button href="https://youtube.com">Watch Teaser</Button>
          <Button>Add to Calendar</Button>
          <Button>Newsletter Sign Up</Button>
          <Button>Facebook</Button>
          <Button>Twitter</Button>
          <Button>Google Plus</Button>
          <Button>Youtube</Button>
          <Button>Instagram</Button>
        </header>
      </div>
    );
  }
}

export default App;
