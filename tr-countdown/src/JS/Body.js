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
		<Container className="body" fluid>
				<Row className="main-logo-wrapper">
				<Col xs ><Image className="main-logo" src={MainLogo}/></Col>
			</Row>
				<Countdowndisplay	date={revealDate}/>
				<Image className="bar" src={Bar} fluid/>
			<Row className="reveal">
				<Col xs><span >Reveal Event March 15th</span></Col>
			</Row>
			<Row className="justify-content-md-center teaser-button">
				<Col md="auto" className="buttons"><a href="https://www.youtube.com/watch?v=vuemrb_ur2w"><Image src={ButtonTeaser} fluid/><span className="button-text">Watch Teaser</span></a></Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col md="auto" className="buttons"><a rel='noreferrer noopener' target="_blank" href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20190315T160000Z%2F20190315T170000Z&text=Shadow%20of%20the%20Tomb%20Raider%20Reveal%20Event&location=https%3A%2F%2Ftombraider.square-enix-games.com%2F&details=The%20Shadow%20of%20the%20Tomb%20Raider%20Reveal%20Event%20from%20Square%20Enix"><Image src={ButtonTeaser} fluid/><span className="button-text">Add to Calendar</span></a></Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col md="auto" className="buttons"><a href="https://square-enix-games.com/"><Image src={ButtonTeaser} fluid/><span className="button-text">Newsletter Sign up</span></a></Col>
			</Row>
			<Row className="justify-content-center social-button-wrapper">
				<Col md={1} className="social buttons"> <a href="https://www.facebook.com/TombRaider"><Image src={Facebook}/></a></Col>
				<Col md={1} className="social buttons"> <a href="https://twitter.com/tombraider"><Image src={Twitter}/></a></Col>
				<Col md={1} className="social buttons"> <a href="https://plus.google.com/+TombRaiderOfficial"><Image src={Googleplus}/></a></Col>
				<Col md={1} className="social buttons"> <a href="https://www.youtube.com/user/tombraider"><Image src={YouTube}/></a></Col>
				<Col md={1} className="social buttons"> <a href="https://www.instagram.com/tombraider/"><Image src={Instagram}/></a></Col>
			</Row>
		</Container>
		);
	}
	}
	
	export default Body;
	