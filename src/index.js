import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducers from './reducers/Reducer'

import Offer from './containers/offer/Offer';
import Comment from './containers/Comment';
import './style.css';

const store = createStore(Reducers);
console.log(store.getState())
// const store = createStore(offerReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Link to='/'>to offer page</Link>
                <Link to='/comment'>to comment page</Link>
            </div>
            <Switch>
                <Route path='/' exact component={Offer}></Route>
                <Route path='/comment' component={Comment}></Route>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA