import React from "react";
import {addNewPostActionCreator, addUpdatePostFormActionCreator} from "../../redux/profilePageReducer";
import Profile from "./Profile";


const ProfileContainer = ({ profilePageData, dispatch }) => {

  const onUpdatePostForm = (inputText) => {
    const action = addUpdatePostFormActionCreator(inputText);
    dispatch(action);
  };

  const onAddNewPost = () => {
    const action = addNewPostActionCreator();
    dispatch(action);
  };

  return <Profile
    addNewPost={onAddNewPost}
    updatePostForm={onUpdatePostForm}
    posts={profilePageData.postsData}
    currentFormValue={profilePageData.currentPostText}
  />
};

export default ProfileContainer;
