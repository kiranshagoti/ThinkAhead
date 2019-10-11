import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import HomeIcon from "@material-ui/icons/Home";
// import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
// import MessageIcon from "@material-ui/icons/Message";
// import LocalBarIcon from "@material-ui/icons/LocalBar";
import { Link } from "react-router-dom";



export default function BottomNavbar(props) {
  return (
    // <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
    //   <Link to='/'>
    //     <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
    //   </Link>
    //   <Link to='/body'>
    //     <BottomNavigationAction label="People" value="people" icon={<EmojiPeopleIcon />} /></Link>
    //     <Link to='/event'>
    //     <BottomNavigationAction label="Bar" value="bar" icon={<LocalBarIcon />} /></Link>
    //   <Link to='/messages'>
    //   <BottomNavigationAction label="Message" value="message" icon={<MessageIcon />} /></Link>
    // </BottomNavigation>
    <>
    {props.user && props.user.funeral &&
    <div className='bottom-nav'>
      <div className='homeSection-bot-btn'>
        <Link to="/"><img src='../../../home-symbol@2x.png' alt="homeicon" /></Link>
      </div>
      <div className='homeSection-bot-btn'>
        <Link to="/body"><img src='../../../body-symbol@2x.png' alt="bodyicon" /></Link>
      </div>
      <div className='homeSection-bot-btn'>
        <Link to="/event"><img src='../../../party-symbol@2x.png' alt="eventicon" /></Link>
      </div>
      <div className='homeSection-bot-btn'>
        <Link to="/messages"><img src='../../../document-symbol@2x.png' alt="messagesicon" /></Link>
      </div>

      </div>
      }
      </>
    )
  }

