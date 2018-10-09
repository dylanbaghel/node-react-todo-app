import {
    SET_TEXT_FILTER,
    SORT_BY_ASC,
    SORT_BY_DSC
} from './../actions/types';

const filterReducerDefaultState = {
    text: '',
    sortBy: 'asc'
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case SET_TEXT_FILTER:
            return {
                ...state,
                text: action.text
            };
        case SORT_BY_ASC: 
            return {
                ...state,
                sortBy: 'asc'
            };
        case SORT_BY_DSC:
            return {
                ...state,
                sortBy: 'dsc'
            };
        default:
            return state;
    }
}

export default filterReducer;