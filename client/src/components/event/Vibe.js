import React, { Component } from "react";
import axios from "axios";
import { Form, Label, Button } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import Event from "./Event";

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

  // UPDATE FUNERAL ---> POST IN FUNERAL/UPDATEFUNERAL/:ID
  handleSubmit = event => {
    event.preventDefault();

    const { food, dressCode, kindOfVibe, flowers } = this.state;

    axios
      .post(`/funeral/updatefuneral/${this.state.user.funeral}`, {
        food,
        dressCode,
        kindOfVibe,
        flowers
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

  // 
  render() {
    return (
      <div>
        <h1>Details</h1>
​
        <Form>
          <Form.Group>
            <Form.Label>Vibe</Form.Label>
            <Form.Control
              className="event-form"
              align="center"
              type="text"
              name="kindOfVibe"
              value={this.state.kindOfVibe}
              onChange={this.handleChange}
              placeholder="happy/sad"
            />
          </Form.Group>
​
          <Form.Group>
            <Form.Label>Food</Form.Label>
            <Form.Control
              className="event-form"
              align="center"
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
              className="event-form"
              align="center"
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
              className="event-form"
              align="center"
              type="text"
              name="flowers"
              value={this.state.flowers}
              onChange={this.handleChange}
              placeholder="Let your planer know what flowers you love the most"
            />
          </Form.Group>
        </Form>
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
          <Button type="button" onClick={this.handleSubmit}>
            Save Details
          </Button>
        </div>
      </div>
    );
  }
}
