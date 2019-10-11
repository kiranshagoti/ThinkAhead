import React, { Component } from "react";
import axios from "axios";

class HandleBody extends Component {
  state = {
    clothes: "",
    treasureInput: '',
    howToBeBuried: ''
  };

  // COMPONEN DID MOUNT ---> GET FUNERAL
  componentDidMount = () => {
    axios
      .get(`/funeral/${this.props.user.funeral}`)
      .then(response => {
        const { howToBeBuried, clothes, treasureInput } = response.data;

        this.setState({
          howToBeBuried,
          clothes,
          treasureInput
        });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        const { howToBeBuried, clothes, treasureInput } = this.state;
        axios
          .post(`/funeral/updatefuneral/${this.props.user.funeral}`, {
            howToBeBuried,
            clothes,
            treasureInput
          })
          .then(response => {
            console.log("NEW DATA:", response.data);
          })
          .catch(err => console.log(err));
      }
    );
  };

  render() {
    console.log("FUNERALS", this.props.funeral);
    return (

      <>
        
          <form>
            <div className="bodyFormSection">
              <label>
                <h3>How do want to be handle?</h3>
              </label>
              <input
                name="howToBeBuried"
                type="text"
                value={this.state.howToBeBuried}
                placeholder="Burried"
                onChange={this.handleInputChange}
              />
            </div>

            <div className="bodyFormSection">
              <label>
                <h3>What do you want to wear?</h3>
              </label>
              <input
                name="clothes"
                type="text"
                value={this.state.clothes}
                placeholder="Your clothes"
                onChange={this.handleInputChange}
              />
            </div>

            <div className="bodyFormSection">
              <label>
                <h3>Do you want to bring any treasures with you?</h3>
              </label>
              <input
                name="treasureInput"
                type="text"
                value={this.state.treasureInput}
                placeholder="Your items"
                onChange={this.handleInputChange}
              />
            </div>
          </form>
      </>
    );
  }
}

export default HandleBody;
