import React, { Component } from "react";
import MainPlan from "./MainPlan";
import Articles from "./Articles";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {
    user: this.props.user
  };

  render() {
    return (
      <>
        <div className="welcomeMessage">
          <h2>Welcome {this.state.user.username}</h2>
          <p>
            "Plan for the difficult while it is easy, do what is great while it is small."
          </p>
        </div>
        <MainPlan />
        <Articles />
      </>
    );
  }
}
