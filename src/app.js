import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import Seller from 'containers/Seller';
import Goods from 'containers/Goods';
import 'whatwg-fetch';

export default class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Seller} >
                    <Route path="goods" component={Goods}></Route>
                </Route>
            </Router>
        );
    }
}
