import React from "react";
import classes from "./Status.module.css";

const Status = (props) => {
  return (
    <div className={classes.container}>
      <span>{props.status}</span>
    </div>
  )
};

export default Status;
