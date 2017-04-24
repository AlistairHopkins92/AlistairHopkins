import React from "react";
import { Link } from 'react-router';


class Header extends React.Component {

    render() {
            return (
                <div className="top">
                    <h1 className="top">
                        <Link to="/">Alistair Hopkins</Link>
                    </h1>
                    <h1 className="top">
                        <Link to="/work">Work</Link>
                    </h1>
                    <h1 className="top" >
                        <Link to="stack/">Stack</Link>
                    </h1>
                </div>
            )
        }
    }

export default Header;