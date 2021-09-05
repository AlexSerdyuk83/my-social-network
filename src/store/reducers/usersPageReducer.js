import {FOLLOW_USER_TYPE, SET_USERS_TYPE, UNFOLLOW_USER_TYPE} from "../actions/actionTypes";


// const initialState = {
//   users: [{
//     id: 1,
//     name: 'Sasha A.',
//     avatar: 'https://sun9-16.userapi.com/impf/c840336/v840336463/49ae6/5DMwdk-7Yuc.jpg?size=453x604&quality=96&sign=92a626ae0400a10597a5368b3165bd4e&type=album',
//     status: 'I am so good man!',
//     location: {country: 'Belarus', city: 'Brest'},
//     followed: true
//   },
//     {
//       id: 2,
//       name: 'Mihail V.',
//       avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKETeDJmm1fyopoteZZybLqkL4aOMNgy8Ymg&usqp=CAU',
//       status: 'How are you?',
//       location: {country: 'Russia', city: 'Moscow'},
//       followed: false
//     },
//     {
//       id: 3,
//       name: 'Masha E.',
//       avatar: 'https://thumbs.dfs.ivi.ru/storage29/contents/2/f/819de6fa850eda7d7de1e01c3aba82.jpg/234x360/',
//       status: 'I am so good woman!',
//       location: {country: 'Ukraine', city: 'Kiev'},
//       followed: false
//     },
//     {
//       id: 4,
//       name: 'Natasha K.',
//       avatar: 'https://u.kanobu.ru/editor/images/38/16c0fa33-ae04-45a0-814e-77513697d7e3.jpg',
//       status: 'Hello, all!',
//       location: {country: 'Poland', city: 'Warshaw'},
//       followed: true
//     }]
// };

const initialState = {
  users: [],
}

export const usersPageReducer = (state= initialState, action) => {
  debugger
  switch (action.type) {
    case FOLLOW_USER_TYPE:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user;
        })
      }
    case UNFOLLOW_USER_TYPE:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user;
        })
      }
    case SET_USERS_TYPE:
      debugger
      return ({
        ...state,
        users: [...action.users]
      })
    default:
      return state;
  }
};
