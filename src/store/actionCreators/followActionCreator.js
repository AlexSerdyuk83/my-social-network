import {FOLLOW_USER_TYPE} from "../actions/actionTypes";

export const followActionCreator = (userId) => ({ type: FOLLOW_USER_TYPE, userId: userId });
