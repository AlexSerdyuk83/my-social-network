import React from "react";
import classes from "./Button.module.css";

const Button = ({ callback, value }) => {

  debugger
  return (
    <>
      <button className={classes.btn_style} onClick={ callback }>{value}</button>
    </>
  )
};

export default Button;
