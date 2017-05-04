import React from "react";
class Wdi extends React.Component {
    render() {
            return (
                <div className="work">
                    <div className="workcontainer">
                        <h1>WDI Projects</h1>
                        <p>General Assembly was a three month immersive coding bootcamp that covers a range of programming languages and frameworks, concerning both the client side and the server side. A large part of the course focused on working as part of a team, either pair programming or working in larger groups for certain projects.</p>
                        <div className="pill-container">    
                            {/*<div className="work-pill">
                                <img src={require('../css/images/fillmein.png')} className="wdiimage" />
                            </div>*/}
                            <div className="work-pill">
                                 <h4 className="work-title">The Box Game</h4>
                                 <p>Stack:
                                     HTML
                                     JavaScript
                                     CSS
                                 </p>
                                 <p>Description:</p>
                            </div>
                            <div className="work-pill2">
                                <h4 className="work-title">Come Ride With Me</h4>
                                
                                <p>Stack:
                                     Ruby on Rails, CSS, foundation & OAuth Facebook authentication 
                                </p>
                                <p>Description:</p>
                            </div>
                            {/*<div className="work-pill2">
                                <img src={require('../css/images/ridewithme.png')} className="wdiimage" />
                            </div>
                            <div className="work-pill3">
                                <img src={require('../css/images/7days.png')} className="wdiimage" />
                            </div>*/}
                            <div className="work-pill3">
                                <h4 className="work-title">7 Days of Sun</h4>
                                
                                <p>Stack:
                                    Google Maps API  forecast.io API
                                </p>
                                <p>Description:</p>
                            </div>
                            <div className="work-pill4">
                                <h4 className="work-title">Down To Go</h4>
                                
                                <p>Stack:
                                    AngularJS
                                    Google Maps Api, Socket.io.
                                </p>
                                <p>Description:</p>
                            </div>
                            {/*<div className="work-pill4">
                                <img src={require('../css/images/downtogo.png')} className="wdiimage" />
                            </div>*/}
                        </div>
                    </div>
                </div>
            )
        }
    }

export default Wdi