import React from 'react';
import classnames from 'classnames';
import RatingList from './RatingList';
import FoodRatingList from './FoodRatingList';
import './style.scss';

export default class RatingSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRatingsType: -1,
            showAllRatingsText: true
        };
        this.ALL = -1;
    }

    selectRatingsClassify = (typeIndex) => {
        this.setState({
            showRatingsType: typeIndex
        });
    }

    toggleContent = () => {
        this.setState({
            showAllRatingsText: !this.state.showAllRatingsText
        });
    }

    showRatingsCount = (index) => {
        const { ratings } = this.props;

        return index === this.ALL ? ratings.length : ratings.filter(item => item.rateType === index).length;
    }

    render() {
        const { classify, ratings, type } = this.props;
        const { showRatingsType, showAllRatingsText } = this.state;

        return (
            <div className="ratingselect">
                <ul className="ratingselect-type">
                    {
                        classify.map((item, index) => {
                            const btnClass = (index === classify.length - 1) ? 'negative' : 'positive';

                            return (
                                <li className={classnames('ratingselect-type-block', btnClass, {'active': showRatingsType === (index - 1)})} key={index}
                                onClick={this.selectRatingsClassify.bind(this, index - 1)}>
                                    {item}
                                    <span className="count">{ this.showRatingsCount(index - 1) }</span>
                                </li>
                            );
                        })
                    }
                </ul>
                <div className={classnames('ratingselect-toggle', {'on': !showAllRatingsText})} onClick={this.toggleContent}>
                    <i className="icon-check_circle"></i>
                    <span className="ratingselect-toggle-text">只看有内容的评价</span>
                </div>
                { 
                    type === 1 ? 
                        <RatingList ratings={ratings} 
                            showAllRatingsText={showAllRatingsText} 
                            showRatingsType={showRatingsType}
                        /> :
                        <FoodRatingList ratings={ratings} 
                            showAllRatingsText={showAllRatingsText} 
                            showRatingsType={showRatingsType}
                        />
                }
            </div>
        );
    }
}

RatingSelect.propTypes = {
    ratings: React.PropTypes.array
};

RatingSelect.defaultProps = {
    classify: ['全部', '推荐', '吐槽']
};
