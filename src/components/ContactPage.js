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
        <p><a href="mailto:info@cogrammers.community">Email</a></p>
        <p><a href="https://www.linkedin.com/company/cogrammers">LinkedIn</a></p>
        <p><a href="https://www.meetup.com/cogrammers">Meetup</a></p>
        <p><a href="https://www.facebook.com/cogrammers">Facebook</a></p>
        <p><a href="https://www.twitter.com/cogrammers">Twitter</a></p>
      </div>
    )
  }

}

export default ContactPage;
