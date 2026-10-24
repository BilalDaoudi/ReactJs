import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import reducer from "./config/reducer";

const st = legacy_createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={st}>
    <App />
  </Provider>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import MyComponent from './MyCompenent';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <MyComponent />
// );
