import MainContainer from "./js/components/container/MainContainer.jsx";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import { Provider } from 'react-redux';
import store from './store.js';



const wrapper = document.getElementById("create-article-form");
ReactDOM.render(
<Provider store={store}>
    <MainContainer />
</Provider>
, wrapper);