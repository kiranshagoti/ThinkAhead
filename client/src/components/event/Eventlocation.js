import React, { Component } from "react";
import axios from "axios";
import { Form, Label, Button } from "react-bootstrap";

class Eventlocation extends Component {
  state = {
    user: this.props.user,
    eventLocation: "",
    eventAddress: "",
    invite: []
  };

  // COMPONEN DID MOUNT ---> GET FUNERAL
  componentDidMount = () => {
    axios
      .get(`/funeral/${this.state.user.funeral}`)
      .then(response => {
        const { eventLocation, eventAddress, invite } = response.data;

        this.setState(
          {
            eventLocation,
            eventAddress,
            invite
          },
          () => console.log("FUNERAL IN HANDLEBODY STATE:", this.state)
        );
      })
      .catch(err => console.log(err));
  };

  // UPDATE FUNERAL ---> POST IN FUNERAL/UPDATEFUNERAL/:ID
  handleSubmit = event => {
    event.preventDefault();

    const { eventLocation, eventAddress, invite } = this.state;

    axios
      .post(`/funeral/updatefuneral/${this.state.user.funeral}`, {
        eventLocation,
        eventAddress,
        invite
      })
      .then(response => {
        console.log("NEW DATA:", response.data);
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => console.log("CHANGES IN STATE:", this.state)
    );
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              name="eventLocation"
              value={this.state.eventLocation}
              onChange={this.handleChange}
              placeholder="Where do you want people to celebrate your life?"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="eventAddress"
              value={this.state.eventAddress}
              onChange={this.handleChange}
              placeholder="Adress"
            />
          </Form.Group>

          <Button type="submit">Update funeral</Button>
        </Form>
      </div>
    );
  }
}
export default Eventlocation;
