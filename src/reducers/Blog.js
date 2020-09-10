import { ADD_BLOG, DELETE_BLOG } from './actionTypes';
import INITIAL_STATE from './initialBlogState';


export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_BLOG:
      return {
        ...state,
        [action.payload.id]: {
          title: [action.payload.title],
          description: [action.payload.description],
          body: [action.payload.body]
        }
      };
    case DELETE_BLOG:
      return state;
    default:
      return state;
  };
};