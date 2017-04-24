import React from "react";
import Sidebar from "./Sidebar"
import Header from "./Header"
import Footer from "./Footer"

class Main extends React.Component {

    
    render() {
        return (
            <div>
                <Sidebar location={this.props.location} page="Main"/>
                <Header />
                <div className="main">
                    <h1>About</h1>
                </div>
                <Footer />
            </div>
        )
    }
}



export default Main;