import React, { Component } from "react";
import axios from "axios";
import { Form, Label, Button } from "react-bootstrap";

export default class Vibe extends Component {
  state = {
    sadMood: false,
    happyMood: true,
    food: "",
    dresscode: "",
    flowers: ""
  };

  getData = () => {
    const id = this.props.match.params.id;
    axios
      .get("/event/vibe")
      .then(response => {
        if (response.data) {
          this.setState({
            sadMood: response.data.sadMood,
            happyMood: response.data.happyMood,
            food: response.data.food,
            dresscode: response.data.dresscode,
            flowers: response.data.flowers
          });
        }
      })
      .catch(err => {
        console.log(err.response);
        // handle err.response depending on err.response.status
        if (err.response.status === 404) {
          this.setState({ error: "Not found" });
        }
      });
  };

  componentDidMount = () => {
    this.getData();
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("/", {
        sadMood: this.state.sadMood,
        happyMood: this.state.happyMood,
        food: this.state.food,
        dresscode: this.state.dresscode,
        flowers: this.state.flowers
      })
      .then(() => {
        this.setState({
          sadMood: "",
          happyMood: "",
          food: "",
          dresscode: "",
          flowers: ""
        });
        this.state.getData();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
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
              name="dresscode"
              value={this.state.dresscode}
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

          <Button type="submit">Update funeral</Button>
        </Form>
      </div>
    );
  }
}
