import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import Seller from 'components/Seller';
import Goods from 'components/Goods';
import 'whatwg-fetch';

export default class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/">
                    <IndexRedirect to="/seller" />
                    <Route path="seller" component={Seller}></Route>
                    <Route path="goods" component={Goods}></Route>
                </Route>
            </Router>
        );
    }
}
