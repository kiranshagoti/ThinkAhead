import React, { Component } from "react";
import axios from 'axios'

class HandleBody extends React.Component {
  state = {
    checked: false,
    value: "",
    handleTheBody: '',
    otherInput: "",
    clothesInput: "",
    treasureInput: "",
    howToBeBuried: '',
    user: this.props.user
    // funeral: this.props.funeral
  };

  componentDidMount = () => {
    console.log(this.props)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      }
    );
  };
  
  handleSubmit = event => {
  // using this.props. funeral will give us the id of the doc which need to be updated 
  // using this.state give us the values which will need to be chnaged out of the input field 
  // project management 
  // using  axious api  call to UPDATE the data 
  //  create a route which handle the update!! ( look project management lab)

  }

  render() {
    console.log('FUNERALS',this.props.funeral)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          burial
          <input
            name="checked"
            type="checkbox"
            onChange={this.handleInputChange}
            value="burried"
            checked={this.state.howToBeBuried === 'burried'}
          />
        </label>
        <label>
          cremation
          <input
            name="checked"
            type="checkbox"
            onChange={this.handleInputChange}
            value="cremation"
          />
        </label>
        <label>
          tree
          <input
            name="checked"
            type="checkbox"
            onChange={this.handleInputChange}
            value="tree"
          />
        </label>
        <label>
          donate
          <input
            name="checked"
            type="checkbox"
            onChange={this.handleInputChange}
            value="donate"
          />
        </label>
        <label>
          Other...
          <input
            name="otherInput"
            type="text"
            value={this.state.otherInput}
            onChange={this.handleInputChange}
          />
        </label>




        <br />
        <label>
          What do you want to wear?
          <input
            name="clothesInput"
            type="text"
            value={this.state.clothesInput}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Do you want to bring any treasures with you?
          <input
            name="treasureInput"
            type="text"
            value={this.state.treasureInput}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

export default HandleBody;