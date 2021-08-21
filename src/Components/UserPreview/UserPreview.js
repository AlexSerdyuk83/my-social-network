import React from "react";
import classes from "./UserPreview.module.css"
import UserName from "../UserName/UserName";
import AvatarPreview from "../Avatars/AvatarPreview";

const UserPreview = ({ name, avatar })  => {
  return (
    <div className={classes.userPreview_container}>
      <UserName name={name}/>
      <AvatarPreview avatar={avatar}/>
    </div>
  )
};

export default UserPreview;
