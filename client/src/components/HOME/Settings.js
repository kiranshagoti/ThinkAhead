import React, { Component } from 'react'
import { Button } from "react-bootstrap";
import axios from "axios";


export default class Settings extends Component {
  state = {
    user: this.props.user

  };

  deleteUser = () => {
    const id = this.props.user._id;
    console.log(id)
    return axios.delete(`/api/auth/delete/${id}`).then(response => {
      console.log(response)
      this.props.history.push("/signup");
    });
  };


  render() {

    // const owner = this.state.user.owner;
    // const currentUser = this.props.user;



    // let canDelete = false;
    // if (currentUser && currentUser._id === owner) canDelete = true;
    return (
      <div className='settingsContainer'>
        <h1>Account Settings for {this.props.user.username}</h1>

        <hr />
        <h3>Account Information:</h3>
        <button>Manage</button>
        <hr />
        <p>Manage your profile, email addresses and account password.</p>

        <h3>Subscription and Billing:</h3>
        <button>Purchase a subscription</button>
        <hr />
        <p>Your ThinkAhead trial expires soon. Please provide your credit card information to continue your subscription for just €50/year.</p>

        <h3>My Current Situation:</h3>
        <button>Manage</button>
        <hr />
        <p>Had any big life changes since you began using ThinkAhead? Keep us updated so that we can show you the next best steps to take.</p>

        <h3>Two-Step Verification:</h3>
        <button>Manage</button>
        <hr />
        <p>Two-Step Verification is not enabled for your account. We recommend that you turn on this extra layer of security as soon as possible.</p>

        <h3>Email preferences:</h3>
        <button>Manage</button>
        <hr />
        <p>Go here to manage your email preferences.</p>

        <h3>Delete your account:</h3>
        {/* <button>Delete My Account </button>
        
        <h1>{this.props.user.username}</h1>
        <p>{this.props.user.email}</p> */}

        {/* {canDelete && ( */}
          <button className='delete-btn' variant="danger" onClick={this.deleteUser}>
            Delete User
          </button>
        {/* )} */}
          </div>
      
    );
  };
}



