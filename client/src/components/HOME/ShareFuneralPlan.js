import React from "react";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Link, Route } from "react-router-dom";
import AddContact from "./AddContact";
import axios from "axios";

export default class ShareFuneralPlan extends React.Component {
  state = {
    contactName: '',
    emailContact: "",
    phonenumberContact: "",
    messageContact: "",
    user: this.props.user,
    funeral: null,
    lovedOne:null
  };

  componentDidMount = () => {
    axios.get(`/funeral/${this.state.user.funeral}`).then(response => {
      const { lovedOne } = response.data
      const { contactName, emailContact, phonenumberContact, messageContact } = lovedOne
      this.setState({
        // lovedOne,
        contactName, emailContact, phonenumberContact, messageContact
      })
    }).catch(err => console.log(err))
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]:value
    }, () => {
        const { contactName, emailContact, phonenumberContact, messageContact} = this.state
        const lovedOne = { contactName, emailContact, phonenumberContact, messageContact }
        axios.put(`/funeral/updatefuneral/${this.state.user.funeral}`, { lovedOne }).then(response => {
          console.log(response.data)
        }).catch(err => console.log(err))
    })
  }

  render() {
    /*
    contactName: "",
    emailContact: "",
    phonenumberContact: "",
    messageContact: "",
    */ 
    const lovedOneInfos = this.state.lovedOne && this.state.lovedOne.map(x => {
      return (
        <div>
          <h3>{x.contactName}</h3>
          <p>{x.emailContact}</p>
          <p>{x.phonenumberContact}</p>
          <p>{x.messageContact}</p>
        </div>
      )
    })
    return (
      <div>

        <h1>Do you know who you want to share your final wish with?</h1>
        {lovedOneInfos}
        {/* <Link to="/share-funeral-plans/add-contact">
          <img src="../../../AddContact.png" alt="addicon"/>
        </Link> */}
        <form onSubmit={this.handleSubmit}>

          <label> <h3>Contact name</h3> </label>
          <input type="text" name='contactName' value={this.state.contactName} onChange={this.handleChange}/>
          <label> <h3>Contact email</h3> </label>
          <input type="text" name='emailContact' value={this.state.emailContact} onChange={this.handleChange}/>
          <label> <h3>Contact phone</h3> </label>
          <input type="text" name='phonenumberContact' value={this.state.phonenumberContact} onChange={this.handleChange}/>
          <label> <h3>Add message</h3> </label>
          <input type="text" name='messageContact' value={this.state.messageContact} onChange={this.handleChange}/>
          
        </form>
      </div>
    );
  }
}
