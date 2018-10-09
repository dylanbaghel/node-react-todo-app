import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { setAuthToken } from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { setCurrentUser, removeCurrentUser } from './actions/authAction';
import { history } from './router/AppRouter';

const store = configureStore();

let jsx = (
    <Provider
        store={store}
    >
        <App />
    </Provider>
);

const renderApp = () => {
    return ReactDOM.render(jsx, document.getElementById('root'));
}

if (localStorage.getItem('todoToken')) {
    setAuthToken(localStorage.getItem('todoToken'));
    const decoded = jwt_decode(localStorage.getItem('todoToken'));
    console.log(decoded);
    store.dispatch(setCurrentUser(decoded._id));
    renderApp();

    if (history.location.pathname === '/') {
        history.push('/dashboard');
    }

} else {
    store.dispatch(removeCurrentUser());
    renderApp();
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
