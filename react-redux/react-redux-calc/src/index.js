import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import CalReducer from './store/CalReducer/CalReducer';




 // createStore will accept reducer and give us a new store 
 const store = createStore(CalReducer);

 // Provider will inject store to the react application , we need to wrap highest container with Provider and pass the store which then will be available to the container.

ReactDOM.render(
<Provider store={store}>
    <App />
 </Provider>, document.getElementById('root')); // store is available to entire application


