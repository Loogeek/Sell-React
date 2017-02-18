import { combineReducers } from 'redux';

const seller = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_SELLER_LIST':
            return {...state, ...action.data};
        default:
            return state;
    }
};

const goods = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_GOODS_LIST':
            return {...state, ...action.data};
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    seller,
    goods
});

export default rootReducer;
