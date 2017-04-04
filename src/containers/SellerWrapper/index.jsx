import React from 'react';
import { Link } from 'react-router';
import connect from 'app/connect/index';
import Header from 'components/Header';
import Goods from 'containers/Goods';
import classnames from 'classnames';
import './style.scss';

@connect
export default class SellerWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seller: {},
            loading: true
        };
    }

    componentWillMount() {
        this.props.actions.fetchSellerList().then(() =>
            this.setState({
                seller: this.props.seller,
                loading: false
            })
        );
    }

    componentDidMount() {
        const hook = document.querySelector('#sell-wrp-hook');
        hook.style.height = window.innerHeight + 'px';
    }

    render() {
        const { seller, loading } = this.state;
        const { actions, goods, location } = this.props;

        if (seller === undefined) {
            return null;
        }

        return (
            <div className="sell-wrapper" id="sell-wrp-hook">
                <Header seller={seller}></Header>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/goods" className={classnames({'active': location.pathname === '/' || location.pathname === '/goods'})}>商品</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ratings" className={classnames({'active': location.pathname === '/ratings'})}>评价</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/seller" className={classnames({'active': location.pathname === '/seller'})}>商家</Link>
                    </li>
                </ul>
                { this.props.children }
            </div>
        );
    }
}
