import Root from "./js/components/mainContainers/Root.jsx";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import store from './store.js';
import './styles.css'



const wrapper = document.getElementById("create-article-form");
ReactDOM.render(<Root store ={store}/>, wrapper);



