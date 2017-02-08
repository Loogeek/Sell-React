import React from 'react';
import SupportIcon from 'components/SupportIcon';
import ShoppingCart from 'components/ShoppingCart';
import BScroll from 'better-scroll';
import classnames from 'classnames';
import './style.scss';

export default class Goods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: [],
            menuIndex: 0,
            loading: true
        };
        this.goodListHeight = [0];
    }

    componentWillMount() {
        fetch('/api/goods').then((resp) => {
            return resp.json();
        }).then((json) => {
            if (json.errno === 0) {
                this.setState({
                    goods: json.data,
                    loading: false
                });
                this.initScroll();
                this.calculateHeight();
            }
        });
    }

    initScroll() {
        this.goodsMenu = new BScroll(this.refs.goodsMenu, {
            click: true                                   // 在PC端启用click事件
        });

        this.goodsDetail = new BScroll(this.refs.goodsDetail, {
            click: true,
            probeType: 3
        });

        this.goodsDetail.on('scroll', (pos) => {
            this.scrollY = Math.abs(Math.round(pos.y));
            const index = this.calculateCurrentIndex();

            if (this.state.menuIndex !== index) {
                this.setState({
                    menuIndex: index
                });
            }
        });
    }

    calculateHeight() {
        let height = 0;
        const aGoodsList = Array.from(this.refs.goodsDetail.querySelectorAll('.goods-detail-good'));

        aGoodsList.map(item => {
            height += item.clientHeight;
            this.goodListHeight.push(height);
        });
    }

    calculateCurrentIndex() {
        for (let i = 0; i < this.goodListHeight.length; i++) {
            const height1 = this.goodListHeight[i];
            const height2 = this.goodListHeight[i + 1];

            if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                return i;
            }
        }
        return 0;
    }

    selectMenu(index) {
        if (index !== this.state.menuIndex) {
            const aGoodsList = this.refs.goodsDetail.querySelectorAll('.goods-detail-good');
            this.goodsDetail.scrollToElement(aGoodsList[index], 300);
        }
    }

    render() {
        const { goods, menuIndex } = this.state;

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
                                                good.foods.map((item, index) => {
                                                    return (
                                                        <li className="goods-detail-good-item" key={index}>
                                                            <div className="item-thumail">
                                                                <img src={item.icon} alt={item.name} />
                                                            </div>
                                                            <div className="item-content">
                                                                <h2 className="item-content-name">{item.name}</h2>
                                                                <p className="item-content-desc">{item.description}</p>
                                                                <div className="item-content-extra">
                                                                    <span className="item-content-extra-count">月售{item.sellCount}</span>
                                                                    <span>好评率{item.rating}%</span>
                                                                </div>
                                                                <div className="item-content-price">
                                                                    <span className="now">￥{item.price}</span>
                                                                    {
                                                                        item.oldPrice ? <span className="old">￥{item.oldPrice}</span> : null
                                                                    }
                                                                </div>
                                                            </div>
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <ShoppingCart />
                </section>
            </div>
        );
    }
}
