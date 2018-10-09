import todosReducer from './../../reducers/todosReducer';
import {
    REMOVE_TODO,
    ADD_TODO,
    SET_TODOS
} from './../../actions/types';
import todos from './../fixtures/seedData';

describe('Todos Reducer Tests', () => {
    test('should setup default state of todos', () => {
        const state = todosReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual([]);
    });

    test('should remove Todo By Valid Id', () => {
        const action = {
            type: REMOVE_TODO,
            _id: todos[0]._id
        };
        const state = todosReducer(todos, action);
        expect(state).toEqual([todos[1], todos[2]]);
    });

    test('should not remove todo by invalid id', () => {
        const action = {
            type: REMOVE_TODO,
            _id: 'deks'
        };
        const state = todosReducer(todos, action);
        expect(state).toEqual([...todos]);
    });

    test('should set todos', () => {
        const action = {
            type: SET_TODOS,
            todos: todos
        }

        const state = todosReducer(undefined, action);
        expect(state).toEqual([...todos]);
    });

    test('should add todo', () => {
        const todo = {
            _id: '1234',
            text: 'Newly Add Todo',
            completed: false,
            completedAt: 1500
        };
        const action = {
            type: ADD_TODO,
            todo
        };
        const state = todosReducer(todos, action);
        expect(state[3]).toEqual(todo);
    });
});