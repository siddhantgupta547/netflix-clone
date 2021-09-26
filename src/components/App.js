import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./home";
import Navbar from "./navbar";
import Login from "./login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
