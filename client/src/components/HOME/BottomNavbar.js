import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import HomeIcon from "@material-ui/icons/Home";
// import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
// import MessageIcon from "@material-ui/icons/Message";
// import LocalBarIcon from "@material-ui/icons/LocalBar";
import { Link } from "react-router-dom";






export default class BottomNavbar extends React.Component {

  render() {

    console.log(this.props.user)

    return (
      <>
      {this.props.user &&

        <div>
          
    
            
                <div className='bottom-nav'>
                <div className='homeSection-btn'>
                  <Link to="/"><img src='../../../home-symbol@2x.png' alt="homeicon" /></Link>
                </div>
                <div className='homeSection-btn'>
                  <Link to="/body"><img src='../../../body-symbol@2x.png' alt="bodyicon" /></Link>
                </div>
                <div className='homeSection-btn'>
                  <Link to="/event"><img src='../../../party-symbol@2x.png' alt="eventicon" /></Link>
                </div>
                <div className='homeSection-btn'>
                  <Link to="/messages"><img src='../../../document-symbol@2x.png' alt="messagesicon" /></Link>
                </div>

          </div>
        </div>
      }
      </>
    )
  }
}
