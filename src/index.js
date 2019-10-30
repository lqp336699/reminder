import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux"
import { createStore,applyMiddleware } from 'redux'
import rootReducer from './reducer/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger)
    )
);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

