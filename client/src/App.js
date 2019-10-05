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
import SideBar from "./components/SideBar";
import Body from "./components/body/Body";
import HandleBody from "./components/body/HandleBody";
import Location from "./components/body/Location";
import Messages from "./components/messages/Messages";
import Quotes from "./components/messages/Quotes";
import Letters from "./components/messages/Letters";
import Documents from "./components/messages/Documents";

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
        <Navbar />
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
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          {/* <Articles /> */}
          <Route path="/body" component={Body} />
          <Route exact path="/body/location" component={Location}></Route>
          <Route exact path="/body/handlebody" component={HandleBody}></Route>
          <Route exact path="/messages" component={Messages}></Route>
          <Route exact path="/messages/letters" component={Letters}></Route>
          <Route exact path="/messages/quotes" component={Quotes}></Route>
          <Route exact path="/messages/documents" component={Documents}></Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
