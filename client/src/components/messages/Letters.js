import React, { Component } from "./node_modules/react";
import { Link, Route } from "./node_modules/react-router-dom";
import { Form, Label, Button } from "./node_modules/react-bootstrap";

export class Letters extends Component {
  render() {
    return (
      <div>
        <Form.Group>
          <Form.Label> Write a letter </Form.Label>
          <Form.Control
            type="text"
            name="letter"
            value={this.state.letters}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="letter"
            value={this.state.lettersTo}
            onChange={this.handleChange}
          />

          <Button type="submit">Add memorie</Button>
        </Form.Group>
      </div>
    );
  }
}

export default Letters;
