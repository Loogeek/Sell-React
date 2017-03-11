import React from 'react';
import classnames from 'classnames';
import './style.scss';

export default class CartControl extends React.Component {
    constructor(props) {
        super(props);
        this.cacheCount = 0;
    }

    shouldComponentUpdate(nextProps) {
        return this.cacheCount !== nextProps.food.count;
    }

    onChangeCount = (num, e) => {
        e.stopPropagation();
        
        const { goods, food, actions } = this.props;
        this.cacheCount = food.count;            // 缓存当前的数量

        actions.setFoodCount(goods, food.id, num);
    }

    render() {
        const { count } = this.props.food;

        return (
            <div className="cart-control">
                <i className={classnames('cart-control-decrease icon-remove_circle_outline', { 'active': count > 0 })} onClick={this.onChangeCount.bind(this, -1)}></i>
                <span className={classnames('cart-control-count', { 'active-count': count > 0 })}>{count}</span>
                <i className="cart-control-increase icon-add_circle" onClick={this.onChangeCount.bind(this, 1)}></i>
            </div>
        );
    }
}
