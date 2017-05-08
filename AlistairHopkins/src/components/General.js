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
                    <div className="workcontainer">
                        <h1>About and Other Projects</h1>
                        <p>Other text</p>
                    </div>
                </div>
            </div>
        )
    }
}



export default General;