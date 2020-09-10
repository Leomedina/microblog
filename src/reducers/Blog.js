import { ADD_BLOG, DELETE_BLOG, LOAD_BLOGS, UPDATE_BODY, VOTE_UP, VOTE_DOWN } from './actionTypes';
import INITIAL_STATE from './initialBlogState';


export default function blog(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_BLOG:
      return {
        ...state,
        [action.payload.id]: {
          title: action.payload.title,
          description: action.payload.description,
          body: action.payload.body,
          votes: 0
        }
      };
    case DELETE_BLOG:
      delete state[action.payload.id];
      return {
        ...state,
      };
    case UPDATE_BODY:
      const id = action.payload.id;
      return {
        ...state,
        [id]: {
          title: state[id].title,
          description: state[id].description,
          body: action.payload.body,
          votes: state[id].votes
        }
      };
    case VOTE_UP:
      const post_id = action.payload.id;
      return {
        ...state,
        [post_id]: {
          title: state[post_id].title,
          description: state[post_id].description,
          body: action.payload.body,
          votes: state[post_id].votes + 1
        }
      };
    case VOTE_DOWN:
      const blog_id = action.payload.id;
      return {
        ...state,
        [blog_id]: {
          title: state[blog_id].title,
          description: state[blog_id].description,
          body: action.payload.body,
          votes: state[blog_id].votes - 1
        }
      };
    case LOAD_BLOGS:
      const newBlogs = {};
      const loadedBlogs = action.payload.blogs.data;
      loadedBlogs.map(blog => {
        return (
          newBlogs[blog.id] = {
            title: blog.title,
            description: blog.description,
            votes: blog.votes,
          })
      })
      return {
        ...state,
        ...newBlogs
      }
    default:
      return state;
  };
};