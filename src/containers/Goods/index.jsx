import React from 'react';
import SupportIcon from 'components/SupportIcon';
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
            }
        });
    }

    renderMenu() {
        const { goods } = this.state;

        return (
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
        );
    }

    render() {
        return (
            <div className="goods">
                <aside className="goods-menu">
                    <ul className="goods-menu-wrp">
                        {
                            this.renderMenu()
                        }
                    </ul>
                </aside>
                <section className="goods-detail">

                </section>
            </div>
        );
    }
}
