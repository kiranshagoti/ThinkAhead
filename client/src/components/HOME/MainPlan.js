import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1)
//   },
//   input: {
//     display: "none"
//   }
// }));

export default function MainPlan() {
  // const classes = useStyles();

  return (
    <>
      <div className="homeSection">
        <h3>Plan your......</h3>
      <div className='homeSection-btn-row'>
        <div className='homeSection-btn'>
          <Link to="/body"><img src='../../../body-symbol@2x.png' alt="bodyicon" /></Link>
        </div>

        <div className='homeSection-btn'>
          <Link to="/event"><img src='../../../party-symbol@2x.png' alt="eventicon" /></Link>
        </div>

        <div className='homeSection-btn'>
            <Link to="/messages">
            <img src="../../../document-symbol@2x.png" alt="msgicon" /> 
        </Link>
        </div>
        </div>
        </div>

      <div className='homeSection'>
      <h3>Share your ......</h3>
      
      
        <div className='homeSection-btn-row'>
        <div className='homeSection-btn'>
          <Link to="/body"><img src='../../../dummy.png' alt="handlingicon" /></Link>
        </div>

        <div className='homeSection-btn'>
          <Link to="/event"><img src='../../../dummy2.png' alt="loveicon" /></Link>
          </div>
          
      <div className='homeSection-btn'>
      <Link to="/share-funeral-plans"><img src='../../../ShareYourPlan.png' alt="shareicon" /></Link>
          </div>
          </div>
      </div>
      
      </>
  );
}
