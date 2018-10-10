import React from 'react';
import { connect } from 'react-redux';

import TodoForm from './TodoForm';
import { startAddTodo } from './../actions/todosActions';

export const AddTodo = (props) => {
    return (
        <div>
            <TodoForm 
                onFormSubmit={(todo) => {
                    props.startAddTodo(todo.text);
                }}
            />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        startAddTodo: (text) => dispatch(startAddTodo(text))
    };
};

export default connect(undefined, mapDispatchToProps)(AddTodo);