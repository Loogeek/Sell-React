import React from 'react';
import Star from 'components/Star';
import { formatDate } from 'utils/formatDate';

export default class RatingList extends React.Component {
    constructor(props) {
        super(props);
        this.ALL = -1;
        this.POSITIVE = 0;
        this.NEGATIVE = 1;
    }

    render() {
        const { ratings, showAllRatingsText, showRatingsType } = this.props;
        let toggleFlag = true;

        return (
             <ul className="ratingselect-content">
                 {
                    ratings.filter(item => {
                        toggleFlag = showAllRatingsText ? true : Boolean(item.text);
                        return toggleFlag && (showRatingsType === this.ALL || item.rateType === showRatingsType);
                    }).map((item, index) => {
                        return (
                            <li className="rating-item" key={index}>
                                <div className="rating-item-avatar">
                                    <img src={item.avatar} />
                                </div>
                                <div className="rating-item-content">
                                    <p className="rating-item-content-header">
                                        <span className="username">
                                            {item.username}
                                        </span>
                                        <span className="ratetime">
                                            { formatDate(item.rateTime, 'yyyy-MM-dd hh:mm') }
                                        </span>
                                    </p>
                                    <div className="rating-item-content-score">
                                        <Star score={item.score} starType={24} />
                                        <span className="delivery">{item.deliveryTime}</span>
                                    </div>
                                    <p className="rating-item-content-text">
                                        <i className={item.rateType === this.POSITIVE ? 'icon-thumb_up' : 'icon-thumb_down'}></i>
                                        {item.text}
                                    </p>
                                </div>
                            </li>
                        );
                    })
                 }
            </ul>
        );
    }
} 