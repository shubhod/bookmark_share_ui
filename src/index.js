import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { reduxStore } from './reduxStore';
ReactDOM.render(
  <Provider store={reduxStore}><App /></Provider>,
  document.getElementById('root')
);
