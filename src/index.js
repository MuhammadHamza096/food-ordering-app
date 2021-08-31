/* eslint-disable sort-imports-es6-autofix/sort-imports-es6 */
/* eslint-disable import/order */
import './index.css';
import { Provider } from 'react-redux';
import React from 'react';
import App from './App';
import MaterialThemeWrapper from './theme';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

ReactDOM.render(
  <MaterialThemeWrapper>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </MaterialThemeWrapper>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
