import React from 'react';
import { connect } from 'react-redux';

import { startSetTodos } from './../actions/todosActions';
import preLoader from './../gifs/preloader.gif';
import Todo from './Todo';
import AddTodo from './AddTodo';
import FilterSort from './FilterSort';
import { getSelectedTodos } from './../selectors/getSelectedTodos';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.loadingJSX = (
            <div className="preloader">
                <img src={preLoader} />
            </div>
        );
    }

    componentDidMount() {
        this.props.startSetTodos();
    }

    render() {
        return (
            this.props.isLoading ? this.loadingJSX : <div className="container mx-auto w-75">
            <div className="card card-body mb-3">
                <FilterSort />
            </div>
            <div className="card  mb-1">
                <div className="card-header">Todos</div>
                <div className="card-body">
                    {this.props.todos.length > 0 ?
                        this.props.todos.map((todo) => {
                            return <Todo
                                todo={todo}
                                key={todo._id}
                            />;
                        })
                        : <h1>No Todos Found</h1>
                    }
                </div>
            </div>
            <div className="card card-body mb-5">
                <AddTodo />
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getSelectedTodos(state.todos, state.filters),
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startSetTodos: () => dispatch(startSetTodos())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);