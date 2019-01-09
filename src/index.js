import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './routes/Routes';
// import './index.css';


ReactDOM.render((
  <Provider store={store}>
    <Routes />
  </Provider>
), document.querySelector('#app'));
