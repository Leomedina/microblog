
import {
  ADD_BLOG, DELETE_BLOG, LOAD_BLOGS,
  UPDATE_BODY, ADD_COMMENT, DELETE_COMMENT,
  INIT_COMMENT, VOTE_UP 
} from './actionTypes';

import axios from 'axios';

/**
 * 
 *  Actions for Blog Reducer 
 * 
 */


export const addBlogToRedux = (id, title, description, body) => {
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


export const deleteBlogFromRedux = (id) => {
  return {
    type: DELETE_BLOG,
    payload: {
      id
    }
  };
};

export const loadBlogs = (blogs) => {
  return {
    type: LOAD_BLOGS,
    payload: {
      blogs
    }
  };
};

export const updateBody = (id, body) => {
  return {
    type: UPDATE_BODY,
    payload: {
      id,
      body,
    }
  };
};

export const voteRedux = (id, direction) => {
  return {
    type: direction,
    payload: {
      id,
      direction
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


/**
 * 
 *  THUNK action creators
 * 
 */

export const getBlogsFromAPI = () => {
  return async function (dispatch) {
    const response = await axios.get('http://localhost:5000/api/posts');
    dispatch(loadBlogs(response));
  };
};

export const updatePostBodyFromAPI = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
    const body = response.data.body;
    dispatch(updateBody(id, body));
  };
};

export const addBlog = (title, description, body) => {
  return async function (dispatch) {
    const response = await axios.post('http://localhost:5000/api/posts', {
      title,
      description,
      body
    });
    dispatch(addBlogToRedux(response.data.id, title, description, body));
  };
};

export const deleteBlog = (id) => {
  return async function (dispatch) {
    await axios.delete(`http://localhost:5000/api/posts/${id}`)
    dispatch(deleteBlogFromRedux(id));
  };
};

export const voteAPI = (id, direction) => {
  let newDirection = VOTE_UP ? "up" : "down";
  return async function (dispatch) {
    await axios.post(`http://localhost:5000/api/posts/${id}/vote/${newDirection}`);
    dispatch(voteRedux(id, direction));
  }
}