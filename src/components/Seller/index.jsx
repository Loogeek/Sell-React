import React from 'react';
import Header from '../Header';
import './style.scss';

export default class Seller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seller: {},
            loading: true
        };
    }

    componentWillMount() {
        fetch('/api/seller').then((resp) => {
            return resp.json();
        }).then((json) => {
            if (json.errno === 0) {
                this.setState({
                    seller: json.data,
                    loading: false
                });
            }
        });
    }

    render() {
        const { seller, loading } = this.state;

        // if (loading) {
        //     return;
        // }

        return (
            <div className="sell-wrapper">
                <Header seller={seller}></Header>
            </div>
        );
    }
}
