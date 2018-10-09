import React from 'react';
import { connect } from 'react-redux';

import { startDeleteTodo } from './../actions/todosActions';

const Todo = (props) => {
    return (
        <div className="card mb-1">
            <div className="card-body d-flex justify-content-between">
                <div>{props.todo.text}</div>
                <i className="btn btn-danger" onClick={() => {
                    props.startDeleteTodo(props.todo._id);
                }}>X</i>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        startDeleteTodo: (_id) => dispatch(startDeleteTodo(_id))
    };
};

export default connect(undefined, mapDispatchToProps)(Todo);