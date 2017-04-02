import React from 'react';
import connect from 'app/connect';
import Star from 'components/Star';
import SupportIcon from 'components/SupportIcon';
import './style.scss';

@connect
export default class Seller extends React.Component {
    
    componentWillMount() {
        if (!this.props.seller) {
            this.props.actions.fetchSellerList();
        }
    }
    
    render() {
        const { seller } = this.props;

        return (
            <div className="seller">
                <header className="seller-header">
                    <div className="seller-header-content">
                            <h1 className="content-title">{seller.name}</h1>
                            <Star starType={36} score={seller.score} />
                            <span className="content-text">({seller.ratingCount})</span>
                            <span className="content-text">月售{seller.sellCount}单</span>
                    </div>
                    <div className="seller-header-favorite">
                        <i className="icon-favorite"></i>
                        <span className="text">收藏</span>
                    </div>
                </header>
                <ul className="seller-remark">
                    <li className="seller-remark-block">
                        <h2>起送价</h2>
                        <div className="content">
                            <span className="content-stress">{seller.minPrice}</span>元
                        </div>
                    </li>
                    <li className="seller-remark-block">
                        <h2>商家配送</h2>
                        <div className="content">
                            <span className="content-stress">{seller.deliveryPrice}</span>元
                        </div>                       
                    </li>
                    <li className="seller-remark-block">
                        <h2>平均配送时间</h2>
                        <div className="content">
                            <span className="content-stress">{seller.deliveryTime}</span>分钟
                        </div>                       
                    </li>
                    </ul>
                <div className="split-line"></div>
                <div className="seller-bulletin">
                    <h1 className="title">公告与活动</h1>
                    <div className="seller-bulletin-content">
                        {seller.bulletin}
                    </div>
                    <ul className="seller-bulletin-supports">
                        {
                            seller.supports && seller.supports.map((support, index) => {
                                return (
                                    <li className="support-item" key={support.index}>
                                            <SupportIcon cls={4} type={support.type} />
                                            <span className="text">{support.description}</span>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="split-line"></div>
                <div className="seller-pics">
                    <h1 className="title">商家实景</h1>
                    <ul className="seller-pics-list">
                        {
                            seller.pics && seller.pics.map((pic, index) => {
                                return (
                                    <li className="pic-item" key={index}>
                                        <img src={pic} />
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="split-line"></div>
                <div className="seller-info">
                    <h1 className="title">商家信息</h1>
                    <ul className="seller-info-list">
                        {
                            seller.infos && seller.infos.map((info, index) => {
                                return (
                                    <li className="info-item">
                                        {info}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>            
            </div>
        );
    }
}