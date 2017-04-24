import React from "react";
import Sidebar from "./Sidebar"
import Header from "./Header"

class Stack extends React.Component {

    
    render() {
        return (
            <div>
                <Sidebar location={this.props.location} page="Stack"/>
                <Header />
                <h1>This is the Stack</h1>
            </div>
        )
    }
}



export default Stack;