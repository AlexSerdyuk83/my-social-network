import {updatePostFormActionCreator} from "./actionCreators/updatePostFormActionCreator";
import {addNewPostActionCreator} from "./actionCreators/addNewPostActionCreator";
import {updateMessageFormValueActionCreator} from "./actionCreators/updateMessageFormValueActionCreator";
import {addNewMessageActionCreator} from "./actionCreators/addNewMessageActionCreator";

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
    default: return undefined;
  }
};
