import {ADD_POST_TYPE, UPDATE_POST_FORM_VALUE_TYPE} from "../actions/actionTypes";

const initialState = {
  postsData: [
    {id: 1, avatar: 'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png', message: 'Hi? how are you?'},
    {id: 2, avatar: 'https://vjoy.cc/wp-content/uploads/2019/06/1-12.jpg', message: 'What are you doing?'}
  ],
  currentPostText: ''
};

export const profilePageReducer = (state = initialState, action) => {
  // let stateCopy = {};
  // Object.assign(stateCopy, state);
  const stateCopy = {
    ...state,
    postsData: [...state.postsData],
    currentPostText: state.currentPostText
  }
  switch (action.type) {
    case UPDATE_POST_FORM_VALUE_TYPE:
      stateCopy.currentPostText = action.value;
      return stateCopy;
    case ADD_POST_TYPE:
      const newPost = {
        id: 3,
        avatar: 'https://www.meme-arsenal.com/memes/96ab6670dd7f1adeb25bfd388abbeb93.jpg',
        message: state.currentPostText,
      };
      stateCopy.postsData.push(newPost);
      stateCopy.currentPostText = '';
      return stateCopy;
    default:
      return stateCopy;
  }
};
