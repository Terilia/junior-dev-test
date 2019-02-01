import React, { Component } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LogoSquare from './squarelogo.png'
import LoginBackground from './login.png'
import Image from 'react-bootstrap/Image'

class Header extends Component {
    render() {
      return (
        <div className="Header">
        <Container fluid="true">
            <Row noGutters="true">
                <Col xs><Image src={LogoSquare}/></Col>
                <Col xs><Image src={LoginBackground}/></Col>
            </Row>
        </Container>
        </div>
      );
    }
  }
  
  export default Header;
  