import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import rootReducer from './store/reducers/index'
import { createStore } from 'redux'

let store = createStore(rootReducer)

ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

