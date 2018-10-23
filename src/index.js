import MainPage from "./js/components/mainContainers/MainPage.jsx";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import { Provider } from 'react-redux';
import store from './store.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PropTypes from 'prop-types'



const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Route path='/' component={MainPage}/>
        </Router>
    </Provider>

)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

const wrapper = document.getElementById("create-article-form");
ReactDOM.render(<Root store ={store}/>, wrapper);



