import React from 'react';
import classnames from 'classnames';
import './style.scss';

export default class CartControl extends React.Component {

    shouldComponentUpdate(nextProps) {
        if (!nextProps.componentUpdate) {
            return false;
        }
        return true;
    }

    onChangeCount = (num) => {
        const { goods, food, actions } = this.props;
        actions.setFoodCount(goods, food.id, num);
    }

    render() {
        const { count } = this.props.food;

        return (
            <div className="cart-control">
                <i className={classnames('cart-control-decrease icon-remove_circle_outline', {'active': count > 0})} onClick={this.onChangeCount.bind(this, -1)}></i>
                <span className={classnames('cart-control-count', {'active-count': count > 0})}>{count}</span>
                <i className="cart-control-increase icon-add_circle" onClick={this.onChangeCount.bind(this, 1)}></i>
            </div>
        );
    }
}
