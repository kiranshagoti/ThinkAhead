import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import Event from "./Event";

export default class Memories extends Component {
  state = {
    user: this.props.user,
    memories: []
  };

  // COMPONEN DID MOUNT ---> GET FUNERAL
  componentDidMount = () => {
    axios
      .get(`/funeral/${this.state.user.funeral}`)
      .then(response => {
        const { memories } = response.data;

        this.setState(
          {
            memories
          },
          () => console.log("FUNERAL IN HANDLEBODY STATE:", this.state)
        );
      })
      .catch(err => console.log(err));
  };

  // UPDATE FUNERAL ---> POST IN FUNERAL/UPDATEFUNERAL/:ID
  handleSubmit = event => {
    event.preventDefault();

    const { memories } = this.state;

    axios
      .post(`/funeral/updatefuneral/${this.state.user.funeral}`, { memories })
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

  handleAddMemories = e => {
    e.preventDefault();

    const image = e.target.image.value;
    const memorie = e.target.memorie.value;

    this.setState(
      {
        memorie: "",
        image: "",
        memories: this.state.memories.concat({
          memorie: memorie,
          image: image
        })
      },
      () => console.log("CHANGES IN STATE:", this.state)
    );
  };

  routeChange() {
    let path = `newPath`;
  }

  render() {
    const usermeMories =
      this.state.memories.length &&
      this.state.memories.map(x => {
        return (
          <div key={x.image + x.memorie}>
            <p>{x.image}</p>
            <p>{x.memorie}</p>
          </div>
        );
      });

    return (
      <>
        <form onSubmit={this.handleAddMemories}>
          <label>Image</label>
          <input type="text" name="image" placeholder="IMAGE TO FIX" />

          <label>Memories</label>
          <input
            type="text"
            name="memorie"
            placeholder="Remember this.."
            onChange={this.handleChange}
            value={this.state.memorie}
          />
          <button type="submit">Add Memory</button>

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
              <button
                type="button"
                onClick={this.handleSubmit}
                onClick={this.routeChange}
              >
                Arrowbtn-updatesfuneral and takes us back to Event
              </button>
            </Link>
          </div>
        </form>
        <div>
          <h4>Your memories</h4>
          {usermeMories}
        </div>
      </>
    );
  }
}
