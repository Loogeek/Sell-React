import React from 'react';
import classnames from 'classnames';
import Star from 'components/Star';
import './style.scss';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
        this.state = {
            showDetail: false
        };
    }

    showDetail(bol) {
        this.setState({
            showDetail: bol
        });
    }

    render() {
        const { seller } = this.props;
        const { showDetail } = this.state;

        return (
            <section className="header">
                <div className="header-goods">
                    <div className="header-goods-thumail">
                        <img src={seller.avatar} alt={seller.name}/>
                    </div>
                    <div className="header-goods-content">
                        <div className="title">
                            <i className="title-icon"></i>
                            <span>{seller.name}</span>
                        </div>
                        <div className="des">{seller.description}/{seller.deliveryTime}分钟送达</div>
                        <div className="supports">
                            <i className="support-icon"></i>
                            <span className="support-des">{seller.supports && seller.supports[0].description}</span>
                        </div>
                    </div>
                    <div className="header-goods-count" onClick={this.showDetail.bind(this, true)}>
                        <span className="support-num">{seller.supports && seller.supports.length}个</span>
                        <i className="icon-keyboard_arrow_right"></i>
                    </div>
                </div>
                <div className="header-notice" onClick={this.showDetail.bind(this, true)}>
                    <i className="notice-icon"></i>
                    <span>{seller.bulletin}</span>
                    <i className="icon-keyboard_arrow_right"></i>
                </div>
                <div className="header-bg">
                    <img src={seller.avatar} />
                </div>
                <div className={classnames('header-detail', {'show': showDetail})}>
                    <div className="header-wrapper">
                        <h1 className="header-wrapper-name">{seller.name}</h1>
                        <Star score={seller.score} starType={48} />
                        <div className="header-wrapper-star"></div>
                        <div className="header-wrapper-title">
                            <span className="line"></span>
                            <span className="text">优惠信息</span>
                            <span className="line"></span>
                        </div>
                        <ul className="header-wrapper-supports">
                            {
                                seller.supports && seller.supports.map(item => {
                                    return (
                                        <li className="support-item" key={item.type}>
                                            <i className={classnames('support-item-icon', this.classMap[item.type])}></i>
                                            <span className="text">{item.description}</span>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                        <div className="header-wrapper-title">
                            <span className="line"></span>
                            <span className="text">商家公告</span>
                            <span className="line"></span>
                        </div>
                        <div className="header-wrapper-bulletin">
                            <p className="content">{seller.bulletin}</p>
                        </div>
                    </div>
                    <div className="header-detail-close" onClick={this.showDetail.bind(this, false)}>
                        <i className="icon-close"></i>
                    </div>
                </div>
            </section>
        );
    }
}
