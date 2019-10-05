import React, { Component } from "react";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <div className="event-container">
      {/* <Event getData={this.getData} /> */}
      <div>
        {" "}
        Would you like to ask people to speak?
        <Link to="/event/Performance">
          <button> type="button">Arrow-btn</button>
        </Link>
      </div>

      <Link to="/vibe">
        <button type="button">VIBE</button>
      </Link>
      <Link to="/event/Where">
        <button type="button">WHERE</button>
      </Link>
      <Link to="/event/music/Playlist">
        <button type="button">PLAYLIST</button>
      </Link>
      <Link to="/event/memories/">
        <button type="button">MEMORIES</button>
      </Link>
    </div>
  );
};

export default Event;

//racf - function component
//rcc - class component
