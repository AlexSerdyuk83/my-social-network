const ADD_POST_TYPE = 'ADD_POST';
const UPDATE_POST_FORM_VALUE_TYPE = 'UPDATE-POST-FORM-VALUE';

export const addNewPostActionCreator = () => ({ type: ADD_POST_TYPE });

export const addUpdatePostFormActionCreator = (value) => ({ type: UPDATE_POST_FORM_VALUE_TYPE, value: value });

const initialState = {
  postsData: [
    {id: 1, avatar: 'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png', message: 'Hi? how are you?'},
    {id: 2, avatar: 'https://vjoy.cc/wp-content/uploads/2019/06/1-12.jpg', message: 'What are you doing?'}
  ],
  currentPostText: ''
};

export const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POST_FORM_VALUE_TYPE:
      state.currentPostText = action.value;
      return state;
    case ADD_POST_TYPE:
      const newPost = {
        id: 3,
        avatar: 'https://www.meme-arsenal.com/memes/96ab6670dd7f1adeb25bfd388abbeb93.jpg',
        message: state.currentPostText,
      };
      state.postsData.push(newPost);
      state.currentPostText = '';
      return state;
    default:
      return state;
  }
};
