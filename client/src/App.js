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
import Messages from "./components/messages/Messages";
import Quotes from "./components/messages/Quotes";
import Letters from "./components/messages/Letters";
import Documents from "./components/messages/Documents";
import Event from "./components/event/Event";
import Vibe from "./components/event/vibe/Vibe";
import FormUserComponent from './components/FormUserComponent'


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
    },() => console.log('USER IN STATE :', this.state.user));
  };

  render() {
    console.log(this.state)
    return (
      <div className="App">
      
        <Switch>

        {/*  */}
        <Route
            exact
            path="/welcome"
            component={FormUserComponent}
          />
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
          <Route exact path="/" render={(props)=><Home user={this.state.user} {...props}/>}/>
          <Route exact path="/legal" component={Legal} />
          <Route exact path="/about" component={About} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/share-funeral-plans" component={ShareFuneralPlan} />
          <Route exact path="/share-funeral-plans/add-contact" component={AddContact} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          {/* <Articles /> */}
          <Route path="/body" render={props => <Body user={this.state.user} {...props}/>} />
          <Route exact path="/body/location" component={Location}></Route>
          <Route exact path="/body/handlebody" component={HandleBody}></Route>
          <Route exact path="/messages" component={Messages}></Route>
          <Route exact path="/messages/letters" component={Letters}></Route>
          <Route exact path="/messages/quotes" component={Quotes}></Route>
          <Route exact path="/messages/documents" component={Documents}></Route>
          <Route path="/funeral/event" component={Event} />
          <Route exact path="/vibe" component={Vibe} />
          {/* <Route exact path="/funeral" component={SideBar} /> */}
          <Route exact path="/" render={props => <Home user={this.state.user} {...props}/>} />
          <Route exact path="/body" render={props => <Body user={this.state.user} {...props}/>} />


          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          {/* <Route exact path="/funeral" component={SideBar} /> */}
          <Route component={NotFound} />
        </Switch>
       
      </div>
    );
  }
}

export default App;
