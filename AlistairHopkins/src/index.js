import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Match, Miss } from 'react-router';
import Main from "./components/Main"
import Stack from "./components/Stack"
import Work from "./components/Work"
import Contact from "./components/Contact"
import General from "./components/General"
import NotFound from "./components/NotFound"
const grainy = require('grainy');
import './css/style.css';

const repo = `/${window.location.pathname.split('/')[1]}`;

const Root = () => {
    document.querySelector('body').grainy({
        intensity: 1,
        size: 625,
        color: '#ffffff',
        backgroundColor: '#3b6691',
        opacity: 0.21,
        monochrome: true
    })

    return (
        <div>
            <BrowserRouter baseName={repo}>
                <div>
                    <Match exactly pattern="/" component={Main}></Match>
                    <Match exactly pattern="/other" component={General}></Match>
                    <Match exactly pattern="/work/trace" component={Work}></Match>
                    <Match exactly pattern="/work/ga" component={Work}></Match>
                    <Match exactly pattern="/stack" component={Stack}></Match>
                    <Match exactly pattern="/contact" component={Contact}></Match>
                    <Miss component={NotFound}></Miss>
                </div>
            </BrowserRouter>
        </div>
    )

}

render(<Root/>, document.querySelector('#main')); 