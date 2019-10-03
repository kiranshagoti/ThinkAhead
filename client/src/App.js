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
}

export default App;
