import { ADD_COMMENT, INIT_COMMENT, DELETE_COMMENT } from './actionTypes';
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
    case DELETE_COMMENT:
      const id = action.payload.id;
      const newComments = state[id].comments.filter(comment => comment !== action.payload.comment);
      return {
        ...state,
        [id]: {
          comments: [...newComments]
        }
      }
    case INIT_COMMENT:
      return {
        ...state,
        [action.payload.id]: {
          comments: []
        }
      };
    default:
      return state;
  };
};