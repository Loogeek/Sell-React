import React from 'react';
import classnames from 'classnames';
import './style.scss';

export default class CartControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: this.props.food.count || 0
        };
    }

    onIncreaseCount() {
        const { count } = this.state;

        this.setState({
            count: this.props.food.count += 1
        });
    }

    onDecreaseCount() {
        const { count } = this.state;

        this.setState({
            count: this.props.food.count -= 1
        });
    }

    render() {
        const { count } = this.state;

        return (
            <div className="cart-control">
                <i className={classnames('cart-control-decrease icon-remove_circle_outline', {'active': count > 0})} onClick={this.onDecreaseCount.bind(this)}></i>
                <span className={classnames('cart-control-count', {'active-count': count > 0})}>{count}</span>
                <i className="cart-control-increase icon-add_circle" onClick={this.onIncreaseCount.bind(this)}></i>
            </div>
        );
    }
}
