import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Router exact path="/">
          <Home />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
