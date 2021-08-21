const ADD_POST_TYPE = 'ADD_POST';
const UPDATE_POST_FORM_VALUE_TYPE = 'UPDATE-POST-FORM-VALUE';
const ADD_MESSAGE_TYPE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_FORM_VALUE_TYPE = 'UPDATE-MESSAGE-FORM-VALUE';

export const store = {
  _state: {
    profilePageData: {
      postsData: [
        {id: 1, avatar: 'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png', message: 'Hi? how are you?'},
        {id: 2, avatar: 'https://vjoy.cc/wp-content/uploads/2019/06/1-12.jpg', message: 'What are you doing?'}
      ],
      currentPostText: ''
    },

    dialogsPageData: {
      dialogsData: [
        {id: 1, name: 'Igor', avatar: 'https://img1.akspic.ru/previews/9/7/0/5/6/165079/165079-benedikt_kamberbetch-doktor_strendzh-blu_ray_disk-volosy-svet-360x640.jpg'},
        {id: 2, name: 'Evgeniy', avatar: 'https://www.vokrug.tv/pic/person/2/2/d/b/22db573c1118bc091c4267e15258d8ce.jpeg'},
        {id: 3, name: 'Olenka', avatar: 'https://gamebomb.ru/files/galleries/001/a/ab/382349.jpg'},
        {id: 4, name: 'Maksim', avatar: 'https://www.soyuz.ru/public/uploads/files/2/7219517/201808021504211a8a069e1d.jpg'},
        {id: 5, name: 'Ekaterina', avatar: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg86492.jpg'}
      ],
      messagesData: [
        {id: 1, message: 'Hello, my Friend!!!'}
      ],
      currentMessageText: ''
    }
  },
  _callSubscribe() {},
  _updatePostFormValue(value) {
    this._state.profilePageData.currentPostText = value;
    this._callSubscribe(this._state);
  },
  _addPost() {
    const newPost = {
      id: 3,
      avatar: 'https://www.meme-arsenal.com/memes/96ab6670dd7f1adeb25bfd388abbeb93.jpg',
      message: this._state.profilePageData.currentPostText,
    };
    this._state.profilePageData.postsData.push(newPost);
    this._callSubscribe(this._state);
    this._state.profilePageData.currentPostText = '';
  },
  _updateMessageFormValue(value) {
    this._state.dialogsPageData.currentMessageText = value;
    this._callSubscribe(this._state);
  },
  _addMessage() {
    const newMessage = {id: 1, message: this._state.dialogsPageData.currentMessageText};
    this._state.dialogsPageData.messagesData.push(newMessage);
    this._callSubscribe(this._state);
    this._state.dialogsPageData.currentMessageText = '';
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscribe = observer;
  },

  dispatch(action) {
    if (action.type === UPDATE_POST_FORM_VALUE_TYPE) {
      this._updatePostFormValue(action.value);
    } else if (action.type === ADD_POST_TYPE) {
      this._addPost();
    } else if (action.type === UPDATE_MESSAGE_FORM_VALUE_TYPE) {
      this._updateMessageFormValue(action.value);
    } else if (action.type === ADD_MESSAGE_TYPE) {
      this._addMessage();
    }
  }
};

export const addNewPostActionCreator = () => ({ type: ADD_POST_TYPE });

export const addUpdatePostFormActionCreator = (value) => ({ type: UPDATE_POST_FORM_VALUE_TYPE, value: value });

export const addNewMessageActionCreator = () => ({ type: ADD_MESSAGE_TYPE });

export const addUpdateMessageFormValueActionCreator = (value) => (
  { type: UPDATE_MESSAGE_FORM_VALUE_TYPE, value: value }
);
