import React from "react";
import Sidebar from "./Sidebar"
import Header from "./Header"

class Stack extends React.Component {

    
    render() {
        return (
            <div>
                <Sidebar location={this.props.location} page="Stack"/>
                <Header />
                <div className="stack">
                    <div className="stack-column">
                        <h4>Past</h4>
                        <h4>Angular</h4>
                        <h4>Angular</h4>
                        <h4>Angular</h4>
                        <h4>Angular</h4>
                        <h4>Angular</h4>
                        <h4>Angular</h4>
                        <h4>Angular</h4>
                    </div>
                    <div className="stack-column">
                        <h4>Present</h4>

                    </div>
                    <div className="stack-column">
                        <h4>Future</h4>
                    </div>
                </div>
            </div>
        )
    }
}



export default Stack;