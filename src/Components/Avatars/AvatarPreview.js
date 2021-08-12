import React from "react";
import classes from "./AvatarPreview.module.css";

const AvatarPreview = ({ avatar }) => {
  return (
    <>
      <img  className={classes.avatar_item} src={ avatar } alt="User avatar"/>
    </>
  )
};

export default AvatarPreview;
