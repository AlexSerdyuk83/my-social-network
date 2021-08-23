import React from "react";
import BackgroundPhoto from "./BackgroundPhoto";
import UserData from "./UserData/UserData";
import PostsForm from "./Posts/PostsForm/PostsForm";
import Post from "./Posts/Post/Post";


const Profile = ({ addNewPost, updatePostForm, currentFormValue, posts }) => {

  const shownPosts = posts
    .map(({ avatar, message, id  }) => <Post avatar={avatar} message={message}/>);

  return (
    <div>
      <BackgroundPhoto />
      <UserData />
      <PostsForm
        addTextInField={addNewPost}
        updateForm={updatePostForm}
        currentFormValue={currentFormValue}
      />
      { shownPosts }
    </div>
  )
};

export default Profile;
