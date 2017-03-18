import React from 'react';
import classnames from 'classnames';
import './style.scss';

export default class RatingSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRatingsType: -1,
            showAllRatingsText: true
        };
        this.ALL = -1;
        this.POSITIVE = 0;
        this.NEGATIVE = 1;
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

    renderRatingsContent = () => {
        const { ratings } = this.props;
        const { showRatingsType, showAllRatingsText } = this.state;
        let toggleFlag = true;

        return ratings.filter(item => {
            toggleFlag = showAllRatingsText ? true : Boolean(item.text);
            return toggleFlag && (showRatingsType === this.ALL || item.rateType === showRatingsType);
        }).map((item, index) => {
            return (
                <li className="ratingselect-content-item" key={index}>
                    <p className="item-header">
                        <span className="ratetime">
                                {item.rateTime}
                        </span>
                        <span className="username">
                            {item.username}
                            <img src={item.avatar} />
                        </span>
                    </p>
                    <p className="item-text">
                        <i className={item.rateType === this.POSITIVE ? 'icon-thumb_up' : 'icon-thumb_down'}></i>
                        {item.text}
                    </p>
                </li>
            );
        });
    }

    showRatingsCount = (index) => {
        const { ratings } = this.props;

        return index === this.ALL ? ratings.length : ratings.filter(item => item.rateType === index).length;
    }

    render() {
        const { classify } = this.props;
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
                <ul className="ratingselect-content">
                    { this.renderRatingsContent() }
                </ul>
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
