import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Form, Label, Button } from "react-bootstrap";
import axios from "axios";
import Messages from "./Messages";

export class Letters extends Component {
  state = {
    user: this.props.user,
    letters: []
  };

  componentDidMount = () => {
    axios
      .get(`/funeral/${this.state.user.funeral}`)
      .then(response => {
        const { letters } = response.data;

        this.setState(
          {
            letters
          },
          () => console.log("letters updated:", this.state)
        );
      })
      .catch(err => console.log(err));
  };

  handleSubmit = event => {
    event.preventDefault();

    const { letters } = this.state;

    axios
      .post(`/funeral/updatefuneral/${this.state.user.funeral}`, { letters })
      .then(response => {
        console.log("NEW DATA:", response.data);
      })
      .catch(err => console.log(err));
  };

  handleAddLetters = e => {
    e.preventDefault();

    const letter = e.target.letter.value;
    const letterTo = e.target.letterTo.value;

    this.setState(
      {
        letters: this.state.letters.concat({
          letter: letter,
          letterTo: letterTo
        })
      },
      () => console.log("Changes in state:", this.state)
    );
  };

  render() {
    const userLetters =
      this.state.letters.length &&
      this.state.letters.map(x => {
        return (
          <div key={x.letter + x.letterTo}>
            <Link to="/messages/letters/letterscollection">
              <Button type="button" onClick={this.routeChange}>
                <b>{x.letterTo}s letter</b>
              </Button>
            </Link>
            {/* <div>{x.letter}</div> */}
          </div>
        );
      });

    return (
      <>
        <div>
          <h4>Your Letters</h4>
          {userLetters}
        </div>

        <Form onSubmit={this.handleAddLetters}>
          <Form.Group>
            <Form.Label> Write a letter </Form.Label>
            <Form.Control
              type="text"
              name="letter"
              // onChange={this.handleChange}
              placeholder="Write a letter here"
            />
            <Form.Label> To: </Form.Label>
            <Form.Control
              type="text"
              name="letterTo"
              // onChange={this.handleChange}
              placeholder="Letter to"
            />
          </Form.Group>

          <Button type="submit">Add Letter</Button>
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

            <Link to="/messages">
              <Button
                type="button"
                onClick={this.handleSubmit}
                onClick={this.routeChange}
              >
                Arrowbtn-updatesfuneral and takes us back to Messages
              </Button>
            </Link>
          </div>
        </Form>
      </>
    );
  }
}

export default Letters;
