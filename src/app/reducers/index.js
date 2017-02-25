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
        case 'RESET_SHOPPING_LIST':
            action.data.map(good => {
                good.foods.map(food => {
                    if (food.count > 0) {
                        food.count = 0;
                    }
                });
            });
            return {...state, ...action.data};
        case 'SET_FOOD_COUNT':
            action.data.goods.map(good => {
                good.foods.map(food => {
                    if (food.id === action.data.id) {
                        food.count += action.data.num;
                    }
                });
            });
            return {...state, ...action.data.goods};
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    seller,
    goods
});

export default rootReducer;
