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
                <h1>This is the Main</h1>
                <Footer />
            </div>
        )
    }
}



export default Main;