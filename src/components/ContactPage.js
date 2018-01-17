import React, { Component } from 'react';
import MailIcon from '../assets/icons/mail-icon.svg';
import LinkedInIcon from '../assets/icons/linkedin-logo.svg';
import Meetup from '../assets/icons/meetup-icon.svg';
import FacebookIcon from '../assets/icons/facebook-icon.svg';
import TwitterIcon from '../assets/icons/twitter-icon.svg';



class ContactPage extends Component{
  constructor(){
    super()
    this.state = {
      currentPage: 'contactPage'
    }
  }
  render(){
    return(
      <div id="contact">
        <a href="mailto:info@cogrammers.community"><img className="contact-logo" src={MailIcon}/></a>
        <a href="https://www.linkedin.com/company/cogrammers"><img className="contact-logo" src={LinkedInIcon}/></a>
        <a href="https://www.meetup.com/cogrammers"><img className="contact-logo small" src={Meetup}/></a>
        <a href="https://www.facebook.com/cogrammers"><img className="contact-logo" src={FacebookIcon}/></a>
        <a href="https://www.twitter.com/cogrammers"><img className="contact-logo" src={TwitterIcon}/></a>
      </div>
    )
  }

}

export default ContactPage;
