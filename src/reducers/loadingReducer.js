import { SET_LOADING_FALSE, SET_LOADING_TRUE } from './../actions/types';

const loadingReducerDefaultState = null;

const loadingReducer = (state = loadingReducerDefaultState, action) => {
    switch(action.type) {
        case SET_LOADING_TRUE:
            return true;
        case SET_LOADING_FALSE:
            return false;
        default:
            return state;
    }
};

export default loadingReducer;