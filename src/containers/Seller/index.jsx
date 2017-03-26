import React from 'react';
import connect from 'app/connect';
import Star from 'components/Star';
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
                           <span className="content-stress">{seller.minPrice}元</span>
                       </div>
                   </li>
                   <li className="seller-remark-block">
                       <h2>商家配送</h2>
                       <div className="content">
                           <span className="content-stress">{seller.deliveryPrice}元</span>
                       </div>                       
                   </li>
                   <li className="seller-remark-block">
                       <h2>平均配送时间</h2>
                       <div className="content">
                           <span className="content-stress">{seller.deliveryTime}分钟</span>
                       </div>                       
                   </li>
               </ul>
            </div>
        );
    }
}