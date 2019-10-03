<<<<<<< HEAD
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
=======
import React from "react";
// import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
// import Projects from "./components/Projects";
// import ProjectDetails from "./components/ProjectDetails";
// import TaskDetails from "./components/TaskDetails";
import Signup from "./components/Signup";
import Login from "./components/Login";
import SideBar from "./components/SideBar";

// import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (

      <div className="App">
      <h1>HOME</h1>
        {/* <Navbar user={this.state.user} setUser={this.setUser} />
        <Route exact path="/projects" component={Projects} /> */}

        {/* <Route
          exact
          path="/projects/:id"
          render={props => <ProjectDetails {...props} user={this.state.user} />}
        /> */}

        {/*  */}
        <Switch>
        <Route exact path="/signup" render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route exact path="/login" render={props => <Login setUser={this.setUser} {...props} />}
        />
        </Switch>
        <Route exact path="/funeral" component={SideBar} />
              </div>
    );
  }
>>>>>>> 667e8a4db02965e61de9caf75e655feb7d8a61df
}

export default App;
