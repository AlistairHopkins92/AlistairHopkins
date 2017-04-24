import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Match, Miss } from 'react-router';
import Main from "./components/Main"
import Stack from "./components/Stack"
import Work from "./components/Work"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
const grainy = require('grainy');
import './css/style.css';


const Root = () => {
    // console.log(document.querySelector('body'))
    document.querySelector('body').grainy({
        intensity: 1,
        size: 625,
        color: '#ffffff',
        backgroundColor: '#2f5d8b',
        opacity: 0.24,
        monochrome: true
    })

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Match exactly pattern="/" component={Main}></Match>
                    <Match exactly pattern="/work" component={Work}></Match>
                    <Match exactly pattern="/stack" component={Stack}></Match>
                </div>
            </BrowserRouter>
        </div>
    )

}

render(<Root/>, document.querySelector('#main')); 