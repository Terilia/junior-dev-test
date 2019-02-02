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
          <Navbar collapseOnSelect expand="lg" fixed="top" bg="black" variant="dark" className="Header">
            <Navbar.Brand><Image src={LogoSquare}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav" className="JoinLoginContainer">
              <Nav>
                <Button className="JoinLoginText">Join</Button>
                <Button className="JoinLoginText">Log In</Button>
                <Image className="LoginBackground" src={LoginBackground}/>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      );
    }
  }
  
  export default Header;
  