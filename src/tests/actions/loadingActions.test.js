import { setLoadingFalse, setLoadingTrue } from './../../actions/loadingActions';
import { SET_LOADING_FALSE, SET_LOADING_TRUE } from './../../actions/types';

describe('Loading Action Generator Test', () => {
    test('should setup set loading false action object', () => {
        const action = setLoadingFalse();
        expect(action).toEqual({
            type: SET_LOADING_FALSE
        });
    });

    test('should setup set loading true action object', () => {
        const action = setLoadingTrue();
        expect(action).toEqual({
            type: SET_LOADING_TRUE
        });
    });
});