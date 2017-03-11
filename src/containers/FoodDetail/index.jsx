import React from 'react';
import connect from 'app/connect/index';
import './style.scss';

@connect
export default class FoodDetail extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentWillMount() {
        const { goods, params } = this.props;
        const id = Number(params.id);

        if (goods.data) {
            this.props.actions.fetchFoodDetail(goods.data, id);
        } else {
            this.props.actions.fetchGoodsList().then(() => {
                this.props.actions.fetchFoodDetail(this.props.goods.data, id);
            });
        }
    }

    render() {
        return (
            <section className="food">
                <header className="food-header">
                    <img src="" alt="" className="food-header-image" />
                    <span className="back">
                        <i className="icon-arrow_lift" />
                    </span>
                </header>
                <div className="food-content">
                    <h2 className="food-content-title" />
                    <p className="food-content-detail" />
                </div>
            </section>
        );
    }
}
