import { ADD_BLOG, DELETE_BLOG } from './actionTypes';
import INITIAL_STATE from './initialBlogState';


export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_BLOG:
      return state;
    case DELETE_BLOG:
      return state;
    default:
      return state;
  };
};