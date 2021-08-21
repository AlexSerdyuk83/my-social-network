import React from "react";
import classes from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={classes.nav_container}>
      <div className={classes.nav_item}><NavLink to={'/profile'} activeClassName={classes.activeLink}>Profile</NavLink></div>
      <div className={classes.nav_item}><NavLink to={'/dialogs'} activeClassName={classes.activeLink}>Messages</NavLink></div>
      <div className={classes.nav_item}><NavLink to={'friends'} activeClassName={classes.activeLink}>Friends</NavLink></div>
      <div className={classes.nav_item}><NavLink to={'/news'} activeClassName={classes.activeLink}>News</NavLink></div>
      <div className={classes.nav_item}><NavLink to={'/photo'} activeClassName={classes.activeLink}>Photo</NavLink></div>
      <div className={classes.nav_item}><NavLink to={'/video'} activeClassName={classes.activeLink}>Video</NavLink></div>
      <div className={classes.nav_item}><NavLink to={'/music'} activeClassName={classes.activeLink}>Music</NavLink></div>
      <div className={`${classes.nav_item} ${classes.nav_item_set}`}><NavLink to={'/settings'} activeClassName={classes.activeLink}>Settings</NavLink></div>
    </nav>
  );
}

export default Navigation;
