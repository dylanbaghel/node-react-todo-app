import axios from 'axios';

import {
    ADD_TODO,
    REMOVE_TODO,
    SET_TODOS
} from './types';

import {
    setLoadingFalse,
    setLoadingTrue
} from './loadingActions';

export const startSetTodos = () => dispatch => {
    dispatch(setLoadingTrue());
    axios.get('https://calm-peak-63612.herokuapp.com/todos')
        .then((res) => {
            dispatch(setTodos(res.data.todos));
            dispatch(setLoadingFalse());
        }).catch((e) => {
            console.log('Error: ', e);
        });
};

export const startAddTodo = (text) => dispatch => {
    dispatch(setLoadingTrue());
    axios.post('https://calm-peak-63612.herokuapp.com/todos', {
            text
        })
        .then((res) => {
            dispatch(addTodo(res.data));
            dispatch(setLoadingFalse());
        }).catch((e) => {
            console.log(e);
        });
};

export const startDeleteTodo = (_id) => dispatch => {
    dispatch(setLoadingTrue());
    axios.delete(`https://calm-peak-63612.herokuapp.com/todos/${_id}`, {
            id: _id
        })
        .then((res) => {
            dispatch(deleteTodo(res.data.todo._id));
            dispatch(setLoadingFalse());
        })
        .catch((e) => {
            console.log(e);
        });
};

export const deleteTodo = (_id) => {
    return {
        type: REMOVE_TODO,
        _id
    };
};

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo
    };
};

export const setTodos = (todos = []) => {
    return {
        type: SET_TODOS,
        todos
    };
};