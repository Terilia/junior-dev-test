import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Countdown from 'react-countdown-now';
import Button from '@material-ui/core/Button';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          <Countdown date={new Date("March 15 2019 17:00:00 GMT +1").getTime()} />
          <Button variant="contained" color="primary">
          Hello World
          </Button>
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
