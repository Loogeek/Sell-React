import React from 'react';
import { Link } from 'react-router';
import connect from 'app/connect/index';
import Header from 'components/Header';
import Goods from 'containers/Goods';
import './style.scss';

@connect()
export default class Seller extends React.Component {
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
                seller: this.props.seller.data,
                loading: false
            })
        );
    }

    render() {
        const { seller, loading } = this.state;
        const { actions, goods } = this.props;

        if (seller === undefined) {
            return null;
        }

        return (
            <div className="sell-wrapper">
                <Header seller={seller}></Header>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/goods">商品</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ratings">评价</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/seller">商家</Link>
                    </li>
                </ul>
                <Goods seller={seller} />
            </div>
        );
    }
}
