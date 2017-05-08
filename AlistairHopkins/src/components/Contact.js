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
                    <div className="textBlock">
                        <h2>I'd Love to hear from you!</h2>
                        <h2>Feel free to get in touch:</h2>
                        <a href="mailto:alistairhopkins92@gmail.com">     
                            <h1>Email</h1>
                        </a>
                        <a href="https://linkedin.com/in/alistairhopkins92"> 
                            <h1>LinkedIn</h1>
                        </a>
                         <a href="https://github.com/AlistairHopkins92">
                            <h1>GitHub</h1>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Stack;