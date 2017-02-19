import React from 'react';
import classnames from 'classnames';
import './style.scss';

export default class ShoppingCart extends React.Component {

    constructor(props) {
        super(props);
        this.totalPrice = 0;
        this.totalCount = 0;
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.componentUpdate) {
            return;
        }

        let aFood = [];

        nextProps.goods.map(good => {
            good.foods.map(food => {
                if (food.count > 0) {
                    aFood.push(food);
                }
            });
        });
        this.calcPriceAndCount(aFood);
    }

    shouldComponentUpdate(nextProps) {
        if (!nextProps.componentUpdate) {
            return false;
        }
        return true;
    }

    calcPriceAndCount = (food) => {
        let totalPrice = 0;
        let totalCount = 0;
        food.map(item => {
            totalCount += item.count;
            totalPrice += item.price * item.count;
        });
        this.totalCount = totalCount;
        this.totalPrice = totalPrice;
    }

    render() {
        const { seller, goods } = this.props;

        return (
            <div className="shopping-cart">
                <div className="shopping-cart-content">
                    <div className="shopping-cart-content-left">
                        <div className="logo">
                            <div className={classnames('logo-cart', {highlight: this.totalCount > 0})}>
                                <i className="icon-shopping_cart"></i>
                            </div>
                            {
                                this.totalCount > 0 ? <div className="logo-num">{this.totalCount}</div> : null
                            }
                        </div>
                        <div className="total-price">￥{this.totalPrice}</div>
                        <div className="desc">另需配送费￥{seller.data && seller.data.deliveryPrice}元</div>
                    </div>
                    <div className="shopping-cart-content-right">
                        <div className="pay">￥{seller.data && seller.data.minPrice}元起送</div>
                    </div>
                </div>
            </div>
        );
    }
}
