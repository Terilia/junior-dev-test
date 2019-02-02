import React, { Component } from 'react';
import '../CSS/Footer.css';
import ESRBLogo from '../PIC/esrb.png'
import XboxLogo from '../PIC/xbox.png'
import Ps4Logo from '../PIC/ps4.png'
import SteamLogo from '../PIC/steam.png'
import PCLogo from '../PIC/pc.png'
import CrystalLogo from '../PIC/crystal.png'
import SquareEnixLogo from '../PIC/squarelegallogo.png'
import EidosLogo from '../PIC/eidos.png'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Footer extends Component {
    render() {
      return (
        <Container>
                <Row className="LegalContainer">
                        <Col className="LegalImage"><Image src={ESRBLogo}/></Col>
                        <Col className="LegalImage"><Image src={XboxLogo}/></Col>
                        <Col className="LegalImage"><Image src={Ps4Logo}/></Col>
                        <Col className="LegalImage"><Image src={SteamLogo}/></Col>
                        <Col className="LegalImage"><Image src={PCLogo}/></Col>
                </Row>
                <Row>
                        <Col className="LegalImage"><Image src={CrystalLogo}/></Col>
                        <Col className="LegalImage"><Image src={SquareEnixLogo}/></Col>
                        <Col className="LegalImage"><Image src={EidosLogo}/></Col>
                </Row>
                <Row>
                        <Col><div className="LegalText">SHADOW OF THE TOMB RAIDER © 2019 Square Enix Limited.  Developed by Eidos Interactive Corporation. All rights reserved.  SHADOW OF THE TOMB RAIDER, TOMB RAIDER, CRYSTAL DYNAMICS, the CRYSTAL DYNAMICS logo, EIDOS-MONTRÉAL, the EIDOS-MONTRÉAL logo, and LARA CROFT are registered trademarks or trademarks of Square Enix Limited. SQUARE ENIX and the SQUARE ENIX logo are registered trademarks or trademarks of Square Enix Holdings Co., Ltd. XBOX, XBOX ONE, the Games for Windows logo and Xbox logos are registered trademarks or trademarks of the Microsoft group of companies and are used under license. “PS4” and “PlayStation” are registered trademarks of Sony Interactive Entertainment Inc. "Steam” is a trademark of the same company. ©2019 Valve Corporation. Steamworks and the Steamworks logo are trademarks and/or registered trademarks of Valve Corporation. All other trademarks are the property of their respective owners.</div></Col>
                </Row>
                <Row className="justify-content-md-center LinkList">
                        <Col md="auto" className="BottomNav">Cookie Policy</Col>
                        <Col md="auto" className="BottomNav">●</Col>
                        <Col md="auto" className="BottomNav">Terms of Use</Col>
                        <Col md="auto" className="BottomNav">●</Col>
                        <Col md="auto" className="BottomNav">Privacy Policy</Col>
                        <Col md="auto" className="BottomNav">●</Col>
                        <Col md="auto" className="BottomNav">Support</Col>
                        <Col md="auto" className="BottomNav">●</Col>
                        <Col md="auto" className="BottomNav">Material Usage</Col>
                </Row>
        </Container>
      );
    }
  }
  
  export default Footer;
  