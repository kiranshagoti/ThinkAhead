<<<<<<< HEAD:client/src/components/messages/Letters.js
import React, { Component } from "./node_modules/react";
import { Link, Route } from "./node_modules/react-router-dom";
import { Form, Label, Button } from "./node_modules/react-bootstrap";
=======
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { Form, Label, Button } from "react-bootstrap";
import axios from "axios";
>>>>>>> 0ae966ce9e3667a1e901190d744d8eea080668ce:client/src/components/Letters.js

export class Letters extends Component {
  state = {
    letters: "",
    letterTo: ""
  };

  componentDidMount = () => {
    console.log(this.props);
  };

  updateFuneral = toUpdate => {
    axios
      .post(`/updateFuneral/${this.props.user.funeral}`, toUpdate)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { letters, letterTo } = this.state;

    this.updateFuneral({ letters: letters, letterTo: letterTo });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label> Write a letter </Form.Label>
          <Form.Control
            type="text"
            name="letters"
            value={this.state.letters}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label> To: </Form.Label>

          <Form.Control
            type="text"
            name="letterTo"
            value={this.state.letterTo}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button type="submit">Add memory</Button>
      </Form>
    );
  }
}

export default Letters;
