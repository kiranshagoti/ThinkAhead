import React, { Component } from "react";
import axios from 'axios'

class HandleBody extends React.Component {
  state = {
    checked: false,
    handleTheBody: '',
    otherInput: "",
    dressCode: (this.props.funeral.dressCode || ""),
    items: (this.props.funeral.items || ""),
    howToBeBuried: (this.props.funeral.howToBeBuried || ""),
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
    
    event.preventDefault();
    this.props.updateFuneral({
      handleTheBody: this.state.handleTheBody,
        otherInput: this.state.otherInput,
        dressCode: this.state.dressCode,
        items: this.state.items,
        howToBeBuried: this.state.howToBeBuried
      })

    // axios.post(`/funeral/${this.props.user.funeral}`, { 
    //   handleTheBody: this.state.handleTheBody,
    //   otherInput: this.state.otherInput,
    //   dressCode: this.state.dressCode,
    //   treasureInput: this.state.treasureInput,
    //   howToBeBuried: this.state.howToBeBuried,
    // })
    // .then(response => {
    //   console.log(response.data)
    //   this.setState({
    //     checked: true,
    // value: "",
    // handleTheBody: '',
    // otherInput: "",
    // dressCode: "",
    // treasureInput: "",
    // howToBeBuried: '',
    // user: this.props.user
    //   });
    //   // updates the parent's component's state, which causes new props to be passed to the <ProjectList/> component
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
     
    // })
    // .catch(err => {
    //   console.log(err);
    // });
};
  

  render() {
    console.log('FUNERALS',this.props.funeral)
    return (
      <form onSubmit={this.handleSubmit}>
        <select name="howToBeBuried"  >
          <option value="Classic funeral" selected={this.props.funeral && this.props.funeral.howToBeBuried === 'Classic funeral'}>Classic funeral</option>
          <option value="Cremation" selected={this.props.funeral && this.props.funeral.howToBeBuried === 'Cremation'}>Cremation</option>
          <option value="Tree" selected={this.props.funeral && this.props.funeral.howToBeBuried === 'Tree'}>Tree</option>
          <option value="Science" selected={this.props.funeral && this.props.funeral.howToBeBuried === 'Science'}>Donate</option>
        </select>
        {/* <label>
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
            name="items"
            type="text"
            value={this.state.items}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default HandleBody;