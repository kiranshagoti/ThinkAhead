import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import MessageIcon from '@material-ui/icons/Message';
import LocalBarIcon from '@material-ui/icons/LocalBar';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction label="People" value="people" icon={<EmojiPeopleIcon/>} />
      <BottomNavigationAction label="Bar" value="bar" icon={<LocalBarIcon />} />
      <BottomNavigationAction label="Message" value="message" icon={<MessageIcon />} />
    </BottomNavigation>
  );
}