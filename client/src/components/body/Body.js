import React, { Component } from "react";
import App from "../../App";
import Navbar from "../Navbar";
import { Link, Route } from "react-router-dom";
import HandleBody from "./HandleBody";
import Location from "./Location";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Route exact path="/body/handlebody" component={HandleBody}></Route>
        <Link to="/body/handlebody">
          <div>Handle Body</div>
        </Link>
        <Route exact path="/body/location" component={Location}></Route>
        <Link to="/body/location">
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
