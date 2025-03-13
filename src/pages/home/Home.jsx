import React from 'react'
import './home.css'
import maple from './images/maple_logo.png'
import buyBonzo from './images/buy-maple.svg'
// import footerDog from './images/dog.png'
import followTwitter from './images/follow-twitter.svg'
// import heroImage from './images/hero-main.png'
import joinTelegram from './images/join-telegram.svg'
// import heroImageMobile from './images/landing-mobile.svg'
// import totalSupply from './images/total-supply.svg'
import lp from './images/lp-burned.svg'
import presale from './images/presale.svg'
import ownership from './images/ownership.svg'
// import logo from './images/logo.svg'


function Home() {
  return (
    <div>
        <h2 className="contract-address">Contract Address: T B A</h2>
    <div className="hero"> 
        <a href="/" className="buy-bonzo"><img src={buyBonzo} alt="hero-group"/></a>
        <div className="hero-image-wrapper">
              <img className="hero-main-image" src={maple} alt="hero-group"/>
        </div>
        <a href="https://t.me/marpletariffs" rel="noreferrer" target="_blank" className="join-telegram"><img src={joinTelegram} alt="hero-group"/></a>
        <a href="https://x.com/MappleTa7?t=S5XLwdifUIbY3enGJBSGXg&s=09" rel="noreferrer" target="_blank" className="follow-twitter"><img src={followTwitter} alt="hero-group"/></a>
    </div>

    <div className="about">
        <h2 className="about-header">The maple tarrif</h2>
        <p className="about-bonzo">$MAPLETARIFF: A meme coin incorporating the iconic Canadian maple leaf, with a twist to reflect the tariff implications..</p>
    </div>

    <div className="bonzonomics">
        <div className="bonzonomics-wrapper">
        <h2 className="bonzonomics-header">maplenomics</h2>
        <div className="bonzonomics-wraper">
            <div className="bonzonomics-items">
              {/* <img className="bonzonomics-item" src={totalSupply} alt="total-supply" /> */}
              <img className="bonzonomics-item" src={presale} alt="presale" />
              <img className="bonzonomics-item" src={lp} alt="lp" />
              <img className="bonzonomics-item" src={ownership} alt="ownership" />
            </div>  
        </div>
        <img className="bonzonomics-footer-image" src={maple} alt="dog"/>
        </div>
    </div>
    <footer> 
        <div className="footer-border-1"></div>
        <div className="footer-border-2"></div>
    </footer>
    </div>
  )
}

export default Home