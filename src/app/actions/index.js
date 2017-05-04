import * as types from '../constants/ActionTypes';
import axios from 'axios';

// Seller

function receiveSellerList(data) {
    return {
        type: types.RECEIVE_SELLER_LIST,
        data
    };
}

export function fetchSellerList() {
    return async (dispatch, getState) => {
        const url = '/api/seller';

        try {
            const resp = await (await axios(url)).data;

            if (resp.errno === 0) {
                return dispatch(receiveSellerList(resp.data));
            }            
        } catch (error) {
            console.warn(error);
        }
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
    return async (dispatch, getState) => {
        const url = '/api/goods';

        try {
            const resp = await (await axios(url)).data;

            if (resp.errno === 0) {
                return dispatch(receiveGoodsList(resp.data));
            } 
        } catch (error) {
            console.warn(error);
        }
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
    return async (dispatch, getState) => {
        const url = '/api/ratings';

        try {
            const resp = await (await axios(url)).data;

            if (resp.errno === 0) {
                return dispatch(receiveRatingsList(resp.data));
            }
        } catch (error) {
            console.warn(error);
        }
    };
}
