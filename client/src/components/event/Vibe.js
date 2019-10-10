import React, { Component } from "react";
import axios from "axios";
import { Form, Label, Button } from "react-bootstrap";

export default class Vibe extends Component {
  state = {
    user: this.props.user,
    food: "",
    dressCode: "",
    kindOfVibe: "",
    flowers: ""
  };

  // COMPONEN DID MOUNT ---> GET FUNERAL
  componentDidMount = () => {
    axios
      .get(`/funeral/${this.state.user.funeral}`)
      .then(response => {
        const { food, dressCode, kindOfVibe, flowers } = response.data;

        this.setState(
          {
            food,
            dressCode,
            kindOfVibe,
            flowers
          },
          () => console.log("FUNERAL IN VIBE STATE:", this.state)
        );
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        const { food, dressCode, kindOfVibe, flowers } = this.state;

        axios
          .post(`/funeral/updatefuneral/${this.state.user.funeral}`, {
            food,
            dressCode,
            kindOfVibe,
            flowers
          })
          .then(response => {
            console.log("NEW DATA:", response.data);
          })
          .catch(err => console.log(err));
      }
    );
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Vibe</Form.Label>
            <Form.Control
              type="text"
              name="kindOfVibe"
              value={this.state.kindOfVibe}
              onChange={this.handleChange}
              placeholder="kind of vibe"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Food</Form.Label>
            <Form.Control
              type="text"
              name="food"
              value={this.state.food}
              onChange={this.handleChange}
              placeholder="Make sure your guests gets to eat your favourite foods"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dresscode</Form.Label>
            <Form.Control
              type="text"
              name="dressCode"
              value={this.state.dressCode}
              onChange={this.handleChange}
              placeholder="Spark up the goodbye party with a theme"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Flowers</Form.Label>
            <Form.Control
              type="text"
              name="flowers"
              value={this.state.flowers}
              onChange={this.handleChange}
              placeholder="Let your planer know what flowers you love the most"
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
