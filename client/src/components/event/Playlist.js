import React, { Component } from "react";
import axios from 'axios'

export default class Playlist extends Component {
  state = {
    user:this.props.user,
    playlist:[]
  }

  

  // COMPONEN DID MOUNT ---> GET FUNERAL
  componentDidMount = () => {

    axios.get(`/funeral/${this.state.user.funeral}`).then(response => {

      const {playlist} = response.data
      
      this.setState({

        playlist

      },() => console.log('FUNERAL IN HANDLEBODY STATE:',this.state))

    }).catch(err => console.log(err))
  }

// UPDATE FUNERAL ---> POST IN FUNERAL/UPDATEFUNERAL/:ID
  handleSubmit = event => {
    
    event.preventDefault();

    const {playlist} = this.state
    
    axios.post(`/funeral/updatefuneral/${this.state.user.funeral}`, {playlist}).then(response => {
      console.log('NEW DATA:',response.data)
    
    }).catch(err => console.log(err))
  };








  
  handleAddSong = e => {

    e.preventDefault();

    const song = e.target.song.value;
    const artist = e.target.artist.value;
    
    this.setState({

        playlist: this.state.playlist.concat({song:song, artist:artist})
      
      },() => console.log('CHANGES IN STATE:',this.state));
  };













  render() {

    const userPlaylist = this.state.playlist.length && this.state.playlist.map(x => {
      return (
        <div key={x.artist + x.song}>
          <p><b>{x.artist}</b></p>
          <p>{x.song}</p>
        </div>
      )
    })

    return (
      <>
      <div>
      <h4>Your playlist</h4>
      {userPlaylist}
      </div>

      <form onSubmit={this.handleAddSong}>
      <label>Song</label>
      <input type='text' name='song' placeholder='Add song'/>

      <label>Artist</label>
      <input type='text' name='artist' placeholder='Add artist'/>
      <button type='submit' >Add Song</button>
      <button type='button' onClick={this.handleSubmit}>Update funeral</button>

      </form>

      </>
    );
  }
}
