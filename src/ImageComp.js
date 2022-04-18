import React from 'react';
import './App.css'
import Bgimg from './imres/rsc/bgImg.png'
import Bitcoinlogo from './imres/rsc/bitcoin-logo.png'
import Bitcoinlogobg from './imres/rsc/BitcoinLogoBg.png'
import Box from './imres/rsc/Box.png'
import Exploremore from './imres/rsc/ButtonExploreMore.png' 
import HeroWaves from './imres/rsc/HeroWaves.png'
import Partner from './imres/rsc/Partner.png'
import Headerbg from './imres/rsc/Header-bg.png'
import insta from './imres/rsc/insta.png'
import fb from './imres/rsc/fb.png'
import twitter from './imres/rsc/twitter.png'
import Navbar from './navbar';
import Txt from './txt'


export default (props)=>{
    return (
        <div className="flex-container">          
            <img src={Bgimg} className="Bgimg" alt="image here"/>
            <img src={Headerbg} className="Headerbg" alt="image here"/>
            <img src={Partner} className="Partner" alt = "image here"/>
            <img src={Bitcoinlogo}  className="Bitcoinlogo" alt = "image here"/>
            <img src={Bitcoinlogobg} className="Bitcoinlogobg" alt="image here"/>
            <a href="http://www.instagram.com"> 
            <img src={insta} className="insta" alt="image here"/>
            </a>
            <a href="http://www.facebook.com"> 
            <img src={fb} className="fb" alt="image here"/>
            </a>
            <a href="http://www.twitter.com"> 
            <img src={twitter} className="twitter" alt="image here"/>
            </a>
            <a href="https://birdsoftsolutions.com/">
            <img src={Exploremore} className="Exploremore" alt="image here"/> 
            </a>
            <img src={Box} className="Box" alt="image here"/>
            <img src={HeroWaves} className="HeroWaves" alt="image here"/>
            <Txt />
            <Navbar />            
        </div>
    )
}