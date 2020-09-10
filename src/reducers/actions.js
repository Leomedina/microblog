/**
 * 
 *  Actions for Blog and Comment Reducers 
 * 
 */

import { ADD_BLOG, DELETE_BLOG } from './actionTypes';
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

// export const deleteBlog = (cartId, price) => {
//   return {
//     type: REMOVE_FROM_CART,
//     payload: {
//       cartId,
//       price
//     }
//   };
// };