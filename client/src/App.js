import React from "react";
import "./App.css";
import Articles from "./components/HOME/Articles";
import Home from "./components/HOME/Home";
import Navbar from "./components/HOME/Navbar";
import About from "./components/HOME/About";
import Team from "./components/HOME/Team";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import BottomNavbar from "./components/HOME/BottomNavbar";
// import MainPlan from "./components/MainPlan";
import Legal from "./components/HOME/Legal";
import Profile from "./components/HOME/Profile";
import Explore from "./components/HOME/Explore";
import ShareFuneralPlan from "./components/HOME/ShareFuneralPlan";
import AddContact from "./components/HOME/AddContact";
import Body from "./components/body/Body";
import HandleBody from "./components/body/HandleBody";
import Location from "./components/body/Location";
import Messages from "./components/messages/Messages";
import Quotes from "./components/messages/Quotes";
import Letters from "./components/messages/Letters";
import Documents from "./components/messages/Documents";
import Event from "./components/event/Event";
import Vibe from "./components/event/Vibe";
import Memories from "./components/event/Memories";
import AddMemorie from "./components/event/AddMemorie";
import FormUserComponent from "./components/FormUserComponent";
// import Vibe from "./components/Vibe";
// import FormUserComponent from './components/FormUserComponent';
import Settings from "./components/Settings";
import Playlist from "./components/event/Playlist";
import AddSong from "./components/event/AddSong";
import Protected from "./components/Protected";
import Eventlocation from './components/event/Eventlocation';

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
    const funeralId = this.state.user && this.state.user.funeral;

    return (
      <div className="App">
        <Navbar setUser={this.setUser} />
        <Switch>
          <Route exact path="/welcome" component={FormUserComponent} />

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

          <Protected exact path="/" user={this.state.user} component={Home} />

          <Route exact path="/legal" component={Legal} />
          <Route exact path="/about" component={About} />
          <Route exact path="/team" component={Team} />

          <Protected
            exact
            path="/profile"
            user={this.state.user}
            component={Profile}
          />
          <Route exact path="/explore" component={Explore} />
          <Protected
            exact
            path="/share-funeral-plans"
            user={this.state.user}
            component={ShareFuneralPlan}
          />
          <Protected
            exact
            path="/share-funeral-plans/add-contact"
            user={this.state.user}
            component={AddContact}
          />
          <Protected
            path="/settings"
            user={this.state.user}
            component={Settings}
          />
          {/* <Articles /> */}
          <Protected
            exact
            path="/body"
            user={this.state.user}
            component={Body}
          />
          <Protected
            exact
            path="/body/handlebody"
            user={this.state.user}
            component={HandleBody}
          />
          <Protected
            exact
            path="/body/location"
            user={this.state.user}
            component={Location}
          />

          {/* <Protected exact path="/messages"  user={this.state.user} component={Messages}/>
          <Protected exact path="/messages/letters" user={this.state.user} component={Letters}/> */}
          {/* <Protected exact path="/messages/quotes" user={this.state.user} component={Quotes}/>
          <Protected exact path="/messages/documents" user={this.state.user} component={Documents}/> */}

          <Protected
            exact
            path="/event"
            user={this.state.user}
            component={Event}
          />
          <Protected
            exact
            path="/event/vibe"
            user={this.state.user}
            component={Vibe}
          />
          <Protected
            exact
            path="/event/eventlocation"
            user={this.state.user}
            component={Eventlocation}
          />

<Protected
            exact
            path="/event/memories"
            user={this.state.user}
            component={Memories}
          />

          <Protected
            exact
            path="/messages"
            user={this.state.user}
            component={Messages}
          />
          <Protected
            exact
            path="/messages/letters"
            user={this.state.user}
            component={Letters}
          />
          <Protected
            exact
            path="/messages/quotes"
            user={this.state.user}
            component={Quotes}
          />
          <Protected
            exact
            path="/messages/documents"
            user={this.state.user}
            component={Documents}
          />
          <Protected
            exact
            path="/funeral/event"
            user={this.state.user}
            component={Event}
          />
          <Protected
            exact
            path="/event/playlist"
            user={this.state.user}
            component={Playlist}
          />
          <Protected
            exact
            path="/event/playlist/AddSong"
            user={this.state.user}
            component={AddSong}
          />

          <Route component={NotFound} />
        </Switch>
        <BottomNavbar />
      </div>
    );
  }
}

export default App;
