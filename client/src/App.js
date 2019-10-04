import React from "react";
import "./App.css";
import Articles from "./components/Articles";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Team from "./components/Team";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import BottomNavbar from "./components/BottomNavbar";
import MainPlan from "./components/MainPlan";
import Legal from "./components/Legal";
import Profile from "./components/Profile";
import Explore from "./components/Explore";
import ShareFuneralPlan from "./components/ShareFuneralPlan";
import AddContact from "./components/AddContact";

const NotFound = () => {
  return <div>Page not found</div>;
};

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
      
        <Switch>
          <Route
            exact
            path="/signup"
            render={props => <Signup setUser={this.setUser} {...props} />}
          />
          <Route
            exact
            path="/login"
            render={props => <Login setUser={this.setUser} {...props} />}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/legal" component={Legal} />
          <Route exact path="/about" component={About} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/share-funeral-plans" component={ShareFuneralPlan} />
          <Route exact path="/share-funeral-plans/add-contact" component={AddContact} />
          <Route component={NotFound} />
        </Switch>
       
      </div>
    );
  }
}

export default App;
