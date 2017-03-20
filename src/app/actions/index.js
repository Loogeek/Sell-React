import * as types from '../constants/ActionTypes';

// Seller

function receiveSellerList(data) {
    return {
        type: types.RECEIVE_SELLER_LIST,
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
                return dispatch(receiveSellerList(json.data));
            }
        }).catch((err, msg) => {
            console.error(msg);
        });
    };
}

// Gooods

function receiveGoodsList(data) {
    return {
        type: types.RECEIVE_GOODS_LIST,
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
                return dispatch(receiveGoodsList(json.data));
            }
        }).catch((err, msg) => {
            console.error(msg);
        });
    };
}

export function setFoodCount(goods, id, num) {
    return (dispatch, getState) => {
        dispatch({
            type: types.SET_FOOD_COUNT,
            goods,
            id,
            num
        });
    };
}

export function resetShoppingList(goods) {
    return (dispatch, getState) => {
        dispatch({
            type: types.RESET_SHOPPING_LIST,
            data: goods
        });
    };
}

// Ratings

function receiveRatingsList(data) {
    return {
        type: types.RECEIVE_RATINGS_LIST,
        data
    };
}

export function fetchRatingsList() {
    return (dispatch, getState) => {
        const url = '/api/ratings';

        return fetch(url).then(resp => {
            return resp.json();
        }).then(json => {
            if (json.errno === 0) {
                return dispatch(receiveRatingsList(json.data));          
            }
        });
    };
}
