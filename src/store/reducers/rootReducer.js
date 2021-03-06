import {combineReducers} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {usersPageReducer} from "./usersPageReducer";


export const rootReducer = combineReducers({
  profilePageData: profilePageReducer,
  dialogsPageData: dialogsPageReducer,
  usersPageData: usersPageReducer
});
