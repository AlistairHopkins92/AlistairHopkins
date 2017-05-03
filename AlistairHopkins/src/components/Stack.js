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
        console.log(pastStack)
        console.log(currentStack)
        console.log(futureStack)

        return (
            <div>
                <Sidebar location={this.props.location} page="Stack"/>
                <Header />
                <div className="stack">
                    <h1>Stack</h1>
                    <div className="stack-column">
                        <h1>Past</h1>
                        <ul> 
                            <li>Angular Ionic/Cordova</li>
                            <li>AWS API Gateway</li>
                            <li>Jira</li>
                            <li>Twilio Stripe</li>
                            <li>Heroku</li>
                            <li>Now.sh</li>
                            <li>Github</li>
                            <li>Gulp</li>
                            <li>Bower</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                    <div className="stack-column">
                        <h1>Present</h1>
                        <p> 
                            React
                            React Redux ES6
                            Digital Ocean
                            Ruby on Rails
                            Node Express NPM
                            Flexbox CSSModules
                            Vagrant VSCode
                            Postgresql Webpack
                            Git Gitlab
                            Google Maps API
                            Postman CircleCI
                            Droplr Trello
                        </p>
                    </div>
                    <div className="stack-column">
                        <h1>Future</h1>
                        <p> 
                            React Native
                            D3 Centos Nginx
                            Enzyme
                            Toolbox
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}



export default Stack;