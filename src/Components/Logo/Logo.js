import React from "react";
import classes from "./Logo.module.css";
import logo from "../../images/logo.svg";

const Logo = () => {
  return (
    <div className={classes.logo_item}>
      <img src={logo} alt="Logo"/>
    </div>
  )
}

export default Logo;
