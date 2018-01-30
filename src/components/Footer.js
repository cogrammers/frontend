import React, { Component } from 'react';
import FooterBackground from '../assets/footer-background.svg';
import TagLogo from '../assets/footer-tag-logo.svg';
import './Footer.css';

class Footer extends Component {
  constructor(){
    super()
    this.state = {
      currentPage: 'contactPage'
    }
  }


  // <a href="mailto:info@cogrammers.community"><img className="contact-logo" src={MailIcon} alt="Email Icon"/></a>
  // <a href="https://www.linkedin.com/company/cogrammers"><img className="contact-logo" src={LinkedInIcon} alt="LinkedIn Logo icon"/></a>
  // <a href="https://www.meetup.com/cogrammers"><img className="contact-logo small" src={Meetup} alt="Meetup Logo icon"/></a>
  // <a href="https://www.facebook.com/cogrammers"><img className="contact-logo" src={FacebookIcon} alt="Facebook Logo icon"/></a>
  // <a href="https://www.twitter.com/cogrammers"><img className="contact-logo" src={TwitterIcon} alt="Twitter Logo icon"/></a>


  render(){
    return(
      <div className="footer">
        <img id="footer-background" alt="colorful background image" src={FooterBackground}/>
        <img id="header-logo-tagline" alt="Cogrammers logo and tagline" src={TagLogo}/>
      </div>
    )
  }

}

export default Footer;
