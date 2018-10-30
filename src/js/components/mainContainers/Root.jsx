import React from "react";
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PropTypes from 'prop-types'
import MainPage from './MainPage.jsx'


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

export default Root
