import React from "react";
import classes from "./AvatarMain.module.css";

const AvatarMain = ({ avatar }) => {
  return (
    <>
      <img className={classes.container} src={ avatar } alt=""/>
    </>
  )
}

export default AvatarMain;
