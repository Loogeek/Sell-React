import React from 'react';
import { Link } from 'react-router';
import Header from 'components/Header';
import Goods from 'containers/Goods';
import './style.scss';

export default class Seller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seller: {},
            loading: true
        };
    }

    componentWillMount() {
        fetch('/api/seller').then((resp) => {
            return resp.json();
        }).then((json) => {
            if (json.errno === 0) {
                this.setState({
                    seller: json.data,
                    loading: false
                });
            }
        });
    }

    render() {
        const { seller, loading } = this.state;

        // if (loading) {
        //     return;
        // }

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
                <Goods />
            </div>
        );
    }
}
