import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Event extends Component {
  render() {
    return (
      <div className="event-container">
        {/* <Event getData={this.getData} />  */}
        <div>
          {" "}
          Would you like to ask people to speak?
          <Link to="/performance">
            <button> type="button">Arrow-btn</button>
          </Link>
        </div>

        <Link to="/vibe">
          <button type="button">VIBE</button>
        </Link>
        <Link to="/where">
          <button type="button">WHERE</button>
        </Link>
        <Link to="/playlist">
          <button type="button">PLAYLIST</button>
        </Link>
        <Link to="/memories/">
          <button type="button">MEMORIES</button>
        </Link>
      </div>
    );
  }
}
//racf - function component
//rcc - class component
