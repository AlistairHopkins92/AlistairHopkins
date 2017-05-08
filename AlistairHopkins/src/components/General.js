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
                            <img className="headshot"
                            src={require('../css/images/myhead.jpg')}
                            role="presentation"
                            />
                            <p>asdasdas</p>
                            <p>asdasdas</p>
                            <p>asdasdas</p>
                            <p>asdasdas</p>
                        </div>
                        <div className="about">
                            <h2>A bit about me</h2>
                            <p>Originating from the North of England, I'm a Web Developer with a keen interest in understanding how to make things work. I recently finished my first software development role after graduating an intensive web development course at General assembly. I’m now looking for a development position where I can get heavily involved with new technologies as a part of a dynamic team, and also build upon my existing skills and knowledge.</p>
                            <h2>Recent Projets</h2>
                            <p>Since finishing my contract at Roco Partners I’ve split my time between working on some freelance projects and improving my skill set by learning React and Redux. One of the freelance projects involved looking at a WordPress website for a tool resale company, focusing mainly on speed optimisation as well as fixing some bugs and looking at potential new features.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default General;