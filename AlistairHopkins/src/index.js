import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Match, Miss } from 'react-router';
import Main from "./components/Main"
import Stack from "./components/Stack"
import Work from "./components/Work"

import Header from "./components/Header"

import './css/style.css';


const Root = () => {
    return (
        <div>
            <Header />
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