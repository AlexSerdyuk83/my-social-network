import React from "react";
import UserName from "../../UserName/UserName";
import classes from "./UserPersonalData.module.css";

const UserPersonalData = () => {
  return (
    <div className={classes.container}>
      <UserName />
      <ul className={classes.list_data}>
        <li className={classes.list_data_item}><b>Date of Birth:</b> 03 november</li>
        <li className={classes.list_data_item}><b>City:</b> Brest</li>
        <li className={classes.list_data_item}><b>Education:</b> SIBSAU'06</li>
        <li className={classes.list_data_item}><b>E-mail:</b> av.serdyuk83@yandex.by </li>
      </ul>
    </div>
  )
};

export default UserPersonalData;
