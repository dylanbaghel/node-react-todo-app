import axios from 'axios';
import {
    SET_CURRENT_USER,
    REMOVE_CURRENT_USER,
} from './types';
import { setAuthToken } from './../utils/setAuthToken';
import { setError, setNoError } from './errorActions';
import { setLoadingFalse, setLoadingTrue } from './loadingActions';

export const loginUser = (userData = {}) => dispatch => {
    axios.post('https://calm-peak-63612.herokuapp.com/users/login', userData)
        .then((res) => {
            dispatch(setNoError());
            const token = res.headers['x-auth'];
            localStorage.setItem('todoToken', token);
            setAuthToken(token);
            dispatch(setCurrentUser(res.data._id));
        }).catch((e) => {
            const message = e.message;
            if (message === 'Request failed with status code 400') {
                dispatch(setError('Email/Password Is Incorrect'));
                setTimeout(() => {
                    dispatch(setNoError());
                }, 5000);
            } else if (message === 'Network Error') {
                alert('No Internet Connection');
            }
        });
};

export const registerUser = (userData) => dispatch => {
    axios.post('https://calm-peak-63612.herokuapp.com/users', userData)
        .then((res) => {
            const token = res.headers['x-auth'];
            localStorage.setItem('todoToken', token);
            setAuthToken(token);
            dispatch(setCurrentUser(res.data._id));
        })
        .catch((e) => {
            const message = e.message;
            console.log(message);
            if (message === 'Request failed with status code 400') {
                dispatch(setError('User Is Already Registered With This Email'));
                setTimeout(() => {
                    dispatch(setNoError());
                }, 5000);
            } else if (message === 'Network Error') {
                alert('No Internet Connection');
            }
        });
};

export const logoutUser = () => dispatch => {
    dispatch(setLoadingTrue());
    axios.delete('https://calm-peak-63612.herokuapp.com/users/me/token')
        .then((res) => {
            localStorage.removeItem('todoToken');
            setAuthToken(false);
            dispatch(removeCurrentUser());
            dispatch(setLoadingFalse());
        }).catch((e) => {
            if (e.message === 'Network Error') {
                alert('No Internet Connection');
            }
        });
};

export const setCurrentUser = (uid) => {
    return {
        type: SET_CURRENT_USER,
        uid
    };
};

export const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER
    };
};