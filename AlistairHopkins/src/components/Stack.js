import React from "react";
import Sidebar from "./Sidebar"
import Header from "./Header"
import stackdata from "../stackdata.js"

class Stack extends React.Component {
    
    render() {
        const stack = stackdata
        const pastStack = stack.filter(function(item, index, array){
            return item.tense === "past"
        })
        const currentStack = stack.filter(function(item, index, array){
            return item.tense === "present"
        })
        const futureStack = stack.filter(function(item, index, array){
            return item.tense === "future"
        })


        const pastListings = pastStack.map((item) =>
            <li>
                {item.name}
                <img className="stack-image"
                            src={item.image}
                            role="presentation"
                        />
            </li>
        );
        const currentListings = currentStack.map((item) =>
            <li>
                {item.name}
                <img className="stack-image"
                            src={item.image}
                            role="presentation"
                        />
            </li>
        );
        const futureListings = futureStack.map((item) =>
            <li>
                {item.name}
                <img className="stack-image"
                            src={item.image}
                            role="presentation"
                        />
            </li>
        );

        return (
            <div>
                <Sidebar location={this.props.location} page="Stack"/>
                <Header />
                <div className="stack">
                    <h1>Stack</h1>
                    <div className="stack-column">
                        <h1>Past</h1>
                        <ul> 
                            {pastListings}
                        </ul>
                    </div>
                    <div className="stack-column">
                        <h1>Current</h1>
                        <ul> 
                            {currentListings}
                        </ul>
                    </div>
                    <div className="stack-column">
                        <h1>Future</h1>
                        <ul> 
                            {futureListings}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}



export default Stack;