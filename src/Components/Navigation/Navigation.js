import React from "react";
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={classes.nav_container}>
      <div className={`${classes.nav_item} ${classes.active}`}>Profile</div>
      <div className={classes.nav_item}>Messages</div>
      <div className={classes.nav_item}>Friends</div>
      <div className={classes.nav_item}>News</div>
      <div className={classes.nav_item}>Photo</div>
      <div className={classes.nav_item}>Video</div>
      <div className={classes.nav_item}>Music</div>
      <div className={`${classes.nav_item} ${classes.nav_item_set}`}>Settings</div>
    </nav>
  );
}

export default Navigation;
