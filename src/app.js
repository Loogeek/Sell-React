import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import connect from 'app/connect/index';
import Seller from 'containers/Seller';
// import Goods from 'components/Goods';
import 'whatwg-fetch';

@connect()
export default class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Seller} >
                    {
                        // <IndexRedirect to="/goods" />
                        // <Route path="seller" component={Seller}></Route>
                        // <Route path="goods" component={Goods}></Route>
                    }
                </Route>
            </Router>
        );
    }
}
