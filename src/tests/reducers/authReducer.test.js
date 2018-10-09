import { SET_CURRENT_USER, REMOVE_CURRENT_USER } from './../../actions/types';
import authReducer from './../../reducers/authReducer';

describe('Auth Reducer Tests', () => {
    test('should set auth reducer default', () => {
        const state = authReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual({});
    });

    test('should set uid if logged in successfully', () => {
        const action = {
            type: SET_CURRENT_USER,
            uid: 'abcd1234'
        };
        const state = authReducer(undefined, action);
        expect(state).toEqual({
            uid: 'abcd1234'
        });
    });

    test('should set auth object to empty if logout', () => {
        const action = {
            type: REMOVE_CURRENT_USER
        };
        const auth = {
            uid: 'power'
        };
        const state = authReducer(auth, action);
        expect(state).toEqual({});
    });
});