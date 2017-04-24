import React from "react";
import Sidebar from "./Sidebar"
import Header from "./Header"


class Work extends React.Component {

    
    render() {
        return (
            <div>
                <Sidebar location={this.props.location} page="Work"/>
                <Header />
                <h1>This is the Work</h1>
            </div>
        )
    }
}



export default Work;