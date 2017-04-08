import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/normalize.css';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';

const store = configureStore();
import './styles/index.css';


ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
  document.getElementById('root')
);