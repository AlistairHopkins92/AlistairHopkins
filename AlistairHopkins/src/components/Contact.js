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
                </div>
            </div>
        )
    }
}



export default Stack;