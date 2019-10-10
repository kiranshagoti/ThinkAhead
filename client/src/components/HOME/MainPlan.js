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

      <div className='homeSection-btn'>
        <Link to="/body"><img src='../../../body-symbol@2x.png' alt="bodyicon" /></Link>
      </div>

      <div className='homeSection-btn'>
        <Link to="/event"><img src='../../../party-symbol@2x.png' alt="eventicon" /></Link>
      </div>

      <div className='homeSection-btn'>
          <Link to="/messages">
          <img src="../../../Messages.png" alt="msgicon" /> 
      </Link>
      </div>
      </div>

      <div className='homeSection'>
      <h3>Share your ......</h3>
      
      <Button>
      Icon
      </Button>

      <Button>
        Icon
      </Button>
      <div className='homeSection-btn'>
      <Link to="/share-funeral-plans">Share your plan with LovedOne</Link>
      </div>
      </div>
      
      </>
  );
}
