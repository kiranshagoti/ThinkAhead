import React, { Component } from "react";
import axios from 'axios'

class HandleBody extends React.Component {
  state = {
    checked: false,
    value: "",
    handleTheBody: '',
    other: "",
    clothes: "",
    treasureInput: "",
    howToBeBuried: '',
    user: this.props.user,
    funeral: this.props.funeral
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
    event.preventDefault();
    axios.post("/funeral", { 
      checked: false,
      value: "",
      handleTheBody: this.state.handleTheBody,
      other: this.state.other,
      clothes: this.state.clothes,
      treasureInput: this.state.treasureInput,
      howToBeBuried: this.state.howToBeBuried,
      user: this.props.user
    })
    .then(() => {
      this.setState({
        checked: true,
    value: "",
    handleTheBody: '',
    other: "",
    clothes: "",
    treasureInput: "",
    howToBeBuried: '',
    user: this.props.user
      });
      // updates the parent's component's state, which causes new props to be passed to the <ProjectList/> component
     
    })
    .catch(err => {
      console.log(err);
    });
};
  

  render() {
    console.log('FUNERALS',this.props.funeral)
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <select name="howToBeBuried"  >
          <option value="burried" selected={this.props.funeral.howToBeBuried === 'burried'}>Burried</option>
          <option value="cremation" selected={this.props.funeral.howToBeBuried === 'cremation'}>Cremation</option>
          <option value="green" selected={this.props.funeral.howToBeBuried === 'green'}>Tree</option>
          <option value="donate" selected={this.props.funeral.howToBeBuried === 'donate'}>Donate</option> */}
        {/* </select> */}
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
            name="clothes"
            type="text"
            value={this.state.clothes}
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
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default HandleBody;