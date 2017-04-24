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
                    <h4>This is the Work</h4>
                    <div className="work-pill">Trace</div>
                    <div className="work-pill">DGA</div>
                    <div className="work-pill">WDI</div>
                    <div className="work-pill">test</div>
                </div>
            </div>
        )
    }
}



export default Work;