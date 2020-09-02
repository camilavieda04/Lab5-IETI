import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from "./components/Login";
import Drawer from "./components/Drawer";
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';

function App() {
 return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Login">
            <Login/>
          </Route>
          <Route exact path="/Drawer">
            <Drawer />
          </Route>
        </Switch>
      </div>
    </Router>
 );
}

export default App;
