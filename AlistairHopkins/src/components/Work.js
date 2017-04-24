import React from "react";
import Sidebar from "./Sidebar"
import Header from "./Header"
import Trace from "./Trace"
import Wdi from "./wdi"


class Work extends React.Component {

    
    render() {
        return (
            <div>
                <Sidebar location={this.props.location} page="Work"/>
                <Header />
                <Trace />
                <Wdi />
            </div>
        )
    }
}



export default Work;