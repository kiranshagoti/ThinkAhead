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
import Body from "./components/body/Body";
import HandleBody from "./components/body/HandleBody";
import Location from "./components/body/Location";
import Messages from "./components/Messages";
import Quotes from "./components/Quotes";
import Letters from "./components/Letters";
import Documents from "./components/Documents";
import Event from "./components/event/Event";
import Vibe from "./components/Vibe";
import FormUserComponent from './components/FormUserComponent';
import Settings from "./components/Settings";
import Playlist from "./components/event/Playlist";
import AddSong from "./components/event/AddSong";


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
          {/*  */}
          <Route exact path="/welcome" component={FormUserComponent} />
          {/*  */}

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
            render={props => <Home user={this.state.user} {...props} />}
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
          <Route path="/settings" component={Settings} />
          {/* <Articles /> */}
          <Route
            path="/body"
            render={props => <Body user={this.state.user} {...props} />}
          />
          <Route exact path="/body/location" component={Location}></Route>
          <Route exact path="/body/handlebody" component={HandleBody}></Route>
          <Route
            exact
            path="/messages"
            render={props => <Messages user={this.state.user} {...props} />}
          ></Route>
          <Route exact path="/messages/letters" render={props => <Letters user={this.state.user} {...props} />}></Route>
          <Route exact path="/messages/quotes" component={Quotes}></Route>
          <Route exact path="/messages/documents" component={Documents}></Route>
          <Route path="/funeral/event" component={Event} />
          <Route exact path="/vibe" component={Vibe} />
          <Route exact path="/event/playlist" component={Playlist}></Route>
          <Route exact path="/event/playlist/AddSong" component={AddSong}></Route>
          
          <Route exact path="/" render={props => <Home user={this.state.user} {...props}/>} />
          <Route exact path="/body" render={props => <Body user={this.state.user} {...props}/>} />

          <Route
            exact
            path="/"
            render={props => <Home user={this.state.user} {...props} />}
          />
          <Route
            exact
            path="/body"
            render={props => <Body user={this.state.user} {...props} />}
          />

          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />

          <Route component={NotFound} />
        </Switch>
        <BottomNavbar />
      </div>
    );
  }
}

export default App;
