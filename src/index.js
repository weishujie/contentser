import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './container/container'
import Content from './compoent/content';
import Detail from './teacher/detail';
import View from './teacher2/view';
import Login from './login/login';
import { Router, Route, hashHistory,IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from  'redux'
import todo from './reducers';
import Super from"./super/super"
let store = createStore(todo);

// console.log({createStore})

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Login}/>
            <Route path="/teacher" component={Container}>
                <IndexRoute component={Login}/>
                <Route path="/super" component={Super}/>
                <Route path="index" component={Content}/>
                <Route path="detail" component={Detail}/>
                <Route path="view" component={View}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);