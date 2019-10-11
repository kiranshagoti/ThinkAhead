import React, { Component } from "react";
import Letters from "./Letters";
import Quotes from "./Quotes";
import Documents from "./Documents";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";

export class Messages extends Component {
  state = {
    user: this.props.user,
    funeral: null
  };

  render() {
    return (
      <div className="messages-container">

        <div>
        <Link to="/messages/documents">
          <div className="Rectangleinmess">
            <img src="../../../document.png" alt="documenticon" />

            <p className="paragrafpadding">Upload importent documents</p>
          </div>
        </Link>
        ​
        <Link to="/messages/quotes">
          <div className="Rectangleinmess">
            <img src="../../../quote.png" alt="quotesicon" />

            <p className="paragrafpadding">Share your favorite quotes</p>
          </div>
        </Link>
        ​
        <Link to="/messages/letters">
          <div className="Rectangleinmess">
            <img src="../../../Messages.png" alt="messagesicon" />
            <p className="paragrafpadding">Write letters to your loved ones</p>
          </div>
        </Link>
        </div>
      </div>
    );
  }
}

export default Messages;
