import React, { Component } from 'react'; //import React Component
//import logo from '.../logo.svg';

export class Content extends Component {
    render() {  
        return (
            <div id="root">
                <div id="header-wrapper">
                    <div id="header">
                    <div className="row">
                        <div id="logo" className="col-auto col-md-auto col-xl-10 d-flex">
                        <h1>Mentor Up</h1>
                        </div>
                    </div>
                    </div>
                </div>

                <div>
                    <div className="MissionStatement row">
                    <h2>Our Mission</h2>
                    </div>
                    <h3 className="row">
                    At MentorUp, we aim to ensure all students have adequate resources for
                    them to succeed in high school and beyond.
                    </h3>
                </div>

                <div id="signUP">
                    <h4>Join Our Community</h4>
                </div>
            </div>
        ); 

    }         
}