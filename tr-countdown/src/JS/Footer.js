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
			<Row className="justify-content-md-center link-list">
				<Col className="text-center legal-image"><Image src={ESRBLogo}/></Col>
				<Col className="text-center legal-image"><Image src={XboxLogo}/></Col>
				<Col className="text-center legal-image"><Image src={Ps4Logo}/></Col>
				<Col className="text-center legal-image"><Image src={SteamLogo}/></Col>
				<Col className="text-center legal-image"><Image src={PCLogo}/></Col>
			</Row>
			<Row>
				<Col className="text-center legal-image"><Image src={CrystalLogo}/></Col>
				<Col className="text-center legal-image"><Image src={SquareEnixLogo}/></Col>
				<Col className="text-center legal-image"><Image src={EidosLogo}/></Col>
			</Row>
			<Row>
				<Col><div className="legal-text">SHADOW OF THE TOMB RAIDER © 2019 Square Enix Limited.	Developed by Eidos Interactive Corporation. All rights reserved.	SHADOW OF THE TOMB RAIDER, TOMB RAIDER, CRYSTAL DYNAMICS, the CRYSTAL DYNAMICS logo, EIDOS-MONTRÉAL, the EIDOS-MONTRÉAL logo, and LARA CROFT are registered trademarks or trademarks of Square Enix Limited. SQUARE ENIX and the SQUARE ENIX logo are registered trademarks or trademarks of Square Enix Holdings Co., Ltd. XBOX, XBOX ONE, the Games for Windows logo and Xbox logos are registered trademarks or trademarks of the Microsoft group of companies and are used under license. “PS4” and “PlayStation” are registered trademarks of Sony Interactive Entertainment Inc. "Steam” is a trademark of the same company. ©2019 Valve Corporation. Steamworks and the Steamworks logo are trademarks and/or registered trademarks of Valve Corporation. All other trademarks are the property of their respective owners.</div></Col>
			</Row>
			<Row className="justify-content-md-center link-list">
				<Col xs={6} md="auto" className="text-center bottom-nav"><a href="http://square-enix-games.com">Cookie Policy</a></Col>
				<Col md="auto" className="text-center bottom-nav colon">●</Col>
				<Col xs={6} md="auto" className="text-center bottom-nav"><a href="http://square-enix-games.com">Terms of Use</a></Col>
				<Col md="auto" className="text-center bottom-nav colon">●</Col>
				<Col xs={6} md="auto" className="text-center bottom-nav"><a href="http://square-enix-games.com">Privacy Policy</a></Col>
				<Col md="auto" className="text-center bottom-nav colon">●</Col>
				<Col xs={6} md="auto" className="text-center bottom-nav"><a href="http://square-enix-games.com">Support</a></Col>
				<Col md="auto" className="text-center bottom-nav colon">●</Col>
				<Col xs={6} md="auto" className="text-center bottom-nav"><a href="http://square-enix-games.com">Material Usage</a></Col>
			</Row>
		</Container>
		);
	}
}
	
	export default Footer;
	