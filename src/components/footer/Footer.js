import React, { Component } from 'react';
import FooterBackground from '../../assets/footer-background.svg';
import TagLogo from '../../assets/footer-tag-logo.svg';
import MailIcon from '../../assets/icons/mail-icon-gradient.svg';
import LinkedinIcon from '../../assets/icons/linkedin-icon-gradient.svg';
import MeetupIcon from '../../assets/icons/meetup-icon-gradient.svg';
import FacebookIcon from '../../assets/icons/facebook-icon-gradient.svg';
import TwitterIcon from '../../assets/icons/twitter-icon-gradient.svg';
import './Footer.css';

class Footer extends Component {
  render() {
    return(
      <div className="footer">
        <img className="footer-background" alt="colorful background made of overlapping shapes" src={FooterBackground}/>
        <img className="footer-logo-tagline" alt="Cogrammers logo and tagline" src={TagLogo}/>

        <div className="social-container">
          <a href="mailto:info@cogrammers.community"><img className="social-logo" src={MailIcon} alt="Email Icon"/></a>
          <a href="https://www.linkedin.com/company/cogrammers"><img className="social-logo" src={LinkedinIcon} alt="LinkedIn Logo icon"/></a>
          <a href="https://www.meetup.com/cogrammers"><img className="social-logo" src={MeetupIcon} alt="Meetup Logo icon"/></a>
          <a href="https://www.facebook.com/cogrammers"><img className="social-logo" src={FacebookIcon} alt="Facebook Logo icon"/></a>
          <a href="https://www.twitter.com/cogrammers"><img className="social-logo" src={TwitterIcon} alt="Twitter Logo icon"/></a>
        </div>
      </div>
    )
  }

}

export default Footer;
