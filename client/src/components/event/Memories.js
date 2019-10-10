import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

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
          <div key={x.image + x.memories}>
            <p>{x.image}</p>
            <p>{x.memories}</p>
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
          <input type="text" name="image" placeholder="IMAGE TO FIX" />

          <label>Memories</label>
          <input type="text" name="memories" placeholder="Write memories" />
          <button type="submit">Add Memory</button>
        </form>
      </>
    );
  }
}
