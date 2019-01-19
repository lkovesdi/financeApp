import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './store/reducers';
import { fetchGithubData } from './store/actions/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
   composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchGithubData());

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>, document.getElementById('root')
);