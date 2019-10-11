import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import Vibe from "./Vibe";
import Eventlocation from "./Eventlocation";
import Playlist from "./Playlist";
import Memories from "./Memories";

export default class Event extends Component {
  state = {
    user: this.props.user,
    funeral: null
  };

  // render() {
  //   return (
  //     <div className="event-container">
  //       <div>
  //         Would you like to ask people to speak?
  //         <Link to="/performance">
          
  //         </Link>
  //       </div>

  //       <div>
  //         <div className="event-box">
  //           <Link to="/event/vibe">
  //             <img src="../../../vibe.png" alt="vibeicon" />
  //             <p>Vibe</p>
  //           </Link>
  //         </div>
  //         <div className="event-box">
  //           <Link to="/event/eventlocation">
  //             <img src="../../../location.png" alt="locationicon" />
  //             <p>Location</p>
  //           </Link>
  //         </div>
  //         <div className="event-box">
  //           <Link to="/event/playlist">
  //             <div>
  //               <img src="../../../music.png" alt="musicicon" />
  //               <p>My Playlist</p>
  //             </div>
  //           </Link>
  //         </div>
  //         <div className="event-box">
  //           <Link to="/event/memories/">
  //             <img src="../../../memories.png" alt="memoriesicon" />
  //             <p>My Memories</p>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  render() {
    return (
      <div className="event-container">
        <Link to="/event/vibe">
          <div className="Rectangleinmess">
            <span>
              <img src="../../../vibe.png" alt="vibeicon" />
            </span>
​
            <p className="paragrafpadding">Set the tone of your funeral</p>
          </div>
        </Link>
        <Link to="/event/eventlocation">
          <div className="Rectangleinmess">
            <span>
              <img src="../../../location.png" alt="locationicon" />
            </span>
​
            <p className="paragrafpadding">
              Where do you want the funeral to take place?
            </p>
          </div>
        </Link>
        <Link to="/event/playlist">
          <div className="Rectangleinmess">
            <span>
              <img src="../../../music.png" alt="musicicon" />
            </span>
​
            <p className="paragrafpadding">
              Which favourite songs do you want to be played at your funeral?
            </p>
          </div>
        </Link>
        <Link to="/event/memories/">
          <div className="Rectangleinmess">
            <img src="../../../memories.png" alt="memoriesicon" />
​
            <p className="paragrafpadding">
              Add pictures and stories about your best memories
            </p>
          </div>
        </Link>
      </div>
    );
  }
}
