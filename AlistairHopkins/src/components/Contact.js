import React from "react";
import Sidebar from "./Sidebar"
import Header from "./Header"
import Footer from "./Footer"

class Stack extends React.Component {

    
    render() {
        return (
            <div>
                <Sidebar location={this.props.location} page="Contact"/>
                <Header />
                <div className="work">
                    <div className="trace">
                        <h1>Looking for a developer?</h1>
                    <div className="textBlock">
                        <p>Are you looking for a enthusiastic software developer with a passion for all things JavaScript for your next project? Don't hesitate to reach out to me if you'd like to have a chat about potentially working together.</p>
                        <p>I'm always interested in hearing & talking about new ideas, so feel free to drop me an email with anything you would like to discuss.</p>
                        <h2>Get in touch:</h2>
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}



export default Stack;