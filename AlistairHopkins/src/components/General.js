import React from "react";
class General extends React.Component {
    render() {
            return (
                <div className="work">
                    <div className="workcontainer">
                        <h1>WDI Projects</h1>
                        <p>General Assembly was a three month immersive coding bootcamp that covers a range of programming languages and frameworks, concerning both the client side and the server side. A large part of the course focused on working as part of a team, either pair programming or working in larger groups for certain projects.</p>
                        <div className="pill-container">    
                            <div className="work-pill">
                                <h4>The Box Game</h4>
                                <p>Description:</p>
                                <p>Stack:
                                    HTML
                                    JavaScript
                                    CSS
                                </p>
                            </div>
                            <div className="work-pill2">
                                <h4>Come Ride With Me</h4>
                                <p>Description:</p>
                                <p>Stack:
                                     Ruby on Rails, CSS, foundation & OAuth Facebook authentication 
                                </p>
                            </div>
                            <div className="work-pill3">
                                <h4>7 Days of Sun</h4>
                                <p>Description:</p>
                                <p>Stack:
                                    Google Maps API  forecast.io API
                                    
                                </p>
                            </div>
                            <div className="work-pill4">
                                <h4>Down To Go</h4>
                                <p>Description:</p>
                                <p>Stack:
                                    AngularJS
                                    Google Maps Api, Socket.io.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

export default General