import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Form, Label, Button } from "react-bootstrap";
import axios from "axios";
import Messages from "./Messages";

export default class Letters extends Component {
  state = {
    letter: "",
    letterTo: "",
    user: this.props.user,
    letters: []
  };

  componentDidMount = () => {
    console.log(this.props);
    axios
      .get(`/funeral/${this.state.user.funeral}`)
      .then(response => {
        const { letters } = response.data;
        this.setState({
          letters: letters
        });
      })
      .catch(err => console.log(err));
  };

  handleAddLetters = event => {
    event.preventDefault();
    const { letter, letterTo } = this.state;
    const letters = { letter, letterTo };
    this.setState(
      {
        letter: "",
        letterTo: "",
        letters: this.state.letters.concat(letters)
      },
      () => {
        const { letters } = this.state;
        axios
          .post(`/funeral/updatefuneral/${this.state.user.funeral}`, {
            letters
          })
          .then(response => {
            console.log("NEW DATA:", response.data);
          })
          .catch(err => console.log(err));
      }
    );
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  

    
          

  render() {
    const userLetters =
      this.state.letters.length &&
      this.state.letters.map(x => {
        return (
      
          <div key={x.letter + x.letterTo}>
            <Link to="/messages/letters/letterscollection">
              <Button type="button" onClick={this.routeChange}>
                <b className="letter">{x.letterTo}'s letter</b>
              </Button>
            </Link>
          </div>
        );
      });
    return (
      <>
        <div>
          <h4>Your Letters</h4>
        </div>
        <div className="userLetters"> {userLetters} </div>
        <div className="letter-input-position">
          <Form onSubmit={this.handleAddLetters}>
            <Form.Group>
              <Form.Control
                className="letter-input"
                type="text"
                name="letter"
                onChange={this.handleChange}
                placeholder="Write a letter here"
                value={this.state.letter}
              />
              <Form.Control
                className="letterTo"
                type="text"
                name="letterTo"
                onChange={this.handleChange}
                placeholder="Letter to"
                value={this.state.letterTo}
              />
            </Form.Group>
            <Button type="submit">SAVE</Button>
          </Form>
        </div>
        <div>
          <Switch>
            <Route
              exact
              path="/messages"
              render={() => (
                <Messages
                  user={this.state.user}
                  funeralId={this.state.user.funeral}
                />
              )}
            ></Route>
          </Switch>
        </div>
      </>
    );
  }
}

