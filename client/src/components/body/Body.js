import React, { Component } from "react";
import App from "../../App";
import Navbar from "../HOME/Navbar";
import { Link, Route } from "react-router-dom";
import HandleBody from "./HandleBody";
import Location from "./Location";
import axios from 'axios'

export default class Body extends Component {
  state ={
    user:this.props.user,
    funeral:null
  }
  
  render() {
    this.state.user && console.log("USER FROM BODY COMP.", this.state.user);
    this.state.funeral && console.log("FUNERAL FROM BODY COMP.", this.state.funeral);
    return (
      <div>
        
        <Route exact path="/body/handlebody" render={() => <HandleBody user={this.state.user} funeralId={this.state.user.funeral}/>}></Route>
        <Link to="/body/handlebody">       
          <div>Handle Body</div>        
        </Link>
        
        {/* <Route exact path="/body/location" component={Location}></Route> */}
        <Route exact path="/body/location" render={() => <Location user={this.state.user} funeralId={this.state.user.funeral}/>}></Route>
        <Link to="/body/location">
          <div>Location</div>
        </Link>
      
        <div>
          <h2>Plan More...</h2>
          <button>Religion icon</button>
          <button>Coffin icon </button>
          <button>Science icon</button>
        </div>

      </div>
    );
  }
}
