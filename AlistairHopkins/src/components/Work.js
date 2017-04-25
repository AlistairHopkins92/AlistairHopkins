import React from "react";
import Sidebar from "./Sidebar"
import Header from "./Header"
import Trace from "./Trace"
import Wdi from "./wdi"
import Footer from "./Footer"


class Work extends React.Component {

    
    render() {
        return (
            <div>
                <Sidebar location={this.props.location} page="Work"/>
                <Header />
                <Trace />
                <Wdi />
                <h1>Closing piece</h1>
            </div>
        )
    }
}



export default Work;