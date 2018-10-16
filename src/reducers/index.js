import { combineReducers } from 'redux';
import userImagesReducer from './userimage';

const rootReducer = combineReducers({
  userImages: userImagesReducer
});

export default rootReducer;