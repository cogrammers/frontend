import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
class MeetupsPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
    }
    componentDidMount(){
        fetchJsonp('https://api.meetup.com/cogrammers/events')
            .then(response => response.json()
                .then(json => console.log(json)));
        this.setState({ events: [
                { name: 'hello' },
                { name: 'cogrammers' }
            ]})
    }
    render(){
        return(
            // this.state.events
            <div id="meetups" className="width-80 text-center div-center">
                HELLO
                <ul>
                    {
                        this.state.events.map( event => <li>{event.name}</li> )
                    }
                </ul>
            </div>
        )
    }
}
export default MeetupsPage;
