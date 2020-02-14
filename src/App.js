import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Maps from "./components/maps/maps/maps.js";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/maps">Maps</Link>
              </li>
              <li>
                <Link to="/schedule">Schedule</Link>
              </li>
            </ul>
          </nav>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Switch>
        <Route path="/maps">
          <Maps />
        </Route>
        <Route path="/schedule">
          <schedule />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function schedule() {
  return <h2>schedule</h2>;
}
