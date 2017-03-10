import React from 'react';
import connect from 'app/connect/index';
import './style.scss';

@connect
export default class FoodDetail extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentWillMount() {
        // this.props.actions.
    }

    render() {
        // const { selectFood } = this.props;

        return (
            <section className="food">
                <header className="food-header">
                    <img src='' alt='' className="food-header-image"/>
                    <span className="back">
                        <i className="icon-arrow_lift"></i>
                    </span>
                </header>
                <div className="food-content">
                    <h2 className="food-content-title"></h2>
                    <p className="food-content-detail"></p>
                </div>
            </section>
        );
    }
}
