import React from "react";
class Wdi extends React.Component {
    render() {
            return (
                <div className="work">
                    <div className="workcontainer">
                        <h1> General Assembly & WDI Projects</h1>
                        <div className="textBlock">
                            <p>General Assembly was a three month immersive coding bootcamp that covers a range of programming languages and frameworks, concerning both the client side and the server side. A large part of the course focused on working as part of a team, either pair programming or working in larger groups for certain projects.</p>
                        </div>
                        <div className="pill-container">  
                            <div className="work-pill">
                                <h4 className="work-title">
                                    The Box Game
                                    <a href="https://github.com/AlistairHopkins92/wdi-project-1">
                                        <img src={require('../css/images/github-icon.png')} className="github-small" />
                                    </a>
                                </h4>
                                <div className="wdi-top">
                                    <p>Puzzle Game from my childhood built as my first WDI project. Players take it in turns to draw lines with the aim of completing a boxes before the other player.</p>
                                 </div>
                                 <div className="stack-col">
                                    <h4>Stack</h4>
                                    <ul>
                                        <li>HTML,</li>
                                        <li>JavaScript,</li>
                                        <li>jQuery,</li>
                                        <li>CSS,</li>
                                        <li>animate.css</li>
                                    </ul>
                                </div>
                                <div className="wdi-image">
                                    <img src={require('../css/images/fillmein.png')} className="wdiimage" />
                                </div>
                            </div>
                            <div className="work-pill2">
                                <h4 className="work-title">
                                    Come Ride With Me
                                    <a href="https://github.com/AlistairHopkins92/wdi-project-2">
                                        <img src={require('../css/images/github-icon.png')} className="github-small" />
                                    </a>
                                </h4>
                                <div className="wdi-top">
                                    <p>Created for my second WDI project, Ride With Me is a lift sharing service. Built in Ruby with Facebook OAuth authentication option on log in.</p>
                                </div>
                                <div className="stack-col">
                                    <h4>Stack</h4>
                                    <ul>
                                        <li>HTML,</li>
                                        <li>CSS,</li>
                                        <li>Rails,</li>
                                        <li>jQuery,</li>
                                        <li>Foundation,</li>
                                        <li>Facebook OAuth</li>
                                    </ul>
                                </div>
                                <div className="wdi-image">
                                    <img src={require('../css/images/ridewithme.png')} className="wdiimage" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="pill-container">
                            <div className="work-pill3">
                                <h4 className="work-title">
                                    7 Days of Sun 
                                    <a href="https://github.com/matmenzl/wdi-project-3">
                                        <img src={require('../css/images/github-icon.png')} className="github-small" />
                                    </a>
                                </h4>
                                <div className="wdi-top">
                                    <p>7 Days of Sun is a JavaScript Single Page Application which shows only sunny locations in the coming 7 days. Built as part of the WDI group project.</p>
                                </div>
                                <div className="stack-col">
                                    <h4>Stack</h4>
                                    <ul>
                                        <li>JavaScript,</li>
                                        <li>jQuery,</li>
                                        <li>Underscore.JS,</li>
                                        <li>AngularJS,</li>
                                        <li>Google Maps API,</li>
                                        <li>forecast.io API</li>
                                    </ul>
                                </div>
                                <div className="wdi-image">
                                    <img src={require('../css/images/7days.png')} className="wdiimage" />
                                </div>
                            </div>
                            <div className="work-pill4">
                                <h4 className="work-title">
                                    Down To Go
                                    <a href="https://github.com/AlistairHopkins92/wdi-project-4">
                                        <img src={require('../css/images/github-icon.png')} className="github-small" />
                                    </a>
                                </h4>
                                <div className="wdi-top">
                                    <p>'Down To Go' location based social dating app which allows a user to select their location for the evening, match with others, then chat.</p>
                                </div>
                                <div className="stack-col">
                                    <h4>Stack</h4>
                                    <ul>
                                        <li>Javascript,</li>
                                        <li>jQuery,</li>
                                        <li>Node.js,</li>
                                        <li>passport.js</li>
                                        <li>socket.io,</li>
                                        <li>Google Maps API</li>
                                    </ul>
                                </div>
                                <div className="wdi-image">
                                    <img src={require('../css/images/downtogo.png')} className="wdiimage" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

export default Wdi