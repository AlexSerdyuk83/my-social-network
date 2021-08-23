import React from "react";
import {addNewMessageActionCreator, addUpdateMessageFormValueActionCreator} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = ({ dialogsPageData, dispatch }) => {

  const onUpdateDialogsForm = (inputText) => {
    const action = addUpdateMessageFormValueActionCreator(inputText)
    dispatch(action);
  };

  const onAddNewMessage = () => {
    const action = addNewMessageActionCreator();
    dispatch(action);
  };

  return <Dialogs
    updateDialogsForm={onUpdateDialogsForm}
    addNewMessage={onAddNewMessage}
    dialogs={dialogsPageData.dialogsData}
    messages={dialogsPageData.messagesData}
    currentFormValue={dialogsPageData.currentMessageText}
  />
};

export default DialogsContainer;
