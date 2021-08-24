import React from "react";
import BackgroundPhoto from "./BackgroundPhoto";
import UserData from "./UserData/UserData";
import PostsForm from "./Posts/PostsForm/PostsForm";
import Post from "./Posts/Post/Post";


const Profile = (props) => {

  const shownPosts = props.profilePageData.postsData
    .map(({ avatar, message, id  }) => <Post avatar={avatar} message={message}/>);

  return (
    <div>
      <BackgroundPhoto />
      <UserData />
      <PostsForm
        addTextInField={props.addNewPost}
        updateForm={props.updatePostForm}
        currentFormValue={props.profilePageData.currentPostText}
      />
      { shownPosts }
    </div>
  )
};

export default Profile;
