import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Component from './Component'
import Home from './pages/home';

function App() {
  return (
    <div className="App">
    <Component></Component>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* Add more routes here as needed */}
                </Switch>
            </div>
        </Router>


    </div>
  );
}

export default App;
