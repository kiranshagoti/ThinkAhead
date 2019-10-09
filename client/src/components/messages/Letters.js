import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Form, Label, Button } from "react-bootstrap";
import axios from "axios";
import Messages from "./Messages";

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

  

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    },() => {
      const { letters, letterTo } = this.state;

    this.updateFuneral({ letters: letters, letterTo: letterTo });
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
