import React from "react";
import Sidebar from "./Sidebar"
import Header from "./Header"
import Footer from "./Footer"

class General extends React.Component {

    
    render() {
        return (
            <div>
                <Sidebar location={this.props.location} page="About Me"/>
                <Header />
                <div className="work">
                    <div className="trace">
                        <div className="about-narrow">
                            <h2>Things I've Worked With</h2>
                            <ul className="code-icons">

                                <li><i className="devicon-html5-plain colored"></i></li>
                                <li><i className="devicon-javascript-plain colored"></i></li>
                                <li><i className="devicon-jquery-plain-wordmark"></i></li>
                                <li><i className="devicon-nodejs-plain colored"></i></li>

                                <li><i className="devicon-angularjs-plain colored"></i></li>
                                <li><i className="devicon-react-original-wordmark colored"></i></li>
                                <li><i className="devicon-ruby-plain colored"></i></li>
                                <li><i className="devicon-rails-plain colored"></i></li>

                                <li><i className="devicon-css3-plain-wordmark"></i></li>
                                <li><i className="devicon-sass-original colored"></i></li>
                                <li><i className="devicon-bootstrap-plain-wordmark colored"></i></li>
                                <li><i className="devicon-grunt-plain-wordmark colored"></i></li>

                                <li><i className="devicon-gulp-plain colored"></i></li>
                                <li><i className="devicon-mocha-plain colored"></i></li>
                                <li><i className="devicon-jasmine-plain-wordmark colored"></i></li>
                                <li><i className="devicon-protractor-plain colored"></i></li>
                                
                            </ul>
                        </div>
                        <div className="about">
                            <h2>A bit about me</h2>
                            <p>Originating from the North of England, I'm a Web Developer with a keen interest in understanding how to make things work. In the Summer of 2016 I graduated from an intensive web development course at General assembly and since then I've recently finished my first software development role at a company called Roco Partners. </p>
                            <p>Since finishing my contract at Roco Partners I’ve split my time between working on some freelance projects and improving my skill set by learning React and Redux. This portfolio website is one of my first React projects to go live. I love working with new tech and in the near future I intend to rebuild my 4th General Assembly project with React Native. </p>
                            <p>I believe in a "How hard can it be?" attitude, so although I primarily work with JavaScript frameworks I'm happy to take a look at almost anything. One my recent freelance projects involved working on a WordPress site for a tool resale company, focusing mainly on speed optimisation as well as fixing some longstanding bugs.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default General;