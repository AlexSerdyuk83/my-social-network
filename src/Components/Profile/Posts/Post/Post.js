import React from "react";
import AvatarPreview from "../../../Avatars/AvatarPreview";
import classes from "./Posts.module.css";

const Post = ({ avatar, message }) => {
  return (
    <div className={classes.posts_container}>
      <AvatarPreview avatar={ avatar }/>
      <p>{ message }</p>
    </div>
  )
};

export default Post;
