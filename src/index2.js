import React from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './containers/CommentApp';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import commentsReducer from './reducers/comment'

import './style.css';

const store = createStore(commentsReducer);

ReactDOM.render(
    <Provider store={store}>
        <CommentApp />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA