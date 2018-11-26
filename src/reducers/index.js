import { combineReducers } from 'redux';
import { reducer as formreducer } from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts : PostsReducer,
  form : formreducer
});

export default rootReducer;
