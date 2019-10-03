<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.get("/api/auth/loggedin").then(response => {
  const user = response.data;
  console.log(user);
  ReactDOM.render(
    <BrowserRouter>
      <App user={user} />
    </BrowserRouter>,
    document.getElementById("root")
  );
});
>>>>>>> 667e8a4db02965e61de9caf75e655feb7d8a61df

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
