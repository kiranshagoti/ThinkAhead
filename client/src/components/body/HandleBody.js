import React, { Component } from "react";
import axios from 'axios'

class HandleBody extends React.Component {
  state = {
    // checked: false,
    // handleTheBody: '',
    // otherInput: "",
    // dressCode: "",
    // treasureInput: "",
    // howToBeBuried: "",
    // other: "",
    clothes: "",
    treasureInput: "",
    howToBeBuried: '',
    user: this.props.user,
    // funeral: this.props.funeral
  };

// COMPONEN DID MOUNT ---> GET FUNERAL
  componentDidMount = () => {

    axios.get(`/funeral/${this.state.user.funeral}`).then(response => {

      const {howToBeBuried, clothes, treasureInput} = response.data
      
      this.setState({
        howToBeBuried,
        clothes,
        treasureInput

      },() => console.log('FUNERAL IN HANDLEBODY STATE:',this.state))

    }).catch(err => console.log(err))
  }

// UPDATE FUNERAL ---> POST IN FUNERAL/UPDATEFUNERAL/:ID
  handleSubmit = event => {
    
    event.preventDefault();

    const {howToBeBuried, clothes, treasureInput} = this.state
    
    axios.post(`/funeral/updatefuneral/${this.state.user.funeral}`, {howToBeBuried, clothes, treasureInput}).then(response => {
      console.log('NEW DATA:',response.data)
    
    }).catch(err => console.log(err))
  };








  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
      },() => console.log('CHANGES IN STATE:',this.state));
  };

  render() {
    console.log('FUNERALS',this.props.funeral)
    return (
      <form onSubmit={this.handleSubmit}>
        <select name="howToBeBuried"  >
          <option value="Classic funeral" selected={this.state.howToBeBuried === 'Classic funeral'}>Classic funeral</option>
          <option value="Cremation" selected={this.state.howToBeBuried === 'Cremation'}>Cremation</option>
          <option value="Tree" selected={this.state.howToBeBuried === 'Tree'}>Tree</option>
          <option value="Science" selected={this.state.howToBeBuried === 'Science'}>Science</option>
        </select>
        
           




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
