import React from 'react';
import CartControl from 'components/CartControl';
import classnames from 'classnames';
import './style.scss';

export default class ShoppingCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showShoppingList: false
        };
        this.totalPrice = 0;
        this.totalCount = 0;
        this.foodList = [];
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.menuIndex !== nextProps.menuIndex) {
            return;
        }
        let foodList = [];
        nextProps.goods.map(good => {
            good.foods.map(food => {
                if (food.count > 0) {
                    foodList.push(food);
                }
            });
        });
        this.foodList = foodList;
        if (this.foodList.length === 0) {
            this.hideShoppingList();
        }
        this.calcPriceAndCount(foodList);
    }

    shouldComponentUpdate(nextProps) {
        return this.props.menuIndex === nextProps.menuIndex;
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

    renderMinPrice = () => {
        const { seller } = this.props;
        const minPrice   = seller.data && seller.data.minPrice || 20;

        switch (true) {
            case this.totalPrice === 0:
                return `￥${minPrice}元起送`;
            case this.totalPrice < minPrice:
                const diff = minPrice - this.totalPrice;
                return `还差￥${diff}元起送`;
            default:
                return '去结算';
        }
    }

    showPrice = (e) => {
        e.stopPropagation();
        const { seller } = this.props;
        const minPrice   = seller.data && seller.data.minPrice || 20;
        const price      = this.totalPrice + (seller.data && seller.data.deliveryPrice);

        if (this.totalPrice < minPrice) {
            return;
        }

        window.alert(`支付${price}`);
    }

    renderShoppingList = (food) => {
        const { goods, actions } = this.props;

        return food.map((item, index) => {
            return (
                <li className="shopping-food" key={index}>
                    <span className="shopping-food-name">{item.name}</span>
                    <div className="shopping-food-price">
                        <span>￥{item.price}</span>
                    </div>
                    <div className="shopping-food-cart-control">
                        <CartControl food={item} goods={goods} actions={actions} />
                    </div>
                </li>
            );
        });
    }

    showShoppingList = () => {
        if (this.foodList.length === 0) {
            return;
        }
        this.setState({
            showShoppingList: !this.state.showShoppingList
        });
    }

    hideShoppingList = () => {
        this.setState({
            showShoppingList: false
        });
    }

    emptyShoppingList = () => {
        const { goods, actions } = this.props;

        actions.resetShoppingList(goods);
    }

    render() {
        const { seller, goods }    = this.props;
        const { showShoppingList } = this.state;
        const minPrice             = seller.minPrice || 20;
        const minPriceClass        = this.totalPrice < minPrice ? 'not-enough' : 'enough';

        return (
            <div className="shopping-cart">
                <div className="shopping-cart-wrp" onClick={this.showShoppingList}>
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
                            <div className={classnames('total-price', {highlight: this.totalCount > 0})}>￥{this.totalPrice}</div>
                            <div className="desc">另需配送费￥{seller.deliveryPrice}元</div>
                        </div>
                        <div className="shopping-cart-content-right" onClick={this.showPrice}>
                            <div className={classnames('pay', minPriceClass)}>{this.renderMinPrice()}</div>
                        </div>
                    </div>
                </div>
                <div className={classnames('shopping-cart-list', {'show': showShoppingList})}>
                    <header className="shopping-cart-list-header">
                        <h1 className="title">购物车</h1>
                        <span className="empty" onClick={this.emptyShoppingList}>清空</span>
                    </header>
                    <ul className="shopping-cart-list-content">
                        {this.renderShoppingList(this.foodList)}
                    </ul>
                </div>
                <div className={classnames('shopping-cart-mask', {'show': showShoppingList})} onClick={this.hideShoppingList}></div>
            </div>
        );
    }
}
