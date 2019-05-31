import React from 'react';
import ReactDOM from 'react-dom';
import OfferApp from './containers/offer/Offer';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import offerReducer from './reducers/offer'

import './style.css';

const store = createStore(offerReducer);

ReactDOM.render(
    <Provider store={store}>
        <OfferApp />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA