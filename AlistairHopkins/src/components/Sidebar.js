import React from "react";

class Sidebar extends React.Component {

    
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