import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    number: "",
    message: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, email, number, message } = this.state;

    //   axios
    //     .post("/api/tasks", {
    //       name,
    //       email,
    //       number,
    //       message,
    //       ContactId: this.props.ContactId
    //     })
    //     .then(() => {
    //       this.props.getData();
    //       this.props.hideForm();
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // };

  }
    render() {
      return (
        <div>
          <h2>Add Contact </h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Number:</Form.Label>
              <Form.Control
                type="number"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button type="submit">Save</Button>
          </Form>
        </div>
      )
    }
  }
