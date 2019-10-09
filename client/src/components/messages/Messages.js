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
          {" "}
          Write letters to your loved ones and share your favorite quotes
        </div>

        <Switch>
          <Route
            exact
            path="/messages/letters"
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
            path="/messages/quotes"
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
            path="/messages/documents"
            render={props => (
              <Documents
                user={this.state.user}
                updateFuneral={this.updateFuneral}
                {...props}
              />
            )}
          />
        </Switch>

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
        <Route
          exact
          path="/messages/letters"
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
          path="/messages/quotes"
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
          path="/messages/documents"
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
