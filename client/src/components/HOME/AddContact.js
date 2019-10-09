import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class AddContact extends Component {
  state = {
    contactName: "",
    emailContact: "",
    phonenumberContact: "",
    messageContact: "",
    user: this.props.user
  };

  // COMPONEN DID MOUNT ---> GET Contact
  componentDidMount = () => {
    console.log(this.props.user)
    this.setState({ user: this.props.user });

    axios.get(`/funeral/${this.props.user.funeral}`).then(response => {
      console.log(response.data)
      const {contactName, emailContact, phonenumberContact
        , messageContact} = response.data
      
      this.setState({
        contactName,
        emailContact,
        phonenumberContact,
        messageContact,
        user: this.props.user

      },() => console.log('Add Contact:',this.state))

    }).catch(err => console.log(err))
  }

// UPDATE FUNERAL ---> POST IN FUNERAL/UPDATEFUNERAL/:ID
  handleSubmit = event => {
    event.preventDefault();

    const { contactName, emailContact, phonenumberContact, messageContact } = this.state;

    axios.post(`/funeral/updatefuneral/${this.state.user.funeral}`, { contactName, emailContact, phonenumberContact, messageContact }).then(response => {
      console.log('NEW DATA:', response.data)
    }).catch(err => console.log(err))
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
      },() => console.log('CHANGES IN STATE:',this.state));
  };




  render() {
      console.log('FUNERALS', this.props, "state", this.state)
      return (
        <div>
          <h2>Add Contact </h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="contactName"
                value={this.state.contactName}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="text"
                name="emailContact"
                value={this.state.emailContact}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Number:</Form.Label>
              <Form.Control
                type="text"
                name="phonenumberContact"
                value={this.state.phonenumberContact}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message:</Form.Label>
              <Form.Control
                type="text"
                name="messageContact"
                value={this.state.messageContact}
                onChange={this.handleInputChange}
              />
            </Form.Group>

            <Button type="submit">Save</Button>
          </Form>
        </div>
      )
    }
  }
