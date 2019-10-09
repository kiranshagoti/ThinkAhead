import React, { Component } from "react";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import { Form, Label, Button } from "react-bootstrap";

export class Quotes extends Component {
  state = {
    user: this.props.user,
    quote: "",
    quoteBy: "",
    quotes: []
  };
  componentDidMount = () => {
    axios
      .get(`/funeral/${this.state.user.funeral}`)
      .then(response => {
        const { quotes } = response.data;

        this.setState(
          {
            quotes
          },
          () => console.log("Quotes in funeral:", this.state)
        );
      })
      .catch(err => console.log(err));
  };

  handleSubmit = event => {
    event.preventDefault();

    const { quotes } = this.state;

    axios
      .post(`/funeral/updatefuneral/${this.state.user.funeral}`, { quotes })
      .then(response => {
        console.log("NEW DATA:", response.data);
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleAddQuote = e => {
    e.preventDefault();

    const quote = e.target.quote.value;
    const quoteBy = e.target.quoteBy.value;

    this.setState(
      {
        quote: "",
        quoteBy: "",
        quotes: this.state.quotes.concat({ quote: quote, quoteBy: quoteBy })
      },
      () => console.log("CHANGES IN STATE:", this.state)
    );
  };

  render() {
    const userQuote =
      this.state.quotes.length &&
      this.state.quotes.map(x => {
        return (
          <div key={x.quote + x.quoteBy}>
            <div>
              <p>{x.quote}</p>
              <b>{x.quoteBy}</b>
            </div>
          </div>
        );
      });
    return (
      <div>
        <Form onSubmit={this.handleAddQuote}>
          <Form.Control
            type="text"
            name="quote"
            placeholder="Add quote"
            onChange={this.handleChange}
            value={this.state.quote}
          />
          <Form.Control
            type="text"
            name="quoteBy"
            placeholder="Quote by"
            onChange={this.handleChange}
            value={this.state.quoteBy}
          />
          <Button type="submit">Add quote</Button>
        </Form>
        <Link to="/messages">
          <Button
            type="button"
            onClick={this.handleSubmit}
            onClick={this.routeChange}
          >
            Arrowbtn-updatesfuneral and takes us back to Event
          </Button>
        </Link>
        <div>
          <h4>Quotes</h4>
          {userQuote}
        </div>
      </div>
    );
  }
}

export default Quotes;
