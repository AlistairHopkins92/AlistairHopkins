import React from "react";
import { Link , match } from 'react-router';


class SubHeader extends React.Component {

    render() {
            return (
                <div className="header">
                    <h4 className="top">
                        <Link to="/work">
                           General
                        </Link>
                    </h4>-
                    <h4 className="top" >
                        <Link to="/work/trace">Trace</Link>
                    </h4>-
                    <h4 className="top" >
                        <Link to="/work/ga">General Assembly</Link>
                    </h4>
                </div>
            )
        }
    }

export default SubHeader;