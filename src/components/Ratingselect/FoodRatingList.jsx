import React from 'react';
import { formatDate } from 'utils/formatDate';

export default class FoodRatingList extends React.Component {
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
                            <li className="food-rating-item" key={index}>
                                <p className="food-rating-item-header">
                                    <span className="ratetime">
                                        { formatDate(item.rateTime, 'yyyy-MM-dd hh:mm') }
                                    </span>
                                    <span className="username">
                                        {item.username}
                                        <img src={item.avatar} />
                                    </span>
                                </p>
                                <p className="food-rating-item-text">
                                    <i className={item.rateType === this.POSITIVE ? 'icon-thumb_up' : 'icon-thumb_down'}></i>
                                    {item.text}
                                </p>
                            </li>
                        );
                    })
                 }
            </ul>
        );
    }
} 