import React from "react";
import classes from "./UserName.module.css";

const UserName = ({ name }) => {
  return (
    <div className={classes.name_container}>
      <p className={classes.name_item}>{ name }</p>
    </div>
  )
};

export default UserName;
