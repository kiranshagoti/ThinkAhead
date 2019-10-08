import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Vibe from "./Vibe";
import App from "../../App";

// import Playlist from "./Playlist";
// import AddSong from "./AddSong";
// import Memories from "./Memories";
// import AddMemorie from "./AddMemorie";
// import Eventlocation from "./Eventlocation";

export default class Event extends Component {
  state = {
    user: this.props.user,
    funeral: null
  };

  componentDidMount = () => {
    console.log(this.state.user);
    axios
      .get(`/funeral/${this.state.user.funeral}`)
      .then(response => {
        console.log("AXIOS GET FUNERAL:", response.data);
        this.setState({
          funeral: response.data
        });
      })
      .catch(err => console.log(err));
  };

  updateFuneral = (
    food,
    flowers,
    dressCode,
    kindOfVibe,
    eventLocation,
    eventAdress,
    invite,
    musicTitle,
    musicArtist,
    spotify,
    imgName,
    imgPath,
    originalName,
    memorieStory
  ) => {
    axios
      .post(`/updateFuneral/${this.state.funeral._id}`, {
        food,
        flowers,
        dressCode,
        kindOfVibe,
        eventLocation,
        eventAdress,
        invite,
        musicTitle,
        musicArtist,
        spotify,
        imgName,
        imgPath,
        originalName,
        memorieStory
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="event-container">
        {/* <Vibe updateFuneral={this.updateFuneral}/> */}
        <div>
          {" "}
          Would you like to ask people to speak?
          <Link to="/performance">
            <button> type="button">Arrow-btn</button>
          </Link>
        </div>
        {/* <Route exact path="/event/vibe" render={() => <Vibe user={this.state.user} funeral={this.state.funeral}/>}></Route>  */}
        <Link to="/event/vibe">
          <button type="button">VIBE</button>
        </Link>
        <Link to="/where">
          <button type="button">WHERE</button>
        </Link>
        <Link to="/playlist">
          <button type="button">PLAYLIST</button>
        </Link>
        <Link to="/memories/">
          <button type="button">MEMORIES</button>
        </Link>
      </div>
    );
    //   <Route exactpath="/vibe" render={props => (
    //     <Vibe
    //       user={this.state.user}
    //       updateFuneral={this.updateFuneral}
    //       {...props}
    //     />
    //   )}
    // />;
  }
}
//racf - function component
//rcc - class component
