import React, { Component } from "react";
import App from "../App";
import Navbar from "./Navbar";
import { Link, Route } from "react-router-dom";

export default class Body extends Component {
  state = {
    user: this.props.user
  };
  render() {
    console.log("USER FROM BODY COMP.", this.state.user);
    return (
      <div>
        {/* <Route exact path="/body/handlebody" component={HandleBody}></Route> */}
        <Link to="/handlebody">
          <div>Handle Body</div>
        </Link>
        {/* <Route exact path="/body/location" component={Location}></Route> */}
        <Link to="/location">
          <div>Location</div>
        </Link>
        <div>
          <h2>Plan More...</h2>
          <button>coffin icon </button>
          <button>sience icon</button>
        </div>
      </div>
    );
  }
}
