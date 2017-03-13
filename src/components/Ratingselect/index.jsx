import React from 'react';

export default class RatingsSelect extends React.Component {
    render() {
        return (
            <div className="ratingselect">
                <ul className="ratingselect-type">
                    <li className="ratingselect-type-block positive"></li>
                    <li className="ratingselect-type-block positive"></li>
                    <li className="ratingselect-type-block negative"></li>
                </ul>
                <div className="ratingselect-toggle">
                    <i className="icon-check_circle"></i>
                    <span className="ratingselect-toggle-text">只看有内容的评价</span>
                </div>
            </div>
        );
    }
}
