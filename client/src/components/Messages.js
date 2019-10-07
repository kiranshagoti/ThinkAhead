import React, { Component } from "react";
import Letters from "./Letters";
import Quotes from "./Quotes";
import { Link, Route } from "react-router-dom";

export class Messages extends Component {
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
