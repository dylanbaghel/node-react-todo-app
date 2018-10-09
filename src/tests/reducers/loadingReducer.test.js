import { SET_LOADING_FALSE, SET_LOADING_TRUE } from './../../actions/types';
import loadingReducer from './../../reducers/loadingReducer';

describe('Loading Reducer Tests', () => {
    test('should set loading reducer default value', () => {
        const state = loadingReducer(undefined, { type: '@@INIT' });
        expect(state).toBe(null);
    });

    test('should set loading reducer to false', () => {
        const isLoading = true;
        const state = loadingReducer(isLoading, { type: SET_LOADING_FALSE });
        expect(state).toBe(false);
    });

    test('should set loading reducer true', () => {
        const isLoading = false;
        const state = loadingReducer(isLoading, { type: SET_LOADING_TRUE});
        expect(state).toBe(true);
    });
});