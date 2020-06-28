import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { ConnectedRouter } from 'connected-react-router';
import configureStore from './Store/configureStore';
import App from './App';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store.store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
