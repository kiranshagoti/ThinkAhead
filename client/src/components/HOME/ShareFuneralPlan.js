import React from "react";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Link, Route } from "react-router-dom";
import AddContact from "./AddContact";
import axios from "axios";

export default class ShareFuneralPlan extends React.Component {
  state = {
    user: this.props.user,
    funeral: null
  };

  render() {
    this.state.user && console.log("USER FROM BODY COMP.", this.state.user);
    this.state.funeral &&
      console.log("FUNERAL FROM BODY COMP.", this.state.funeral);
    return (
      <div>
        <h1>Do you know who you want to share your final wish with??</h1>
        <Link to="/share-funeral-plans/add-contact">
          <PersonAddIcon />
        </Link>
      </div>
    );
  }
}
