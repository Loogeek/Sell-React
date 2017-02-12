import React from 'react';
import './style.scss';

export default class ShoppingCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { seller } = this.props;

        return (
            <div className="shopping-cart">
                <div className="shopping-cart-content">
                    <div className="shopping-cart-content-left">
                        <div className="logo">
                            <div className="logo-cart">
                                <i className="icon-shopping_cart"></i>
                            </div>
                            <div className="logo-num"></div>
                        </div>
                        <div className="total-price">￥</div>
                        <div className="desc">另需配送费￥元</div>
                    </div>
                    <div className="shopping-cart-content-right">
                        <div className="pay">￥{seller.minPrice}元起送</div>
                    </div>
                </div>
            </div>
        );
    }
}
