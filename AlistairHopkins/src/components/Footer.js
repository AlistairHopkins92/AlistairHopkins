import React from "react";


class Footer extends React.Component {

    render() {
            return (
                <div className="footer">
                    <img className="icon"
                        src={require('../css/images/github.svg')}
                    />
                    <img className="icon"
                        src={require('../css/images/linkedin.svg')}
                    />
                </div>
            )
        }
    }

export default Footer;