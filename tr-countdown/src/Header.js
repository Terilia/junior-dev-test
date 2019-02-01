import React, { Component } from 'react';
import './Header.css';
import LogoSquare from './squarelogo.png'
import LoginBackground from './login.png'
import Image from 'react-bootstrap/Image'

class Header extends Component {
    render() {
      return (
        <div className="Header d-flex">
              <span><Image className="Logo" src={LogoSquare}/></span>
              <div><Image className="LoginLogo" src={LoginBackground}/><span className="JoinLogin"><a href="https://youtube.com">Join</a></span><span className="JoinLogin"><a href="https://youtube.com">Log In</a></span></div>
        </div>
      );
    }
  }
  
  export default Header;
  