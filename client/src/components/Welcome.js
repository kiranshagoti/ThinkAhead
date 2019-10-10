import React, { Component } from 'react';
import { Link } from "react-router-dom";
 

export default class Welcome extends Component {
  render() {
    const title = 'THINK AHEAD'
    return (
      <div className="welcome" id="welcomePage">
        <div className='welcomeTitle'>
          <h1 className="appName">{title}</h1>
        </div>
        
        <div className="welcome-links">
          <Link className='welcome-btn' to="/signup">Signup</Link>
          <Link className='welcome-btn' to="/login">Login</Link>
        </div>
      
      </div>
    )
  }
}