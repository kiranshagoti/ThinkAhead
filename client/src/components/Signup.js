import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { signup } from "../services/api";
export default class Signup extends Component {
  state = {
    username: "",
    password: "",
    message: ""
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    signup(username, password).then(data => {
      console.log(data);
      if (data.message) {
        this.setState({
          message: data.message,
          username: "",
          password: ""
        });
      } else {
        // successfully signed up
        // update the state for the parent component
        console.log("DATA from SIGNUP", data);
        this.props.setUser(data);
        this.props.history.push("/welcome");
      }
    });
  };
  render() {
    console.log(this.message)
    return (
      <>
        <div className='welcome' id="signup">
        <h2>Signup</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="username">Username: </Form.Label><br/>
            <Form.Control
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              id="username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password: </Form.Label><br/>
            <Form.Control
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
            />
          </Form.Group>
          {this.state.message && (
            <Alert variant="danger">{this.state.message}</Alert>
          )}
          <Button className="signup-btn" type="submit">Signup</Button>
        </Form>
        </div>
      </>
    );
  }
}
