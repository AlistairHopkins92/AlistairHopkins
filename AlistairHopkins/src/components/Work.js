import React from "react";
import Sidebar from "./Sidebar"
import Header from "./Header"
import SubHeader from "./SubHeader"
import { BrowserRouter, Match, Miss } from 'react-router';
import Trace from "./Trace"
import Wdi from "./wdi"
import General from "./General"
import Footer from "./Footer"


class Work extends React.Component {

    
    render() {
        return (
                
                <div>
                
                    <Sidebar location={this.props.location} page="Work" />
                    <Header />

                 <BrowserRouter>
                <div className="work">
                    {/*<SubHeader />*/}
                    <Match exactly pattern="/other" component={General}></Match>
                    <Match exactly pattern="/work/trace" component={Trace}></Match>
                    <Match exactly pattern="/work/ga" component={Wdi}></Match>
               
                </div>
                 </BrowserRouter>
                </div>
        )
    }
}



export default Work;