import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './views/home.js';
import About from './views/about.js';
import Contact from './views/contact.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


ReactDOM.render( 
  <Router>
  
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark" >
        <NavLink className="navbar-brand" to = "/"> Navbar </NavLink>
        
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" 
        data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" 
        aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span> 
        </button>
        
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to = "/about"> About </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to = "/contact"> Contact </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Route exact path="/" component = {Home}/>
      <Route path = "/about" component = {About}/>
      <Route path = "/contact" component = {Contact}/>
    </div>
    
  </Router>,
  document.getElementById('root'));
registerServiceWorker();