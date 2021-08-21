import React from "react";
import classes from "./Message.module.css";

const Message = ({ message }) => {
  return (
    <div className={classes.message_container}>
      { message }
    </div>
  )
};

export default Message;
