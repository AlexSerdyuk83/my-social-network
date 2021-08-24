import React from "react";
import UserPreview from "../UserPreview/UserPreview";
import classes from "./Dialogs.module.css";
import Message from "./Message";
import {NavLink} from "react-router-dom";
import PostsForm from "../Profile/Posts/PostsForm/PostsForm";

const DialogItem = ({ id, name, avatar }) => {
  const path = `/dialogs/${id}`;
  return (
    <NavLink to={ path } activeClassName={classes.activeLink}>
      <UserPreview name={ name }
                   avatar={ avatar }/>
    </NavLink>
  );
};

const Dialogs = (props) => {

  const shownDialogsData = props.dialogsPageData.dialogsData
    .map(({id, name, avatar}) => <DialogItem id={id} name={name} avatar={avatar} />);

  const shownMessagesData = props.dialogsPageData.messagesData
    .map(({ message }) => <Message message={message} />);

  return (
    <div className={classes.dialogs_container}>
      <div className={classes.dialogs_interlocutor_container}>
        { shownDialogsData }
      </div>
      <div className={classes.dialogs_messages_container}>
        { shownMessagesData }
        <PostsForm
          updateForm={props.updateDialogsForm}
          addTextInField={props.addNewMessage}
          currentFormValue={props.dialogsPageData.currentMessageText}
        />
      </div>
    </div>
  )
};

export default Dialogs;
