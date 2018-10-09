import { ADD_TODO, REMOVE_TODO, SET_TODOS } from './../actions/types';

const todosReducerDefaultState = [];

const todosReducer = (state = todosReducerDefaultState, action) => {
    switch(action.type) {
        case SET_TODOS:
            return action.todos;
        case ADD_TODO: 
            return [
                ...state,
                action.todo
            ];
        case REMOVE_TODO:
            return state.filter((todo) => {
                return todo._id !== action._id
            })
        default:
            return state;
    }
};

export default todosReducer;