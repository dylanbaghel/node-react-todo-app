import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './../reducers/authReducer';
import todosReducer from './../reducers/todosReducer';
import loadingReducer from './../reducers/loadingReducer';
import filterReducer from './../reducers/filterReducer';
import errorReducer from './../reducers/errorReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () => {
    const store = createStore(combineReducers({
        auth: authReducer,
        todos: todosReducer,
        isLoading: loadingReducer,
        filters: filterReducer,
        error: errorReducer
    }), composeEnhancers(
        applyMiddleware(thunk)
    ));


    return store;
};

export default configureStore;