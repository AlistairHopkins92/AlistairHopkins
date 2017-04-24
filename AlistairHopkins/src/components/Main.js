import React from "react";
import Sidebar from "./Sidebar"
import Header from "./Header"

class Main extends React.Component {

    
    render() {
        return (
            <div>
                <Sidebar />
                <Header />
                <h1>This is the Main</h1>
            </div>
        )
    }
}



export default Main;