import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {contactReducer, socialReducer, socLinkReducer, shapeReducer, pageReducer, styleReducer, addonReducer, valuesReducer} from './assets/reducer';

const allReducers = combineReducers({
  contact: contactReducer,
  social: socialReducer,
  socLink: socLinkReducer,
  shape: shapeReducer,
  style: styleReducer,
  addon: addonReducer,
  values: valuesReducer,
  page: pageReducer
})
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
      <App />
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
