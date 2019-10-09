import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import Vibe from "./Vibe";
import Eventlocation from "./Eventlocation";
import Playlist from "./Playlist";
import Memories from "./Memories";

export default class Event extends Component {
  state = {
    user: this.props.user,
    funeral: null
  };

  render() {
    return (
      <div className="event-container">
        <div>
          Would you like to ask people to speak?
          <Link to="/performance">
            <button type="button">Arrow-btn</button>
          </Link>
        </div>
        <Switch>
          <Route
            exact
            path="/event/vibe"
            render={() => (
              <Vibe
                user={this.state.user}
                funeralId={this.state.user.funeral}
              />
            )}
          ></Route>
          <Route
            exact
            path="/event/eventlocation"
            render={() => (
              <Eventlocation
                user={this.state.user}
                funeralId={this.state.user.funeral}
              />
            )}
          ></Route>
          <Route
            exact
            path="/event/playlist"
            render={() => (
              <Playlist
                user={this.state.user}
                funeralId={this.state.user.funeral}
              />
            )}
          ></Route>
          <Route
            exact
            path="/event/memories"
            render={() => (
              <Memories
                user={this.state.user}
                funeralId={this.state.user.funeral}
              />
            )}
          ></Route>
        </Switch>

        <Link to="/event/vibe">
          <button type="button">VIBE</button>
        </Link>

        <Link to="/event/eventlocation">
          <button type="button">EVENT LOCATION</button>
        </Link>

        <Link to="/event/playlist">
          <button type="button">PLAYLIST</button>
        </Link>

        <Link to="/event/memories/">
          <button type="button">MEMORIES</button>
        </Link>
      </div>
    );
  }
}
