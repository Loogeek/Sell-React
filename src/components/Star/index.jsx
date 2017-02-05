import React from 'react';
import classnames from 'classnames';
import './style.scss';

export default class Star extends React.Component {
    constructor(props) {
        super(props);
        this.LENGTH = 5;
        this.CLS_ON = 'on';
        this.CLS_HALF = 'half';
        this.CLS_OFF = 'off';
    }

    render() {
        const { starType, score } = this.props;
        const starScore = Math.floor(score * 2) / 2;
        const hasDecimal = starScore % 1 !== 0;
        const integer = Math.floor(starScore);
        let scoreResult = [];

        for (let i = 0; i < integer; i++) {
            scoreResult.push(this.CLS_ON);
        }
        if (hasDecimal) {
            scoreResult.push(this.CLS_HALF);
        }
        while (scoreResult.length < this.LENGTH) {
            scoreResult.push(this.CLS_OFF);
        }

        return (
            <div className={classnames('star', 'star-' + starType)}>
                {
                    scoreResult.map((itemClass, index) => {
                        return (
                            <span className={classnames('star-item', itemClass)} key={index}></span>
                        );
                    })
                }
            </div>
        );
    }
}
