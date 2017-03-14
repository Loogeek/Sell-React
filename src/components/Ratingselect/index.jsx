import React from 'react';

export default class RatingSelect extends React.Component {

    render() {
        const { ratings, classify } = this.props;

        return (
            <div className="ratingselect">
                <ul className="ratingselect-type">
                    {
                        classify.map((item, index) =>
                            <li className="ratingselect-type-block positive" key={index}>{item}</li>
                        )
                    }
                </ul>
                <div className="ratingselect-toggle">
                    <i className="icon-check_circle"></i>
                    <span className="ratingselect-toggle-text">只看有内容的评价</span>
                </div>
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
