import React from 'react';
import './App.css';
import Articles from './components/Articles';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Team from "./components/Team";
import { Route, Switch } from "react-router-dom";



const NotFound = () => {
  return <div>Page not found</div>;
};


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Articles />
        <Route component={NotFound} />
        </Switch>
    </div>
  );
}

export default App;
