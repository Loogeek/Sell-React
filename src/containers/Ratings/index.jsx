import React from 'react';
import connect from 'app/connect';
import Star from 'components/Star';
import RatingSelect from 'components/RatingSelect';
import './style.scss';

@connect
export default class Ratings extends React.Component {
    
    componentWillMount() {
        this.props.actions.fetchRatingsList();
    }
    
    render() {
        const { seller, ratings } = this.props;

        return (
            <section className="ratings">
                <div className="ratings-overview">
                    <div className="ratings-overview-left">
                        <h2 className="score">{seller.score}</h2>
                        <p className="title">综合评分</p>
                        <p className="rank">高于周边商家{seller.rankRate}%</p>
                    </div>
                    <div className="ratings-overview-right">
                        <div className="score-wrapper">
                            <span className="title">服务态度</span>
                            <Star score={seller.serviceScore} starType={36} />
                            <span className="score">{seller.serviceScore}</span>
                        </div>
                        <div className="score-wrapper">
                            <span className="title">商品评分</span>
                            <Star score={seller.foodScore} starType={36} />
                            <span className="score">{seller.foodScore}</span>
                        </div>
                        <p className="delivery-wrapper">
                            <span className="title">送达时间</span>
                            <span className="delivery">{seller.deliveryTime}分钟</span>
                        </p>
                    </div>
                </div>
                <div className="split-line"></div>
                <div className="ratings-list">
                    <RatingSelect ratings={ratings} classify={['全部', '推荐', '吐槽']} />
                </div>
            </section>
        );
    }
}