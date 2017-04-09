import React from 'react';
import connect from 'app/connect';
import SupportIcon from 'components/SupportIcon';
import ShoppingCart from 'components/ShoppingCart';
import Food from 'components/Food';
import FoodDetail from 'components/Food/FoodDetail';
import BScroll from 'better-scroll';
import classnames from 'classnames';
import './style.scss';

@connect
export default class Goods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: [],
            menuIndex: 0,
            showFoodDetail: false,
            selectFood: {},
            loading: true
        };
        this.goodHeightList = [0];
    }

    componentWillMount = () => {
        if (this.props.goods.length > 0) {
            this.setState({
                goods: this.props.goods,
                loading: false
            }, () => {
                this.initScroll();
                this.calculateHeight();
            });
        } else {
            this.props.actions.fetchGoodsList().then(() => {
                this.setState({
                    goods: this.props.goods,
                    loading: false
                }, () => {
                    this.initScroll();
                    this.calculateHeight();
                });
            });
        }
    }

    initScroll = () => {
        this.goodsMenu = new BScroll(this.refs.goodsMenu, {
            click: true                                   // 在PC端启用click事件
        });

        this.goodsDetail = new BScroll(this.refs.goodsDetail, {
            click: true,
            probeType: 3
        });

        this.goodsDetail.on('scroll', (pos) => {
            if (!pos.y) {
                return;
            }
            this.goodsDetail.trigger('scrollCancel');
            this.scrollY = Math.abs(Math.round(pos.y));
            const index = this.calculateCurrentIndex();

            if (this.state.menuIndex !== index) {
                this.setState({
                    menuIndex: index
                });
            }
        });
    }

    calculateHeight = () => {
        let height = 0;
        const aGoodsList = [...this.refs.goodsDetail.querySelectorAll('.goods-detail-good')];

        aGoodsList.map(item => {
            height += item.clientHeight;
            this.goodHeightList.push(height);
        });
    }

    calculateCurrentIndex = () => {
        for (let i = 0; i < this.goodHeightList.length; i++) {
            const height1 = this.goodHeightList[i];
            const height2 = this.goodHeightList[i + 1];

            if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                return i;
            }
        }
        return 0;
    }

    selectMenu = (index) => {
        if (index !== this.state.menuIndex) {
            const aGoodsList = this.refs.goodsDetail.querySelectorAll('.goods-detail-good');
            this.goodsDetail.scrollToElement(aGoodsList[index], 300);
        }
    }

    toggleFoodDetail = (food, bol) => {
        this.setState({
            showFoodDetail: bol,
            selectFood: food
        });
    }

    render() {
        const { goods, menuIndex, componentUpdate, showDetail, selectFood, showFoodDetail } = this.state;
        const { seller, actions } = this.props;

        return (
            <div className="goods">
                <aside className="goods-menu" ref="goodsMenu">
                    <ul>
                        {
                            goods.map((item, index) => {
                                return (
                                    <li className={classnames('goods-menu-item', {'current': menuIndex === index})} key={index} onClick={this.selectMenu.bind(this, index)}>
                                        <span className="name">
                                            {
                                                item.type > 0 ? <SupportIcon type={item.type} cls={1} /> : null
                                            }
                                            {item.name}
                                        </span>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </aside>
                <section className="goods-detail" ref="goodsDetail">
                    <ul>
                        {
                            goods.map((good, index) => {
                                return (
                                    <li className="goods-detail-good" key={index}>
                                        <h1 className="title">{good.name}</h1>
                                        <ul>
                                            {
                                                good.foods.map((food, index) => {
                                                    return (
                                                        <Food key={index}
                                                            actions={actions}
                                                            food={food}
                                                            goods={goods}
                                                            toggleFoodDetail={this.toggleFoodDetail}
                                                        />
                                                    );
                                                })
                                            }
                                        </ul>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <ShoppingCart seller={seller} goods={goods} actions={actions} menuIndex={menuIndex} onChangeCount={this.onChangeCount} />
                </section>
                {
                    showFoodDetail ?
                        <FoodDetail
                            actions={actions}
                            goods={goods}
                            food={selectFood}
                            toggleFoodDetail={this.toggleFoodDetail}
                        /> : null
                }
            </div>
        );
    }
}
