import {
    addTodo,
    deleteTodo,
    setTodos
} from './../../actions/todosActions';

import {
    ADD_TODO,
    REMOVE_TODO,
    SET_TODOS
} from './../../actions/types';

import todos from './../fixtures/seedData';

describe('Todos Action Generators Tests', () => {
    test('should setup delete todo action object', () => {
        const action = deleteTodo('abcd123');
        expect(action).toEqual({
            type: REMOVE_TODO,
            _id: 'abcd123'
        });
    });

    test('should setup set todos action object', () => {
        const action = setTodos(todos);
        expect(action).toEqual({
            type: SET_TODOS,
            todos
        });
    });

    test('should setup set todos action object with default values', () => {
        const action = setTodos();
        expect(action).toEqual({
            type: SET_TODOS,
            todos: []
        });
    });

    test('should setup add todo action object', () => {
        const todo = 'Guts Over Fear';
        const action = addTodo(todo);
        expect(action).toEqual({
            type: ADD_TODO,
            todo
        });
    });
});