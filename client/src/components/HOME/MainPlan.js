import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function MainPlan() {
  const classes = useStyles();

  return (
    <>
      <div className="homeSection">
        <h3>Plan your......</h3>

        <div className="homeSection-btn">
          <Link to="/body">Body</Link>
        </div>

        <div className="homeSection-btn">
          <Link to="/event">Event</Link>
        </div>

        <div className="homeSection-btn">
          <Link to="/messages">Messages</Link>
        </div>
      </div>

      <div className="homeSection">
        <h3>Share your ......</h3>

        <Button variant="contained" className={classes.button}>
          Icon
        </Button>

        <Button variant="contained" className={classes.button}>
          Icon
        </Button>
        <div className="homeSection-btn">
          <Link to="/share-funeral-plans">Share your plan with LovedOne</Link>
        </div>
      </div>
    </>
  );
}
