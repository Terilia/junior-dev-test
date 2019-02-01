import React, { Component } from 'react';
import './Body.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import MainLogo from './mainlogo.png'
import Countdowndisplay from './Countdown.js'
import Bar from './bar.png'
import Twitter from './twitter.png'
import Facebook from './facebook.png'
import Googleplus from './googleplus.png'
import YouTube from './youtube.png'
import Instagram from './instagram.png'
import ButtonTeaser from './teaserbutton.png'


class Body extends Component {
    render() {
    const revealDate = new Date("March 15 2019 17:00:00 GMT +1").getTime()
      return (
        <div className="Body">
        <Container fluid="true">
            <Row className="justify-content-md-center">
                <Col xs ><Image className="MainLogo" src={MainLogo}/></Col>
            </Row>
                <Countdowndisplay  date={revealDate}/>
                <Image className="Bar" src={Bar}/>
            <Row noGutters="true">
                <Col xs><span className="Reveal">Reveal Event March 15th</span></Col>
            </Row>
            <Row className="WatchTeaser" noGutters="true">
                <Col xs><a href="https://youtube.com"><img className="InteractiveButton" alt="Watch the new Tomb Raider Teaser" src={ButtonTeaser}/><span className="ButtonText">Watch Teaser</span></a></Col>
            </Row>
            <Row noGutters="true">
            <Col xs><a rel='noreferrer noopener' target="_blank" href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20190315T160000Z%2F20190315T170000Z&text=Shadow%20of%20the%20Tomb%20Raider%20Reveal%20Event&location=https%3A%2F%2Ftombraider.square-enix-games.com%2F&details=The%20Shadow%20of%20the%20Tomb%20Raider%20Reveal%20Event%20from%20Square%20Enix"><img className="InteractiveButton" alt="Click here to add the event to your Google Calendar" src={ButtonTeaser}/><span className="ButtonText">Add to Calendar</span></a></Col>
            </Row>
            <Row noGutters="true">
            <Col xs><a rel='noreferrer noopener' target="_blank" href="https://youtube.com"><img className="InteractiveButton" alt="Click here to sign up to our Newsletter and be always up to date." src={ButtonTeaser}/><span className="ButtonText">Newsletter Signup</span></a></Col>
            </Row>
        </Container>
        <div className="d-flex justify-content-center">
                <div className="p-2 col-example text-left"><Image src={Facebook}  /></div>
                <div className="p-2 col-example text-left"><Image src={Twitter}  /></div>
                <div className="p-2 col-example text-left"><Image src={Googleplus}  /></div>
                <div className="p-2 col-example text-left"><Image src={YouTube}  /></div>
                <div className="p-2 col-example text-left"><Image src={Instagram}  /></div>
            </div>
        </div>
      );
    }
  }
  
  export default Body;
  