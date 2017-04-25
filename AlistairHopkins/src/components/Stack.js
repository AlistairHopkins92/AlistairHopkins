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
                    <div className="stack-column">
                        <h4>Past</h4>
                        <p> 
                            Angular Ionic/Cordova
                            AWS Lambda
                            AWS API Gateway
                            Jira
                            Twilio Stripe
                            Heroku Now.sh
                            Docker Ubuntu
                            Github
                            Gulp Bower
                            Firebase
                        </p>
                    </div>
                    <div className="stack-column">
                        <h4>Present</h4>
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
                        <h4>Future</h4>
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