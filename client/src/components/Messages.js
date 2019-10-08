import React, { Component } from "react";
import Letters from "./Letters";
import Quotes from "./Quotes";
import Documents from "./Documents";
import { Link, Route } from "react-router-dom";
import axios from "axios";

export class Messages extends Component {
  state = {
    user: this.props.user,
    funeral: null
  };

  componentDidMount = () => {
    console.log(this.props.user);
    axios
      .get(`/funeral/${this.state.user.funeral}`)
      .then(response => {
        console.log("axios get:", response.data);
        this.setState({
          funeral: response.data
        });
      })
      .catch(err => console.log(err));
  };

  // updateFuneral = toUpdate => {
  //   axios
  //     .post(`/updateFuneral/${this.state.funeral._id}`, toUpdate)
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  render() {
    return (
      <div>
        <p> Write letters to your loved ones and share your favorite quotes</p>

        <Link to="/letters">
          <button>letter icon</button>
          <div>Letters</div>
        </Link>

        <Link to="/quotes">
          <button> "" </button>
          <div>Quotes</div>
        </Link>

        <Link to="/documents">
          <button> document icon </button>
          <div>Documents</div>
        </Link>
        <Route
          exact
          path="/letters"
          render={props => (
            <Letters
              user={this.state.user}
              updateFuneral={this.updateFuneral}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/quotes"
          render={props => (
            <Quotes
              user={this.state.user}
              updateFuneral={this.updateFuneral}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/documents"
          render={props => (
            <Documents
              user={this.state.user}
              updateFuneral={this.updateFuneral}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Messages;
