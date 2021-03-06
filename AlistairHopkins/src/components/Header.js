import React from "react";
import { Link } from 'react-router';


class Header extends React.Component {
    render() {
            return (
                <div className="header">
                    <h4 className="top">
                        <Link to="/">Alistair Hopkins</Link>
                    </h4>-
                    <h4 className="top">
                        <Link to="/other">
                           About
                        </Link>
                    </h4>-
                    <h4 className="top" >
                        <Link to="/work/trace">Trace</Link>
                    </h4>-
                    <h4 className="top" >
                        <Link to="/work/ga">General Assembly</Link>
                    </h4>-
                    {/*<h4 className="top" >
                        <Link to="/stack">Stack</Link>
                    </h4>-*/}
                    <h4 className="top" >
                        <Link to="/contact">Contact</Link>
                    </h4>
                </div>
            )
        }
    }

export default Header;