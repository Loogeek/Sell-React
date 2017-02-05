import React from 'react';
import classnames from 'classnames';
import './style.scss';

export default class SupportIcon extends React.Component {
    constructor(props) {
        super(props);
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }

    render() {
        const { cls, type } = this.props;

        return (
            <i className={classnames(`support-icon-${cls}`, this.classMap[type])}></i>
        );
    }
}
