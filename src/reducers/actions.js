/**
 * 
 *  Actions for Blog Reducer 
 * 
 */

import { ADD_BLOG, ADD_COMMENT } from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

export const addBlog = (title, description, body) => {
  return {
    type: ADD_BLOG,
    payload: {
      id: uuidv4(),
      title,
      description,
      body,
      votes: 0
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
  }
}