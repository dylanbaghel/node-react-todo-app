import { SET_ERROR, SET_NO_ERROR } from './types';

export const setError = (error_text) => {
    return {
        type: SET_ERROR,
        error_text
    };
};

export const setNoError = () => {
    return {
        type: SET_NO_ERROR
    };
};