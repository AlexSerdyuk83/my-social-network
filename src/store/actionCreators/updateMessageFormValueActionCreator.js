import {UPDATE_MESSAGE_FORM_VALUE_TYPE} from "../actions/actionTypes";

export const updateMessageFormValueActionCreator = (value) => (
  { type: UPDATE_MESSAGE_FORM_VALUE_TYPE, value: value }
);
