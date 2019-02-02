import React, { Component } from 'react';
import '../CSS/Body.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import MainLogo from '../PIC/mainlogo.png'
import Countdowndisplay from './Countdown.js'
import Bar from '../PIC/bar.png'
import Twitter from '../PIC/twitter.png'
import Facebook from '../PIC/facebook.png'
import Googleplus from '../PIC/googleplus.png'
import YouTube from '../PIC/youtube.png'
import Instagram from '../PIC/instagram.png'
import ButtonTeaser from '../PIC/teaserbutton.png'

class Body extends Component {
    render() {
    const revealDate = new Date("March 15 2019 17:00:00 GMT +1").getTime()
      return (
        <Container className="Body" fluid="true">
            <Row>
                <Col xs ><Image className="MainLogo" src={MainLogo}/></Col>
            </Row>
                <Countdowndisplay  date={revealDate}/>
                <Image className="Bar" src={Bar}/>
            <Row className="Reveal">
                <Col xs><span >Reveal Event March 15th</span></Col>
            </Row>
            <Row className="WatchTeaser" >
                <Col xs><a href="https://youtube.com"><img className="InteractiveButton" alt="Watch the new Tomb Raider Teaser" src={ButtonTeaser}/><span className="ButtonText">Watch Teaser</span></a></Col>
            </Row>
            <Row className="Buttons">
                <Col><a rel='noreferrer noopener' target="_blank" href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20190315T160000Z%2F20190315T170000Z&text=Shadow%20of%20the%20Tomb%20Raider%20Reveal%20Event&location=https%3A%2F%2Ftombraider.square-enix-games.com%2F&details=The%20Shadow%20of%20the%20Tomb%20Raider%20Reveal%20Event%20from%20Square%20Enix"><img className="InteractiveButton" alt="Click here to add the event to your Google Calendar" src={ButtonTeaser}/><span className="ButtonText">Add to Calendar</span></a></Col>
            </Row>
            <Row className="Buttons">
                <Col xs><a rel='noreferrer noopener' target="_blank" href="https://square-enix-games.com/"><img className="InteractiveButton" alt="Click here to sign up to our Newsletter and be always up to date." src={ButtonTeaser}/><span className="ButtonText">Newsletter Signup</span></a></Col>
            </Row>
            <Row className="justify-content-center SocialButtonContainer">
                <Col md={1} className="Social"> <a href="https://www.facebook.com/TombRaider"><Image src={Facebook}/></a> </Col>
                <Col md={1} className="Social"> <a href="https://twitter.com/tombraider"><Image src={Twitter}/></a></Col>
                <Col md={1} className="Social"> <a href="https://plus.google.com/+TombRaiderOfficial"><Image src={Googleplus}/></a></Col>
                <Col md={1} className="Social"> <a href="https://www.youtube.com/user/tombraider"><Image src={YouTube}/></a></Col>
                <Col md={1} className="Social"> <a href="https://www.instagram.com/tombraider/"><Image src={Instagram}/></a></Col>
            </Row>
        </Container>
      );
    }
  }
  
  export default Body;
  