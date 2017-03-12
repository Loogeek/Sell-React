import React from 'react';
import CartControl from 'components/CartControl';
import './style.scss';

export default class Food extends React.Component {

    render() {
        const { actions, goods, food } = this.props;

        return (
            <li className="food" onClick={this.props.toggleFoodDetail.bind(this, food, true)}>
                <div className="food-thumail">
                    <img src={food.icon} alt={food.name} />
                </div>
                <div className="food-content">
                    <h2 className="food-content-name">{food.name}</h2>
                    <p className="food-content-desc">{food.description}</p>
                    <div className="food-content-extra">
                        <span className="food-content-extra-count">月售{food.sellCount}</span>
                        <span>好评率{food.rating}%</span>
                    </div>
                    <div className="food-content-price">
                        <span className="now">￥{food.price}</span>
                        {
                            food.oldPrice ? <span className="old">￥{food.oldPrice}</span> : null
                        }
                    </div>
                </div>
                <div className="food-cart-control">
                    <CartControl food={food} goods={goods} actions={actions} />
                </div>
            </li>
        );
    }
}
