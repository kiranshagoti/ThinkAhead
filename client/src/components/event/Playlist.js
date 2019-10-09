import React, { Component } from "react";
import axios from "axios";
import Event from "./Event";
import { Link, Route, Switch } from "react-router-dom";
import { Form, Label, Button } from "react-bootstrap";

export default class Playlist extends Component {
  state = {
    user: this.props.user,
    song: "",
    artist: "",
    playlist: []
  };

  // COMPONEN DID MOUNT ---> GET FUNERAL
  componentDidMount = () => {
    axios
      .get(`/funeral/${this.state.user.funeral}`)
      .then(response => {
        const { playlist } = response.data;

        this.setState(
          {
            playlist
          },
          () => console.log("FUNERAL IN HANDLEBODY STATE:", this.state)
        );
      })
      .catch(err => console.log(err));
  };

  // UPDATE FUNERAL ---> POST IN FUNERAL/UPDATEFUNERAL/:ID
  handleSubmit = event => {
    event.preventDefault();

    const { playlist } = this.state;

    axios
      .post(`/funeral/updatefuneral/${this.state.user.funeral}`, { playlist })
      .then(response => {
        console.log("NEW DATA:", response.data);
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleAddSong = e => {
    e.preventDefault();

    const song = e.target.song.value;
    const artist = e.target.artist.value;

    this.setState(
      {
        song: "",
        artist: "",
        playlist: this.state.playlist.concat({ song: song, artist: artist })
      },
      () => console.log("CHANGES IN STATE:", this.state)
    );
  };

  render() {
    const userPlaylist =
      this.state.playlist.length &&
      this.state.playlist.map(x => {
        return (
          <div key={x.artist + x.song}>
            <div>
              <b>{x.artist} </b>
              {x.song}
            </div>
          </div>
        );
      });

    return (
      <>
        <div className="usersPlaylist">
          <h4>Your playlist</h4>
          {userPlaylist}
        </div>

        <form onSubmit={this.handleAddSong}>
          <label>Song</label>
          <input
            type="text"
            name="song"
            placeholder="Add song"
            onChange={this.handleChange}
            value={this.state.song}
          />

          <label>Artist</label>
          <input
            type="text"
            name="artist"
            placeholder="Add artist"
            onChange={this.handleChange}
            value={this.state.artist}
          />
          <button type="submit">
            Add Song
          </button>
        </form>
        <div>
          <Switch>
            <Route
              exact
              path="/event"
              render={() => (
                <Event
                  user={this.state.user}
                  funeralId={this.state.user.funeral}
                />
              )}
            ></Route>
          </Switch>

          <Link to="/event">
            <Button
              type="button"
              onClick={this.handleSubmit}
              onClick={this.routeChange}
            >
              Arrowbtn-updatesfuneral and takes us back to Event
            </Button>
          </Link>
        </div>
      </>
    );
  }
}
