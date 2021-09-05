import React from "react";
import classes from "./FollowedUserBtn.module.css";


const FollowedUserBtn = (props) => {

  const followedUser = () => props.callback(props.id);

  return (
    <div className={classes.container}>
      <button className={classes.container_btn} onClick={followedUser}>{props.btnName}</button>
    </div>
  )
};

export default FollowedUserBtn;
