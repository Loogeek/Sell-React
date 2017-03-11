import React from 'react';
import { Link } from 'react-router';
import CartControl from 'components/CartControl';
import './style.scss';

export default class Food extends React.Component {
    // showDetail = (food) => {
    //     this.setState({
    //         showDetail: true,
    //         selectFood: food
    //     });
    // }
    render() {
        const { actions, goods, food } = this.props;

        return (
            <li className="food">
                <Link to={`/food/${food.id}`} className="food-wrp">
                    <div className="food-wrp-thumail">
                        <img src={food.icon} alt={food.name} />
                    </div>
                    <div className="food-wrp-content">
                        <h2 className="food-wrp-content-name">{food.name}</h2>
                        <p className="food-wrp-content-desc">{food.description}</p>
                        <div className="food-wrp-content-extra">
                            <span className="food-wrp-content-extra-count">月售{food.sellCount}</span>
                            <span>好评率{food.rating}%</span>
                        </div>
                        <div className="food-wrp-content-price">
                            <span className="now">￥{food.price}</span>
                            {
                                food.oldPrice ? <span className="old">￥{food.oldPrice}</span> : null
                            }
                        </div>
                    </div>
                </Link>
                <div className="food-cart-control">
                    <CartControl food={food} goods={goods} actions={actions} />
                </div>
            </li>
        );
    }
}
