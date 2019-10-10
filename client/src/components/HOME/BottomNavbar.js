import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import MessageIcon from "@material-ui/icons/Message";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100vw"
  }
});

export default function BottomNavbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    <div className="bottom-nav">
      <div className="homeSection-btn">
        <Link to="/">HOME</Link>
      </div>
      <div className="homeSection-btn">
        <Link to="/body">BODY</Link>
      </div>
      <div className="homeSection-btn">
        <Link to="/event">EVENT</Link>
      </div>
      <div className="homeSection-btn">
        <Link to="/messages">MESS</Link>
      </div>
    </div>
  );
}
