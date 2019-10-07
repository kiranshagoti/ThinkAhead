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
import Body from "./components/Body";
import HandleBody from "./components/HandleBody";
import Location from "./components/Location";
import Messages from "./components/Messages";
import Quotes from "./components/Quotes";
import Letters from "./components/Letters";
import Documents from "./components/Documents";
import Event from "./components/Event";
import Vibe from "./components/Vibe";
import AddMemorie from "./components/AddMemorie";
import AddSong from "./components/AddSong";
//import Eventlocation from "./components/Eventlocation";

const NotFound = () => {
  return <div>Page not found</div>;
};

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    console.log("DATA FROM SetUser()", user);
    this.setState({
      user: user
    });
  };

  render() {
    console.log("USER FROM APPjs", this.state);
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
          <Route
            exact
            path="/"
            component={() => <Home user={this.state.user} />}
          />
          <Route exact path="/legal" component={Legal} />
          <Route exact path="/about" component={About} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/explore" component={Explore} />
          <Route
            exact
            path="/share-funeral-plans"
            component={ShareFuneralPlan}
          />
          <Route
            exact
            path="/share-funeral-plans/add-contact"
            component={AddContact}
          />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          {/* <Articles /> */}
          <Route
            path="/body"
            component={() => <Body user={this.state.user} />}
          />
          <Route exact path="/location" component={Location} />
          <Route exact path="/handlebody" component={HandleBody} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/letters" component={Letters} />
          <Route exact path="/quotes" component={Quotes} />
          <Route exact path="/documents" component={Documents} />
          <Route exact path="/addMemorie" component={AddMemorie} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/vibe" component={Vibe} />
          <Route exact path="/AddSong" component={AddSong} />
          {/* <Route exact path="/eventlocation" component={Eventlocation} />   */}
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
