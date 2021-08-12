import React from "react";
import classes from "./UserPreview.module.css"
import UserName from "../UserName/UserName";
import AvatarPreview from "../Avatars/AvatarPreview";

const UserPreview = ()  => {
  return (
    <div className={classes.userPreview_container}>
      <UserName />
      <AvatarPreview avatar={'https://cdnimg.rg.ru/img/content/177/18/63/1000s_d_850.jpg'}/>
    </div>
  )
};

export default UserPreview;
