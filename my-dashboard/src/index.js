import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Team from './Team';
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
 //ReactDOM.render(<Team />, document.getElementById('page-wrap'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
 