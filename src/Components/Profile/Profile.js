import React from "react";
import BackgroundPhoto from "./BackgroundPhoto";
import UserData from "./UserData/UserData";
import PostsForm from "./Posts/PostsForm/PostsForm";
import Post from "./Posts/Post/Post";
import {addNewPostActionCreator, addUpdatePostFormActionCreator} from "../redux/state";


const Profile = ({ profilePageData, dispatch }) => {

  const shownPosts = profilePageData.postsData
    .map(({ avatar, message, id  }) => <Post avatar={avatar} message={message}/>);

  const updatePostForm = (inputText) => {
    const action = addUpdatePostFormActionCreator(inputText);
    dispatch(action);
  };

  const addNewPost = () => {
    const action = addNewPostActionCreator();
    dispatch(action);
  };

  return (
    <div>
      <BackgroundPhoto />
      <UserData />
      <PostsForm
        addTextInField={addNewPost}
        updateForm={updatePostForm}
        currentFormValue={profilePageData.currentPostText}
      />
      { shownPosts }
    </div>
  )
};

export default Profile;
