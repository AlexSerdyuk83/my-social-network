import React from "react";
import AvatarMain from "../../Avatars/AvatarMain";
import classes from "./UserData.module.css";
import UserPersonalData from "./UserPersonalData";

const UserData = () => {
  return (
    <div className={classes.container}>
      <AvatarMain avatar={'https://m.buro247.ru/images/senina/original234567890-.jpg'}/>
      <UserPersonalData />
    </div>
  )
}

export default UserData;
