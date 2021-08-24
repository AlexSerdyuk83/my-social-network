import {combineReducers} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {dialogsPageReducer} from "./dialogsPageReducer";


export const rootReducer = combineReducers({
  profilePageData: profilePageReducer,
  dialogsPageData: dialogsPageReducer
});
