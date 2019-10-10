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
    axios.get(`/funeral/${this.state.user.funeral}`).then(response => {
      const { memories } = response.data;

      this.setState(
        {
          memories
        },
        () => {
          axios
            .post(`/funeral/updatefuneral/${this.state.user.funeral}`, {
              memories
            })
            .then(response => {
              console.log("NEW DATA:", response.data);
            })
            .catch(err => console.log(err));
        }
      );
    });
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
    const memories = e.target.memories.value;

    this.setState(
      {
        memories: this.state.memories.concat({
          memories: memories,
          image: image
        })
      },
      () => {
        const { memories } = this.state;

        axios
          .post(`/funeral/updatefuneral/${this.state.user.funeral}`, {
            memories
          })
          .then(response => {
            console.log("NEW DATA:", response.data);
          })
          .catch(err => console.log(err));
      }
    );
  };

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
        <div>
          <h4>Your memories</h4>
          {usermeMories}
        </div>

        <form onSubmit={this.handleAddMemories}>
          <label>Image</label>
          <input
            type="text"
            name="image"
            placeholder="IMAGE TO FIX"
            onChange={this.handleChange}
          />

          <label>Memories</label>
          <input
            type="text"
            name="memories"
            placeholder="Write memories"
            onChange={this.handleChange}
          />
          <button type="submit">Add Memory</button>
        </form>
      </>
    );
  }
}
