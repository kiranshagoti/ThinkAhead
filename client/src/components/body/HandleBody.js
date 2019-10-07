import React, { Component } from "react";
import axios from "axios";
import { Form, Label } from "react-bootstrap";

class HandleBody extends React.Component {
  state = {
    burried: false,
    cremated: false,
    tree: false,
    donate: false,
    other: "",
    clothes: "",
    items: ""
  };
  getData = () => {
    const id = this.props.match.params.id;
    axios
      .get(`/funeral/${id}`)
      .then(response => {
        if (response.data) {
          this.setState({
            burried: response.data.burried,
            cremated: response.data.cremated,
            tree: response.data.tree,
            donate: response.data.donate,
            other: response.data.other,
            clothes: response.data.clothes,
            items: response.data.items
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
    //         burried: response.data.burried,
    //         cremated: response.data.cremated,
    //         tree: response.data.tree,
    //         donate: response.data.donate,
    //         other: response.data.other,
    //         clothes: response.data.clothes,
    //         items: response.data.items
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
            <Form.Label>burial</Form.Label>
            <Form.Control
              type="checkbox"
              name="burried"
              value={this.state.burried}
              onChange={this.handleSubmit}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>cremation</Form.Label>
            <Form.Control
              type="checkbox"
              name="cremated"
              value={this.state.cremated}
              onChange={this.handleSubmit}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>become a tree</Form.Label>
            <Form.Control
              type="checkbox"
              name="tree"
              value={this.state.tree}
              onChange={this.handleSubmit}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>donate</Form.Label>
            <Form.Control
              type="checkbox"
              name="donate"
              value={this.state.donate}
              onChange={this.handleSubmit}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Other...</Form.Label>
            <Form.Control
              type="text"
              name="other"
              value={this.state.other}
              onChange={this.handleSubmit}
              placeholder="other..."
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Clothes</Form.Label>
            <Form.Control
              type="text"
              name="clothes"
              value={this.state.clothes}
              onChange={this.handleSubmit}
              placeholder="what do you want to wear?"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Items</Form.Label>
            <Form.Control
              type="text"
              name="items"
              value={this.state.items}
              onChange={this.handleSubmit}
              placeholder="what treasures do you want to bring?"
            />
          </Form.Group>
          <input type="submit" value="Submit" />{" "}
        </Form>
      </div>
    );
  }
}

export default HandleBody;
