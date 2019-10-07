import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function MainPlan() {
  const classes = useStyles();

  return (
    <div>
      <h1>Plan your......</h1>
      {/* <Button variant="contained" className={classes.button}>
        Body Handling
      </Button> */}
      <Link to='/body'>Body Handling</Link>

      <Button variant="contained" className={classes.button}>
        Event
      </Button>
      <Button variant="contained" className={classes.button}>
        Messages
      </Button>
      <h1>Share your ......</h1>
      <Button variant="contained" className={classes.button}>
        Plan
      </Button>
      <Button variant="contained" className={classes.button}>
        Message
      </Button>
      <Button variant="contained" className={classes.button}>
        Loved One
      </Button>
    </div>
  );
}