import React from "react";
import Sidebar from "./Sidebar"
import Header from "./Header"

class Stack extends React.Component {

    
    render() {
        return (
            <div>
                <Sidebar location={this.props.location} page="Contact"/>
                <Header />
                <div className="contact">
                    <h1>Contact</h1>
                     <div>
                        <h4>Alistair Hopkins</h4>
                        <h4>alistairhopkins92@gmail.com</h4>
                        <h4>www.github.com/AlistairHopkins92</h4>
                        <h4>www.linkedin.com/in/alistairhopkins92/</h4>
                    </div>
                </div>
            </div>
        )
    }
}



export default Stack;