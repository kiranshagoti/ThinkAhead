import React, { Component } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";


class Location extends Component {

  state = {
    user:this.props.user,
    finalRestAddress: ""
  };

// GET FUNERAL
componentDidMount = () => {

  axios.get(`/funeral/${this.state.user.funeral}`).then(response => {

    const {finalRestAddress} = response.data
    
    this.setState({

      finalRestAddress

    },() => console.log('FUNERAL IN LOCATION STATE:',this.state))

  }).catch(err => console.log(err))
}

// UPDATE FUNERAL
handleSubmit = event => {
    
  event.preventDefault();

  const {finalRestAddress} = this.state
  
  axios.post(`/funeral/updatefuneral/${this.state.user.funeral}`, {finalRestAddress}).then(response => {
    console.log('NEW DATA:',response.data)
  
  }).catch(err => console.log(err))
};

// UPDATE STATE
handleChange = e => {

  const {name, value} = e.target
  
  this.setState({
  
    [name]:value
  })
}

 render() {
   return (
     <div>
       <Form onSubmit={this.handleSubmit}>
         <Form.Group>
           <Form.Label>Final Rest</Form.Label>
           <Form.Control
             type="text"
             name="finalRestAddress"
             value={this.state.finalRestAddress}
             onChange={this.handleChange}
             placeholder="final rest location"
           />
         </Form.Group>
         <input type="submit" value="Submit" />{" "}
       </Form>
     </div>
   );
 }
}
export default Location;

