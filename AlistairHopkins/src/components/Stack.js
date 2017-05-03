import React from "react";
import Sidebar from "./Sidebar"
import Header from "./Header"

class Stack extends React.Component {

    
    render() {
        return (
            <div>
                <Sidebar location={this.props.location} page="Stack"/>
                <Header />
                <div className="stack">
                    <h1>Stack</h1>
                    <div className="stack-column">
                        <h1>Past</h1>
                        <p> 
                            Angular Ionic/Cordova
                            AWS API Gateway
                            Jira
                            Twilio Stripe
                            Heroku Now.sh
                            Github
                            Gulp Bower
                            Firebase
                        </p>
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