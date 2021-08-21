import React from "react";
import classes from "./Button.module.css";

const Button = ({ addTextInField }) => {

  return (
    <>
      <button className={classes.btn_style} onClick={ addTextInField }>Send</button>
    </>
  )
};

export default Button;
