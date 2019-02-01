import React, { Component } from 'react';
import './Footer.css';
import ESRBLogo from './esrb.png'
import XboxLogo from './xbox.png'
import Ps4Logo from './ps4.png'
import SteamLogo from './steam.png'
import PCLogo from './pc.png'
import CrystalLogo from './crystal.png'
import SquareEnixLogo from './squarelegallogo.png'
import EidosLogo from './eidos.png'
import Image from 'react-bootstrap/Image'


class Footer extends Component {
    render() {
      return (
        <div className="Footer">
        <div className="ImageContainer d-flex flex-wrap justify-content-center">
                <div className="LegalImage"><Image src={ESRBLogo}  /></div>
                <div className="LegalImage"><Image src={XboxLogo}  /></div>
                <div className="LegalImage"><Image src={Ps4Logo}  /></div>
                <div className="LegalImage"><Image src={SteamLogo}  /></div>
                <div className="LegalImage"><Image src={PCLogo}  /></div>
            </div>
        <div className="ImageContainer d-flex flex-wrap justify-content-center">
                <div className="LegalImage"><Image src={CrystalLogo}  /></div>
                <div className="LegalImage"><Image src={SquareEnixLogo}  /></div>
                <div className="LegalImage"><Image src={EidosLogo}  /></div>
        </div>
        <div className="ImageContainer d-flex flex-wrap justify-content-center">
                <div className="LegalText">SHADOW OF THE TOMB RAIDER © 2019 Square Enix Limited.  Developed by Eidos Interactive Corporation. All rights reserved.  SHADOW OF THE TOMB RAIDER, TOMB RAIDER, CRYSTAL DYNAMICS, the CRYSTAL DYNAMICS logo, EIDOS-MONTRÉAL, the EIDOS-MONTRÉAL logo, and LARA CROFT are registered trademarks or trademarks of Square Enix Limited. SQUARE ENIX and the SQUARE ENIX logo are registered trademarks or trademarks of Square Enix Holdings Co., Ltd. XBOX, XBOX ONE, the Games for Windows logo and Xbox logos are registered trademarks or trademarks of the Microsoft group of companies and are used under license. “PS4” and “PlayStation” are registered trademarks of Sony Interactive Entertainment Inc. "Steam” is a trademark of the same company. ©2019 Valve Corporation. Steamworks and the Steamworks logo are trademarks and/or registered trademarks of Valve Corporation. All other trademarks are the property of their respective owners.</div>
        </div>
        
        <div className="ImageContainer d-flex flex-wrap justify-content-center">
                <span className="BottomNav">Cookie Policy</span>
                <span className="BottomNav">●</span>
                <span className="BottomNav">Terms of Use</span>
                <span className="BottomNav">●</span>
                <span className="BottomNav">Privacy Policy</span>
                <span className="BottomNav">●</span>
                <span className="BottomNav">Support</span>
                <span className="BottomNav">●</span>
                <span className="BottomNav">Material Usage</span>
        </div>
        </div>
      );
    }
  }
  
  export default Footer;
  