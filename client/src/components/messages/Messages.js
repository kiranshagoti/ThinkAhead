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

        <Link to="/messages/letters">
          <button>letter icon</button>
          <div>Letters</div>
        </Link>

        <Link to="/messages/quotes">
          <button> "" </button>
          <div>Quotes</div>
        </Link>

        <Link to="/messages/documents">
          <button> document icon </button>
          <div>Documents</div>
        </Link>
      </div>
    );
  }
}

export default Messages;
