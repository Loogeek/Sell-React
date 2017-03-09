import React from 'react';
import './style.scss';

export default class Food extends React.Component {
    render() {
        const { selectFood } = this.props;

        return (
            <section className="food">
                <header className="food-header">
                    <img src={selectFood.icon} alt={selectFood.name} className="food-header-image"/>
                    <span className="back">
                        <i className="icon-arrow_lift"></i>
                    </span>
                </header>
                <div className="food-content">
                    <h2 className="food-content-title">{selectFood.name}</h2>
                    <p className="food-content-detail"></p>
                </div>
            </section>
        );
    }
}
