import React, { Component } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default class Profile extends Component {
  state = {}
  render() {
    return (
      <div className='profileSection'>
        <AccountCircleIcon />
        <h3>{this.props.user.username}</h3>
        <p>{this.props.user.email}</p>
        <p>{this.props.user.number}</p>
      </div>
    )
  }
}
