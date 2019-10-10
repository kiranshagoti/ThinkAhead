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

        <div>
          <div className="event-box">
            <Link to="/event/vibe">
              <img src="../../../vibe.png" alt="vibeicon" />
              <p>Vibe</p>
            </Link>
          </div>
          <div className="event-box">
            <Link to="/event/eventlocation">
              <img src="../../../location.png" alt="locationicon" />
              <p>Location</p>
            </Link>
          </div>
          <div className="event-box">
            <Link to="/event/playlist">
              <div>
                <img src="../../../music.png" alt="musicicon" />
                <p>My Playlist</p>
              </div>
            </Link>
          </div>
          <div className="event-box">
            <Link to="/event/memories/">
              <img src="../../../memories.png" alt="memoriesicon" />
              <p>My Memories</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
