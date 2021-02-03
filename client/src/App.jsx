import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import HomeComponent from "./components/Home/Home";
import AboutComponent from "./components/About/About";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/about" component={AboutComponent} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
