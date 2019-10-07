import React, { Component } from "react";
import axios from 'axios'

class HandleBody extends React.Component {
  state = {
    checked: false,
    value: "",
    handleTheBody: "",
    otherInput: "",
    clothesInput: "",
    treasureInput: "",
    user: this.props.user,
    funeral:null
  };

  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => console.log(this.state.handleTheBody)
    );
  };

  render() {
    console.log('FUNERALS',this.state.funeral)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          burial
          <input
            name="checked"
            type="checkbox"
            onChange={this.handleInputChange}
            value="burried"
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