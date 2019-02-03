import React, { Component } from 'react';
import '../CSS/Header.css';
import LogoSquare from '../PIC/squarelogo.png'
import LoginBackground from '../PIC/login.png'
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

class Header extends Component {
		render() {
			return (
				<Container>
					<Navbar collapseOnSelect expand="lg" fixed="top" bg="black" variant="dark" className="header">
						<Navbar.Brand><a href="http://square-enix-games.com"><Image className="brand-logo" src={LogoSquare}/></a></Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						 <Navbar.Collapse id="responsive-navbar-nav" className="join-login-wrapper">
							<Nav>
								<Button href="http://square-enix-games.com" className="join-login-text">Join</Button>
								<Button href="http://square-enix-games.com" className="join-login-text">Log In</Button>
								<Image className="join-login-background" src={LoginBackground}/>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</Container>
			);
		}
	}
	
	export default Header;
	