import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import "./style/bootstrap.min.css";
import "./style/style.css";
import { legacy_createStore } from 'redux';
import reducer from './config/reducer';

const store = legacy_createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
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
