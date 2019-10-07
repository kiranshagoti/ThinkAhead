import React from "react";
import axios from "axios";
import { Form, Label, Button } from "react-bootstrap";

//=> GET data on eventLocation.data, eventAdress.data, invite.data,
// => componentDidMountFunction
// => handelChange() => set new state
// => componentDidUpdate() =>
// => POST updated state back to database
// => render a form with 3 labels

 class Eventlocation extends Component {
  state = {
    eventLocation: "",
    eventAdress: "",
    invite: ""
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              name="food"
              value={this.state.eventLocation}
              onChange={this.handleChange}
              placeholder="Where do you want people to celebrate your life?"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="food"
              value={this.state.eventAdress}
              onChange={this.handleChange}
              placeholder="Adress"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="food"
              value={this.state.invite}
              onChange={this.handleChange}
              placeholder="Invite guests"
            />
          </Form.Group>
          <Button type="submit">Update funeral</Button>
        </Form>
      </div>
    );
  }
}

export default Eventlocation;