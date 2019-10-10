// import React, { Component } from "react";
// import { Form, Label, Button, FormLabel } from "react-bootstrap";
// import axios from "axios";
// import { Link, Route, Switch } from "react-router-dom";

// export default class Letterscollection extends Component {

// state= {
//   user: this.props.user,
//   letterscollection: []
// };
// componentDidMount = () => {
//   axios
//     .get(`/funeral/${this.state.user.funeral}`)
//     .then(response => {
//       const { letters } = response.data;

//       this.setState(
//         {
//           letters
//         },
//         () => console.log("FUNERAL IN HANDLEBODY STATE:", this.state)
//       );
//     })
//     .catch(err => console.log(err));
// };

// handleSubmit = event => {
//   event.preventDefault();

//   const { letters } = this.state;

//   axios
//     .post(`/funeral/updatefuneral/${this.state.user.funeral}`, { letters })
//     .then(response => {
//       console.log("NEW DATA:", response.data);
//     })
//     .catch(err => console.log(err));
// };

// handleChange = e => {
//   const { name, value } = e.target;
//   this.setState({
//     [name]: value
//   });
// };


//   render() {
//     return (
//       <div>
//         <Form onSubmit={this.handleSubmit} />
//         <Form.Label>{x.letterTo}s letter</Form.Label>
//         <Form.Control
//           type="text"
//           name="letter"
//           onChange={this.handleChange}
//           placeholder={x.letter}
//         />
//         <Switch>
//           <Link to="/messages/letters">
//             <Button
//               type="button"
//               onClick={this.handleSubmit}
//               onClick={this.routeChange}
//             >
//               Arrowbtn-updatesfuneral and takes us back to letters
//             </Button>
//           </Link>
//         </Switch>
//       </div>
//     );
//   }
// }
