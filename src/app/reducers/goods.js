
export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_GOODS_LIST':
            console.log(action);
            // return {...state};
            break;
        default:
            return state;
    };
};
