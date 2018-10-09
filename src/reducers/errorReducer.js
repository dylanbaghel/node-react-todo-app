import { SET_ERROR, SET_NO_ERROR } from './../actions/types';

const errorReducerDefaultState = {};

const errorReducer = (state = errorReducerDefaultState, action) => {
    switch(action.type) {
        case SET_ERROR:
            return {
                ...state,
                error_text: action.error_text
            };
        case SET_NO_ERROR:
            return {};
        default:
            return state;
    }
};

export default errorReducer;