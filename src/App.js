import React from 'react';
import DateCountdown from "./components/DateCountdown";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Square from "./components/Square";
import Caesar from "./components/Caesar";
import Song from "./components/Song";
import Home from "./components/Home";
import Crespo from "./components/Crespo";

class App extends React.Component {
  render() {
    return <div className="App">
      <Router>
        <Switch>
          <Route
            path="/dateCountdown"
            component={DateCountdown}>
          </Route>
          <Route
            path="/caesar"
            component={Caesar}>
          </Route>
          <Route
            path="/song"
            component={Song}>
          </Route>
          <Route
            path="/square"
            component={Square}>
          </Route>
          <Route
            path="/crespo"
            component={Crespo}>
          </Route>
          <Route
            path="/"
            component={Home}>
          </Route>
        </Switch>
      </Router>
    </div>
  }
}

export default App;
