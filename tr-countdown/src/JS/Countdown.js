import React, { Component } from 'react';
import '../CSS/Countdown.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    if (diff < 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };

    if (diff >= (365.25 * 86400)) {
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() { //If time done, refresh every second.
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    return (
      <Container className="Countdown" fluid>
        <Row >
            <Col>
                <span className="Numbers">
                    {this.addLeadingZeros(this.state.days)}
                </span>
                <span className="Countdown-col-element">
                        {this.state.days === 1 ? 'DAY' : 'DAYS'}
                </span>
            </Col>
            <span className="DoubleColon">:</span>
            <Col xs>
            <span className="Numbers">
                {this.addLeadingZeros(this.state.hours)}
                </span>
                <span className="Countdown-col-element">
                        HOURS
                </span>
            </Col>
            <span className="DoubleColon">:</span>
            <Col xs>
            <span className="Numbers">
                {this.addLeadingZeros(this.state.min)}
                </span>
                <span className="Countdown-col-element">
                        MINS
                </span>
            </Col>
            <span className="DoubleColon">:</span>
            <Col xs>
            <span className="Numbers">
                {this.addLeadingZeros(this.state.sec)}
                </span>
                <span className="Countdown-col-element">
                        SECS
                </span>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default Countdown;