import {profilePageReducer} from "./profilePageReducer";
import {dialogsPageReducer} from "./dialogsPageReducer";

const oldStore = {
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

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscribe = observer;
  },

  dispatch(action) {
    this._state.profilePageData = profilePageReducer(this._state.profilePageData, action);
    this._state.dialogsPageData = dialogsPageReducer(this._state.dialogsPageData, action);
    this._callSubscribe(this._state);
  }
};
