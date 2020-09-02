import React from 'react';
import DateCountdown from "./components/DateCountdown";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Square from "./components/Square";
import Caesar from "./components/Caesar";
import Song from "./components/Song";

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
            path="/"
            component={Square}>
          </Route>
        </Switch>
      </Router>
    </div>
  }
}

export default App;
