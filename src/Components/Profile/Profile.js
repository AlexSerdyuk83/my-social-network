import React from "react";
import BackgroundPhoto from "./BackgroundPhoto";
import UserData from "./UserData/UserData";
import PostsForm from "./Posts/PostsForm/PostsForm";
import Post from "./Posts/Post/Post";


const Profile = () => {
  return (
    <div>
      <BackgroundPhoto />
      <UserData />
      <PostsForm />
      <Post avatar={'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png'} message={'Hi? how are you?'}/>
      <Post avatar={'https://vjoy.cc/wp-content/uploads/2019/06/1-12.jpg'} message={'What are you doing?'}/>
    </div>
  )
};

export default Profile;
