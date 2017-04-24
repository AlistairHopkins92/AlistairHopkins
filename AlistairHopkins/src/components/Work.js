import React from "react";
import Sidebar from "./Sidebar"
import Header from "./Header"


class Work extends React.Component {

    
    render() {
        return (
            <div>
                <Sidebar location={this.props.location} page="Work"/>
                <Header />
                <div className="work">
                    <h1>This is the Work</h1>
                </div>
            </div>
        )
    }
}



export default Work;