import React, { Component } from "react";
import axios from "axios";

class Location extends Component {
  state = {
    user: this.props.user,
    finalRestAddress: ""
  };

  // GET FUNERAL
  componentDidMount = () => {
    axios
      .get(`/funeral/${this.state.user.funeral}`)
      .then(response => {
        const { finalRestAddress } = response.data;

        this.setState(
          {
            finalRestAddress
          },
          () => console.log("FUNERAL IN LOCATION STATE:", this.state)
        );
      })
      .catch(err => console.log(err));
  };

  // UPDATE STATE
  handleChange = e => {
    const { name, value } = e.target;

    this.setState(
      {
        [name]: value
      },
      () => {
        const { finalRestAddress } = this.state;

        axios
          .post(`/funeral/updatefuneral/${this.state.user.funeral}`, {
            finalRestAddress
          })
          .then(response => {
            console.log("NEW DATA:", response.data);
          })
          .catch(err => console.log(err));
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h3>Final Rest</h3>
          </label>
          <input
            type="text"
            name="finalRestAddress"
            value={this.state.finalRestAddress}
            placeholder="Where"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Location;
