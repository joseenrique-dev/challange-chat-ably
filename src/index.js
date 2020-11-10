import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";
import SignupComponent from "./components/signup/signup";
import DashboardComponent from "./components/dashboard/dashboard";

const routing = (
  <Router>
    <div id="routing-container" >
      <Route path="/user" component={DashboardComponent}></Route>
      <Route path="/admin" component={DashboardComponent}></Route>
      <Route exact path="/signup" component={SignupComponent}></Route>
      <Route exact path='/' component={() => <Redirect to='/signup' />} />
      
    </div>
  </Router>
)

ReactDOM.render( routing , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
