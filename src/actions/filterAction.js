import {
    SET_TEXT_FILTER,
    SORT_BY_ASC,
    SORT_BY_DSC
} from './types';

export const setTextFilter = (text) => {
    return {
        type: SET_TEXT_FILTER,
        text
    };
};

export const sortByASC = () => {
    return {
        type: SORT_BY_ASC
    };
};

export const sortByDSC = () => {
    return {
        type: SORT_BY_DSC
    };
};