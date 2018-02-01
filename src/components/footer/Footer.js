import React, { Component } from 'react';
import FooterBackground from '../../assets/footer-background.svg';
import TagLogo from '../../assets/footer-tag-logo.svg';
import SocialPlaceholder from '../../assets/icons/placeholder.svg';
import './Footer.css';

class Footer extends Component {

  render(){
    return(
      <div className="footer">
        <img id="footer-background" alt="colorful background made of overlapping shapes" src={FooterBackground}/>
        <img id="header-logo-tagline" alt="Cogrammers logo and tagline" src={TagLogo}/>

        <div className="social-container">
          <a href="mailto:info@cogrammers.community"><img className="social-logo" src={SocialPlaceholder} alt="Email Icon"/></a>
          <a href="https://www.linkedin.com/company/cogrammers"><img className="social-logo" src={SocialPlaceholder} alt="LinkedIn Logo icon"/></a>
          <a href="https://www.meetup.com/cogrammers"><img className="social-logo" src={SocialPlaceholder} alt="Meetup Logo icon"/></a>
          <a href="https://www.facebook.com/cogrammers"><img className="social-logo" src={SocialPlaceholder} alt="Facebook Logo icon"/></a>
          <a href="https://www.twitter.com/cogrammers"><img className="social-logo" src={SocialPlaceholder} alt="Twitter Logo icon"/></a>
        </div>
      </div>
    )
  }

}

export default Footer;
