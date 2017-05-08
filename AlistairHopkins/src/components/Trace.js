import React from "react";
class Trace extends React.Component {
    render() {
            return (
                <div className="work">
                    <div className="trace">
                        <h1>Trace - Roco Partners & Homeserve</h1>
                        <div className="textBlock">
                            <p>Trace is a CMS built for Homeserve, the utility services company. It is used to manage home visits for boiler repairs, surveys, installations, safety checks and other visits. Originally Roco's work on Trace was a routing component as a standalone app (v3), to be embedded in a pre-existing CMS built by another 3rd party company. This won us the contract to replace the existing CMS with an integrated solution (v4).</p>
                        </div>
                        <div>
                            <img className="workImages"
                            src={require('../css/images/traceimage.png')}
                            role="presentation"
                            />
                            <p>A day view for the North Kent franchise</p>
                        </div>
                        <div className="textBlock">
                            <p>The frontend is Angular v1, which connects to middleware built with Ruby On Rails , handling token authentication to the existing back end built by the other 3rd party company in the project. User preferences are stored in Firebase. Trace is hosted at Heroku, with CircleCI's Continuous Integration and Heroku's own Review Apps linking back to github where the code is stored</p>
                        </div>
                        <div>
                            <video className="workImages" controls>
                                <source src={require('../css/videos/tracevideo1.mp4')} type="video/mp4"/>
                            </video>
                            <p>Viewing routes for individual engineers</p>
                        </div>
                        <div className="textBlock">
                            <p>We initially worked autonomously as an outsourced team, in the early successes in building the proof of concept which went into production, before being brought in under the auspices of Homeserve as an embedded team, following an agile methodology via Jira.</p>
                        </div>
                        <div>
                            <video className="workImages" controls>
                                <source src={require('../css/videos/tracevideo2.mp4')} type="video/mp4"/>
                            </video>
                            <p>Moving a visit between engineers</p>
                            <div className="textBlock">
                                <p>Trace is used extensively in the Uk by Homeserve, and expanded into Pennsylvania with Homeserve's acquisition of USP.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

export default Trace;