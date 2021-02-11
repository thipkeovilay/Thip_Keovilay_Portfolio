import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomeComponent from "./components/Home/Home";
import AboutComponent from "./components/About/About";
import ContactComponent from "./components/Contact/Contact";
import FormPage from "./pages/Form";
import ProjectsComponent from "./components/Projects/Projects";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/about" component={AboutComponent} />
          <Route exact path="/contact" component={ContactComponent} />
          <Route exact path="/form" component={FormPage} />
          <Route exact path="/projects" component={ProjectsComponent} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
