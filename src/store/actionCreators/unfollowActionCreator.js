import {UNFOLLOW_USER_TYPE} from "../actions/actionTypes";

export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW_USER_TYPE, userId: userId });
