import React, { Component } from 'react';


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
        <a href="mailto:info@cogrammers.community">Email</a>
        <a href="https://www.linkedin.com/company/cogrammers">LinkedIn</a>
        <a href="https://www.meetup.com/cogrammers">Meetup</a>
        <a href="https://www.facebook.com/cogrammers">Facebook</a>
        <a href="https://www.twitter.com/cogrammers">Twitter</a>
      </div>
    )
  }

}

export default ContactPage;
