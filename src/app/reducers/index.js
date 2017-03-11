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
            let flag = false;

            for (let good of action.goods) {
                good.foods.find(food => {
                    if (food.id === action.id) {
                        food.count += action.num;
                        flag = true;
                    }
                });
                if (flag) {
                    break;
                }
            }
            return {...state, ...action.goods};
        default:
            return state;
    }
};

const foodDetail = (state = {}, action) => {
    let foodDet = null;

    switch (action.type) {
        case 'FETCH_FOOD_DETAIL':
            for (let good of action.goods) {
                foodDet = good.foods.find(food => food.id === action.id);
                if (foodDet) {
                    break;
                }
            }
            return {...state, ...foodDet};
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    seller,
    goods,
    foodDetail
});

export default rootReducer;
