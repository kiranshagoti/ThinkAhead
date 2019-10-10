import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <Link to="./Signup.js"></Link>
        <Link to="./Login.js"></Link>
      </div>
    )
  }
}
