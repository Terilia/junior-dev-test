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
        <Container className="Body" fluid>
            <Row className="MainLogoWrapper">
                <Col xs ><Image className="MainLogo" src={MainLogo}/></Col>
            </Row>
                <Countdowndisplay  date={revealDate}/>
                <Image className="Bar" src={Bar} fluid/>
            <Row className="Reveal">
                <Col xs><span >Reveal Event March 15th</span></Col>
            </Row>
            <Row className="justify-content-md-center TeaserButton">
                <Col md="auto" className="Buttons"><a href="https://youtube.com"><Image src={ButtonTeaser} fluid/><span className="ButtonText">Watch Teaser</span></a></Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto" className="Buttons"><a rel='noreferrer noopener' target="_blank" href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20190315T160000Z%2F20190315T170000Z&text=Shadow%20of%20the%20Tomb%20Raider%20Reveal%20Event&location=https%3A%2F%2Ftombraider.square-enix-games.com%2F&details=The%20Shadow%20of%20the%20Tomb%20Raider%20Reveal%20Event%20from%20Square%20Enix"><Image src={ButtonTeaser} fluid/><span className="ButtonText">Add to Calendar</span></a></Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto" className="Buttons"><a href="https://square-enix-games.com/"><Image src={ButtonTeaser} fluid/><span className="ButtonText">Newsletter Sign up</span></a></Col>
            </Row>
            <Row className="justify-content-center SocialButtonContainer">
                <Col md={1} className="Social Buttons"> <a href="https://www.facebook.com/TombRaider"><Image src={Facebook}/></a></Col>
                <Col md={1} className="Social Buttons"> <a href="https://twitter.com/tombraider"><Image src={Twitter}/></a></Col>
                <Col md={1} className="Social Buttons"> <a href="https://plus.google.com/+TombRaiderOfficial"><Image src={Googleplus}/></a></Col>
                <Col md={1} className="Social Buttons"> <a href="https://www.youtube.com/user/tombraider"><Image src={YouTube}/></a></Col>
                <Col md={1} className="Social Buttons"> <a href="https://www.instagram.com/tombraider/"><Image src={Instagram}/></a></Col>
            </Row>
        </Container>
      );
    }
  }
  
  export default Body;
  