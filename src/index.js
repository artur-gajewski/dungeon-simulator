import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux';
import AdventureList from './containers/AdventureList';
import Adventure from './containers/Adventure';
import Home from './components/Home';
import News from './components/News';
import Store from './store';

import './index.css';

const storeInstance = Store();

const history = syncHistoryWithStore(browserHistory, storeInstance)

ReactDOM.render(
    <Provider store={storeInstance}>
        <Router history={history}>
            <Route path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/list" component={AdventureList} />
            <Route path="/adventure" component={Adventure} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
