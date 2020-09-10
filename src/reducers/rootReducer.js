import { combineReducers } from 'redux';
import Blog from './Blog';
import Comments from './Comments';

const rootReducer = combineReducers({ Blog, Comments });

export default rootReducer;