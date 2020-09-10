/**
 * 
 *  Actions for Blog Reducer 
 * 
 */

import {
  ADD_BLOG,
  DELETE_BLOG,
  ADD_COMMENT,
  DELETE_COMMENT,
  INIT_COMMENT
} from './actionTypes';


export const addBlog = (id, title, description, body) => {
  return {
    type: ADD_BLOG,
    payload: {
      id,
      title,
      description,
      body,
      votes: 0
    }
  };
};

export const deleteBlog = (id) => {
  return {
    type: DELETE_BLOG,
    payload: {
      id
    }
  };
};

/**
 *
 * Actions for Comment Reducer
 *
 */

export const addComment = (id, comment) => {
  return {
    type: ADD_COMMENT,
    payload: {
      id,
      comment
    }
  };
};

export const deleteComment = (id, comment) => {
  return {
    type: DELETE_COMMENT,
    payload: {
      id,
      comment
    }
  };
};

export const initComments = (id) => {
  return {
    type: INIT_COMMENT,
    payload: {
      id
    }
  };
};