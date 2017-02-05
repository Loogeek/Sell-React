import React from 'react';
import SupportIcon from 'components/SupportIcon';
import BScroll from 'better-scroll';
import './style.scss';

export default class Goods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: [],
            loading: true
        };
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
            }
        });
    }

    initScroll() {
        this.goodsMenu = new BScroll(this.refs.goodsMenu, {
            // click: true
        });

        this.goodsDetail = new BScroll(this.refs.goodsDetail, {
            // click: true
        });
    }

    render() {
        const { goods } = this.state;

        return (
            <div className="goods">
                <aside className="goods-menu" ref="goodsMenu">
                    <ul>
                        {
                            goods.map((item, index) => {
                                return (
                                    <li className="goods-menu-item" key={index}>
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
                </section>
            </div>
        );
    }
}
