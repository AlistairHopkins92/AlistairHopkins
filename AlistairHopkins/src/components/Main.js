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
                    <div>
                        <h1>Alistair Hopkins</h1>
                        <h4>Web Developer</h4>
                    </div>
                    <div>
                        <h1>Javascript ReactJs Redux ES6 Rails HTML CSS Angular NodeJs</h1>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}



export default Main;