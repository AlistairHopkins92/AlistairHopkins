import React from "react";


class Footer extends React.Component {

    render() {
            return (
                <div className="footer">
                    <a href="https://github.com/AlistairHopkins92">
                        <img className="icon"
                            src={require('../css/images/github-icon.png')}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/alistairhopkins92/">    
                        <img className="icon"
                            src={require('../css/images/linkedInwhite.png')}
                        />
                    </a>
                </div>
            )
        }
    }

export default Footer;