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
import Documents from "./components/messages/Documents"
import Event from "./components/event/Event";
import Vibe from "./components/event/Vibe";
import Memories from "./components/event/Memories";
import AddMemorie from "./components/event/AddMemorie";
import FormUserComponent from "./components/FormUserComponent";
// import Vibe from "./components/Vibe";
// import FormUserComponent from './components/FormUserComponent';
import Settings from "./components/HOME/Settings";
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
      <>
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
          <Route exact path="/profile" render={props => <Profile user={this.state.user} {...props}/>} />
          <Route exact path="/explore" component={Explore} />
          <Route
            exact
            path="/share-funeral-plans" render={props => <ShareFuneralPlan user={this.state.user} {...props}/>}
          />
          <Route
            exact
            path="/share-funeral-plans/add-contact"
            render={(props) => <AddContact user={this.state.user} {...props}/>}
          />
        
          <Route path="/settings" render={props => <Settings user={this.state.user} {...props}/>} />
          {/* <Articles /> */}
          <Route
            path="/body"
            render={props => <Body user={this.state.user} {...props} />}
          />
          <Route exact path="/body/location" component={Location}></Route>
          <Route exact path="/body/handlebody" component={HandleBody}></Route>

          {/* <Route exact path="/messages" component={Messages}></Route>
          <Route exact path="/messages/letters" component={Letters}></Route>
          <Route exact path="/messages/quotes" component={Quotes}></Route>
          <Route exact path="/messages/documents" component={Documents}></Route>  */}

          <Route
            path="/event"
            render={props => <Event user={this.state.user} {...props} />}
          />
           <Route exact path="/event/vibe" component={Vibe} /> 

         
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

        

          <Route component={NotFound} />
        </Switch>
      </div>
      <BottomNavbar />
      </>
    );
  }
}

export default App;
