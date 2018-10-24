import { combineReducers } from 'redux';
import userImagesReducer from './userimage';
import artistsReducer from './artists';
import motifsReducer from './motifs'

const rootReducer = combineReducers({
  userImages: userImagesReducer,
  artists: artistsReducer,
  motifs: motifsReducer
});

export default rootReducer;