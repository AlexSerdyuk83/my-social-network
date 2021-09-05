import {updatePostFormActionCreator} from "./actionCreators/updatePostFormActionCreator";
import {addNewPostActionCreator} from "./actionCreators/addNewPostActionCreator";
import {updateMessageFormValueActionCreator} from "./actionCreators/updateMessageFormValueActionCreator";
import {addNewMessageActionCreator} from "./actionCreators/addNewMessageActionCreator";
import {followActionCreator} from "./actionCreators/followActionCreator";
import {unfollowActionCreator} from "./actionCreators/unfollowActionCreator";
import {setUsersActionCreator} from "./actionCreators/setUsersActionCreator";

export const mapDispatchToPropsGenerator = (component) => {
  switch (component) {
    case 'Profile':
      return (dispatch) => ({
        updatePostForm: (value) => dispatch(updatePostFormActionCreator(value)),
        addNewPost: () => dispatch(addNewPostActionCreator()),
      });
    case 'Dialogs':
      return (dispatch) => ({
        updateDialogsForm: (value) => dispatch(updateMessageFormValueActionCreator(value)),
        addNewMessage: () => dispatch(addNewMessageActionCreator())
      });
    case 'Users':
      debugger
      return (dispatch) => ({
        follow: (userId) => dispatch(unfollowActionCreator(userId)),
        unfollow: (userId) => dispatch(followActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users))
      })
    default: return undefined;
  }
};
