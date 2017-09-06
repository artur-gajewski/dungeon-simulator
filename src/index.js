import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux';
import App from './containers/App';
import Home from './components/Home';
import News from './components/News';
import Adventures from './components/Adventures';
import Store from './store';

const storeInstance = Store();

const history = syncHistoryWithStore(browserHistory, storeInstance)

ReactDOM.render(
    <Provider store={storeInstance}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="news" component={News} />
                <Route path="adventures" component={Adventures} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
