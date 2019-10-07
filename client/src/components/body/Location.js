import React, { Component } from "react";
import axios from "axios";
import { Form, Label } from "react-bootstrap";

class Location extends React.Component {
  state = {
    finalRestAdress: ""
  };
  getData = () => {
    const id = this.props.match.params.id;
    axios
      .get(`/funeral/${id}`)
      .then(response => {
        if (response.data) {
          this.setState({
            finalRestAdress: response.data.finalRestAdress
          });
        }
      })
      .catch(err => {
        console.log(err.response);
        if (err.response.status === 404) {
          this.setState({ error: "Not found" });
        }
      });
  };

  componentDidMount = () => {
    this.getData();
  };

  handleSubmit = event => {
    event.preventDefault();

    // const id = this.props.match.params.id;
    // axios
    //   .post(`/funeral/${id}`)
    //   .then(response => {
    //     if (response.data) {
    //       this.setState({
      // finalRestAdress: response.data.finalRestAdress
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err.response);
    //     if (err.response.status === 404) {
    //       this.setState({ error: "Not found" });
    //     }
    //   });

    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
        
          <Form.Group>
            <Form.Label>Final Rest</Form.Label>
            <Form.Control
              type="text"
              name="items"
              value={this.state.items}
              onChange={this.handleSubmit}
              placeholder="final rest location"
            />
          </Form.Group>
          <input type="submit" value="Submit" />{" "}
        </Form>
      </div>
    );
  }
}

export default Location;
