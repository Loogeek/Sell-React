import React from 'react';
import connect from 'app/connect/index';
import './style.scss';

@connect
export default class FoodDetail extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentWillMount() {
        const { goods, params, foodDetail } = this.props;
        const id = Number(params.id);

        if (!foodDetail.id) {
            this.props.actions.fetchGoodsList().then(() => {
                for (let good of this.props.goods.data) {
                    let foodDet = good.foods.find(food => food.id === id);
                    if (foodDet) {
                        this.props.actions.fetchFoodDetail(foodDet);
                        break;
                    }
                }
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
