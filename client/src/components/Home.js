import React, { Component } from 'react';
import MainPlan from './MainPlan';
import Articles from './Articles';
import Navbar from "./Navbar";
import BottomNavbar from "./BottomNavbar";  

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>HOME</h1>
        <p>I'm sure that every person alive at some point has thought about their own funeral. Mabye you have ideas concerning what music to play, the people who should attend or what images to display. The question is, how should the people you hold dear know about your final wishes when you´re gone? With Think Ahead all this important information is safely stored in one place and can be shared with someone you trust.</p>
        <MainPlan />
        <Articles />
        <BottomNavbar/>
      </div>
    )
  }
}
