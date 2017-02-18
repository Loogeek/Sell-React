import * as types from '../constants/ActionTypes';

function receiveSellerList(data) {
    return {
        type: types.FETCH_SELLER_LIST,
        data
    };
}

export function fetchSellerList() {
    return (dispatch, getState) => {
        const url = '/api/seller';

        return fetch(url).then(resp => {
            return resp.json();
        }).then(json => {
            if (json.errno === 0) {
                return dispatch(receiveSellerList(json));
            }
        }).catch((err, msg) => {
            console.error(msg);
        });
    };
}

function receiveGoodsList(data) {
    return {
        type: types.FETCH_GOODS_LIST,
        data
    };
}

export function fetchGoodsList() {
    return (dispatch, getState) => {
        const url = '/api/goods';

        return fetch(url).then(resp => {
            return resp.json();
        }).then(json => {
            if (json.errno === 0) {
                return dispatch(receiveGoodsList(json));
            }
        }).catch((err, msg) => {
            console.error(msg);
        });
    };
}
