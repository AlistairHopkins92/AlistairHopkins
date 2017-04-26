import React from "react";
import Sidebar from "./Sidebar"
import Header from "./Header"
import Footer from "./Footer"

class NotFound extends React.Component {

    
    render() {
        return (
            <div>
                <Sidebar location={this.props.location} page="Unknown"/>
                <Header />
                <div className="unknown">
                    <h1>The page can't be found.</h1>
                </div>
            </div>
        )
    }
}



export default NotFound;