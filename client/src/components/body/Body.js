import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Body extends Component {
  state = {
    user: this.props.user,
    funeral: null
  };

  render() {
    this.state.user && console.log("USER FROM BODY COMP.", this.state.user);
    this.state.funeral &&
      console.log("FUNERAL FROM BODY COMP.", this.state.funeral);
    return (
      <>
        <div className="bodysection">
          <p>Funeral planning helps your loved ones make fewer guesses about what you want and how best to honor the life you’ve lived.

</p>
          <div className='bodySection-btn-row'>
            <div className='bodySection-btn'>
           
        <Link to="/body/handlebody">
         <img src="../../../dummy.png" alt="handlingicon"/>
              </Link>
              Handling
              </div>

        <div className='bodySection-btn'>
        <Link to="/body/location">
        <img src="../../../location1.png" alt="locationicon"/>
              </Link>
              Location
            </div>

            <div className='bodySection-btn'>
        <Link to="/body/invite">
        <img src="../../../dress.png" alt="dressicon"/>
              </Link>
              Invite
            </div>
            </div>
        </div>

        <div className='bodySection'>
      <h3>More...</h3>
      
      
        <div className='bodySection-btn-row'>
        <div className='bodySection-btn'>
              <Link to="/religion"><img src='../../../religion.png' alt="religionicon" /></Link>
              Religion
        </div>
        <div className='bodySection-btn'>
              <Link to="/coffin"><img src='../../../coffin.png' alt="coffinicon" /></Link>
              Coffin
          </div>
          <div className='bodySection-btn'>
              <Link to="/science"><img src='../../../science.png' alt="scienceicon" /></Link>
              Science
          </div>
        </div>
        </div>
        </>
    );
  }
}
