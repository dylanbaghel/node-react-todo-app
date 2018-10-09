import {
    setCurrentUser,
    removeCurrentUser
} from './../../actions/authAction';

import {
    SET_CURRENT_USER,
    REMOVE_CURRENT_USER
} from './../../actions/types';

describe('Auth Action Generator Tests', () => {
    test('should setup the set current user action object', () => {
        const action = setCurrentUser('abcd1234');
        expect(action).toEqual({
            type: SET_CURRENT_USER,
            uid: 'abcd1234'
        });
    });

    test('should setup the remove current user action object', () => {
        const action = removeCurrentUser();
        expect(action).toEqual({
            type: REMOVE_CURRENT_USER,
        });
    });
});