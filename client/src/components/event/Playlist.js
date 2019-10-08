import React, { Component } from "react";

export default class Playlist extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h6>Songs</h6>
            {this.props.musicTitle}
          </div>
        </div>
        <div>
          <div>
            <h6>Artist</h6>
            {this.props.musicArtist}
          </div>
        </div>
      </div>
    );
  }
}
