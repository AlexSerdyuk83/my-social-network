import React from "react";
import classes from "./PostsForm.module.css";
import Button from "../../../Buttons/Button";


const PostsForm = ({ updateForm, currentFormValue, addTextInField }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formRef = React.createRef();

  const getTextFromForm = () => {
    const formData = new FormData(formRef.current);
    return formData.get('postText');
  };

  const updateValueInForm = () => {
    const inputText = getTextFromForm();
    updateForm(inputText);
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit} ref={formRef}>
      <label>My posts</label>
      <input
        id={'post_form'}
        name='postText'
        type="text"
        placeholder={'your message...'}
        value={currentFormValue}
        onChange={updateValueInForm}
      />
      <Button callback={addTextInField} value={'Send'}/>
    </form>
  );
};

export default PostsForm;
