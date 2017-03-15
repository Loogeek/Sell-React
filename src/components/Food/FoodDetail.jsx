import React from 'react';
import CartControl from 'components/CartControl';
import RatingSelect from 'components/RatingSelect';
import './style.scss';

export default class FoodDetail extends React.Component {

    onChangeCount = () => {
        const { actions, goods, food } = this.props;

        actions.setFoodCount(goods, food.id, 1);
    }

    render() {
        const { actions, goods, food } = this.props;

        return (
            <section className="food-detail">
                <header className="food-detail-header">
                    <img src={food.image} alt={food.name} className="food-detail-header-image" />
                    <span className="back" onClick={this.props.toggleFoodDetail.bind(this, {}, false)}>
                        <i className="icon-arrow_lift" />
                    </span>
                </header>
                <div className="food-detail-content">
                    <h2 className="food-detail-content-title">{food.name}</h2>
                    <p className="food-detail-content-detail">{`月售${food.sellCount}份 好评率${food.rating}%`}</p>
                    <div className="food-detail-content-price">
                        <span className="now">￥{food.price}</span>
                        {
                            food.oldPrice ? <span className="old">￥{food.oldPrice}</span> : null
                        }
                    </div>
                    {
                        food.count > 0 ?
                            <div className="food-cart-control">
                                <CartControl food={food} goods={goods} actions={actions} />
                            </div> :
                            <p className="buy-cart" onClick={this.onChangeCount}>加入购物车</p>
                    }
                </div>
                <div className="split-line"></div>
                <div className="food-detail-info">
                    <h3 className="detail-title">商品信息</h3>
                    <p className="info-content">{food.info}</p>
                </div>
                <div className="split-line"></div>
                <div className="food-detail-ratings">
                    <h3 className="detail-title">商品评价</h3>
                    <RatingSelect ratings={food.ratings} />
                </div>
            </section>
        );
    }
}
