import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Memories extends Component {
  render() {
    return (
      <div>
        <div>
          <h6>Memories</h6>
        </div>
        <div>{this.props.imgName}</div>
        <div>{this.props.memorieStory}</div>
        <Link to="/addMemorie">Add memories</Link>
      </div>
    );
  }
}
