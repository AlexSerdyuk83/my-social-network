const ADD_MESSAGE_TYPE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_FORM_VALUE_TYPE = 'UPDATE-MESSAGE-FORM-VALUE';

export const addNewMessageActionCreator = () => ({ type: ADD_MESSAGE_TYPE });

export const addUpdateMessageFormValueActionCreator = (value) => (
  { type: UPDATE_MESSAGE_FORM_VALUE_TYPE, value: value }
);

const initialState = {
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
};

export const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_FORM_VALUE_TYPE:
      state.currentMessageText = action.value;
      return state;
    case ADD_MESSAGE_TYPE:
      const newMessage = {id: 1, message: state.currentMessageText};
      state.messagesData.push(newMessage);
      state.currentMessageText = '';
      return state;
    default:
      return state;
  }
};
