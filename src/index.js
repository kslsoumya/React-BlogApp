import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter , Route , Switch} from 'react-router-dom'

import PostsIndex from './components/posts_index'
import PostNew from './components/post_new';
import PostShow from './components/post_show'
import reducers from './reducers';
import ReduxPromise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Switch>
      <Route path ="/posts/new" component ={PostNew} />
      <Route path ="/posts/:id" component ={PostShow} />
      <Route path ="/" component ={PostsIndex} />
   
    </Switch>
    </div>



    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
