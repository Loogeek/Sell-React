import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import SellerWrapper from 'containers/SellerWrapper';
import Ratings from 'containers/Ratings';
import Goods from 'containers/Goods';
import Seller from 'containers/Seller';

export default class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={SellerWrapper} >
                    <IndexRoute component={Goods} />
                    <Route path="goods" component={Goods}></Route>
                    <Route path="ratings" component={Ratings}></Route>
                    <Route path="seller" component={Seller}></Route>
                </Route>
            </Router>
        );
    }
}
