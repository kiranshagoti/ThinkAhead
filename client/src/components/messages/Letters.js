import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { Form, Label, Button } from "react-bootstrap";
import axios from "axios";

export class Letters extends Component {
  state = {
    letters: "",
    letterTo: "",
    user:this.props.user,
    letters:[]
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

  

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    },() => {
      const { letters, letterTo } = this.state;

    this.updateFuneral({ letters: letters, letterTo: letterTo });
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
