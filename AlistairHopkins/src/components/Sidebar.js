import React from "react";
import ReactDOM from 'react-dom';
const grainy = require('grainy');

class Sidebar extends React.Component {

    componentDidMount(){
        const node = ReactDOM.findDOMNode(this);
            node.grainy({
            intensity: 1,
            size: 525,
            color: '#000000',
            backgroundColor: '#85b6d3',
            opacity: 0.12,
            monochrome: true,
        });
    }
// #71b8bd
    render() { 
        const tag = this.props.page
        return (
            <div className="sidebar">
                <h4>{tag}</h4>
            </div>
        )
    }
}



export default Sidebar;