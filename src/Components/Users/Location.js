import React from "react";
import classes from "./Location.module.css";

const Location = (props) => {
  return (
    <div className={classes.container}>
      <p>{ props.city }</p>
      <p>{ props.country }</p>
    </div>
  )
};

export default Location;
