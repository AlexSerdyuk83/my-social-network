import React from "react";
import AvatarMain from "../../Avatars/AvatarMain";
import classes from "./UserData.module.css";
import UserPersonalData from "./UserPersonalData";

const UserData = () => {
  return (
    <div className={classes.container}>
      <AvatarMain avatar={'https://cdnimg.rg.ru/img/content/177/18/63/1000s_d_850.jpg'}/>
      <UserPersonalData />
    </div>
  )
}

export default UserData;
