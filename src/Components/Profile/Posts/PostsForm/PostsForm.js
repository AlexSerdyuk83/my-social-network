import React from "react";
import classes from "./PostsForm.module.css";
import Button from "../../../Buttons/Button";

const PostsForm = () => {
  return (
    <form className={classes.container}>
      <label>My posts</label>
      <input id={'post_form'} type="text" placeholder={'your news...'}/>
      <Button />
    </form>
  )
}

export default PostsForm;
