import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { reduxStore } from './reduxStore';
import LoginScreen from './screens/Login/LoginScreen';
ReactDOM.render(
  <Provider store={reduxStore}><App/></Provider>,
  document.getElementById('root')
);
