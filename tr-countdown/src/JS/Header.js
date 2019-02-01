import React, { Component } from 'react';
import '../CSS/Header.css';
import LogoSquare from '../PIC/squarelogo.png'
import LoginBackground from '../PIC/login.png'
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Header extends Component {
    render() {
      return (
        <Navbar fixed="top" className="justify-content-between Header">
          <Navbar.Brand><Image src={LogoSquare}/></Navbar.Brand>
          <Form inline> 
            <Image className="LoginBackground" src={LoginBackground}/>
            <Button variant="link" href="http://square-enix-games.com" className="JoinLogin">Join</Button>
            <Button variant="link" href="http://square-enix-games.com" className="JoinLogin">Log In</Button>
            
          </Form>
        </Navbar>
      );
    }
  }
  
  export default Header;
  