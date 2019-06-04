import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink, HashRouter } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducers from './reducers/Reducer'

import Offer from './containers/offer/Offer';
import Comment from './containers/Comment';
import './style.css';

const store = createStore(Reducers);
const activeStyle = {
    fontWeight: 'bold',
    color: '#ccc'
};
// const store = createStore(offerReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="nav-body">
                <NavLink to='/' className="nav" exact activeStyle={activeStyle}>to offer page</NavLink>
                <NavLink to='/comment' className="nav" activeStyle={activeStyle}>to comment page</NavLink>
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