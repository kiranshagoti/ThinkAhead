import React, { Component } from "react";
import App from "../../App";
import Navbar from "../HOME/Navbar";
import { Link, Route } from "react-router-dom";
import HandleBody from "./HandleBody";
import Location from "./Location";
import axios from 'axios'

export default class Body extends Component {
  state ={
    user:this.props.user,
    funeral:null
  }

  componentDidMount = () => {
    console.log(this.state.user)
    axios.get(`/funeral/${this.state.user.funeral}`).then(response => {
      console.log('AXIOS GET FUNERAL:', response.data)
      this.setState({
        funeral: response.data
      })
    }).catch(err => console.log(err))
  }
  updateFuneral = (args) => {
    console.log('ARGS FOR BODY AXIOS:', args)
    axios.post(`/funeral/${this.props.user.funeral}`, args)
    .then(response => {
      console.log("updated user---",response.data)
      
      // updates the parent's component's state, which causes new props to be passed to the <ProjectList/> component
     
    })
    .catch(err => {
      console.log(err);
    });
  }

    // updateFuneral = (...args)=> {
    //   axios.post(`/updateFuneral/${this.state.funeral._id}`{ ...args })
    //     .then(response => {
    //     console.log(response.data)
    //     })
    //   .catch(err => console.log(err)
    // });




  
  render() {
    this.state.user && console.log("USER FROM BODY COMP.", this.state.user);
    this.state.funeral && console.log("FUNERAL FROM BODY COMP.", this.state.funeral);
    return (
      <div>
        <Route exact path="/body/handlebody" render={() => <HandleBody user={this.state.user} updateFuneral={this.updateFuneral} funeral={this.state.funeral}/>}></Route>
        <Link to="/body/handlebody">
          <div>Handle Body</div>
        </Link>
        <Route exact path="/body/location" component={Location}></Route>
        <Link to="/location">
          <div>Location</div>
        </Link>
        <div>
          <h2>Plan More...</h2>
          <button>Religion icon</button>
          <button>Coffin icon </button>
          <button>Science icon</button>
        </div>
      </div>
    );
  }
}
