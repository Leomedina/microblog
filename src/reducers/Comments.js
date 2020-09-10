import { ADD_COMMENT } from './actionTypes';
import INITIAL_STATE from './initialCommentState';


export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        [action.payload.id]: {
          comments: [...state[action.payload.id].comments, action.payload.comment]
        }
      };
    default:
      return state;
  };
};