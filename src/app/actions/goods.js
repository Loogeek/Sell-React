import types from '../constants/ActionTypes';

function receiveGoodsList(data) {
    return {
        type: types.FETCH_GOODS_LIST,
        data
    };
}

export function fetchGoodsList() {
    return (dispatch, getState) => {
        const url = '/api/goods';

        fetch(url).then(resp => {
            return resp.json();
        }).then(json => {
            if (json.error === 0) {
                return dispatch(receiveGoodsList(json));
            }
        }).catch((err, msg) => {
            console.error(msg);
        });
    };
}
