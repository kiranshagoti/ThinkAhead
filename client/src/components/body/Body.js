import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Body extends Component {
  state = {
    user: this.props.user,
    funeral: null
  };

  render() {
    this.state.user && console.log("USER FROM BODY COMP.", this.state.user);
    this.state.funeral &&
      console.log("FUNERAL FROM BODY COMP.", this.state.funeral);
    return (
      <div>
        <Link to="/body/handlebody">
          <div>Handle Body</div>
        </Link>

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
