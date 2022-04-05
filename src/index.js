import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bulma/css/bulma.css";//css stylesheet across all components
//to import dependencies inside React file in order to use bootstrap classes in our React app components.
//import $ from 'jquery'; //install jquery & popper.js
//import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
